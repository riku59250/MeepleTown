import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from '../../validators/custom-validator';
import {UserServicesService} from '../services/user-services.service';
import {User} from '../class/user';
import {LoginService} from '../../login/services/login.service';
import {Router} from '@angular/router';
import {ConfirmationComponent} from "../../popup/confirmation/confirmation.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  load: boolean;
  pseudo: FormControl;
  email: FormControl;
  genre: FormControl;
  departement: FormControl;
  city: FormControl;
  password: FormControl;
  confirm: FormControl;
  passwordLength = 8;
  form: FormGroup;

  constructor(private dialog: MatDialog, private fb: FormBuilder, private userServices: UserServicesService, private log: LoginService, private router: Router) { }

  ngOnInit() {
    this.load = false;
    this.pseudo = new FormControl(null, [Validators.required]);
    this.genre = new FormControl();
    this.departement = new FormControl(null, [Validators.required]);
    this.city = new FormControl(null, [Validators.required]);
    this.confirm = new FormControl(null, [Validators.required]);
    this.password = new FormControl(null,[Validators.required, Validators.minLength(this.passwordLength)]);
    this.email = new FormControl(null, [Validators.required, CustomValidator.email()]);

    this.form = this.fb.group({
      email: this.email,
      pseudo: this.pseudo,
      genre: this.genre,
      departement: this.departement,
      city: this.city,
      password: this.password,
      confirm: this.confirm
    },{
      validators : CustomValidator.match_password()
    });
  }

  public signup() {

    if ( this.form.valid) {

      let user = new User(this.form.value.pseudo, this.form.value.email, this.form.value.password, this.form.value.departement, this.form.value.city);
      this.openDialogValid(user);

    }
  }

   openDialogValid(user: User) {
    const dialogRef = this.dialog.open(ConfirmationComponent, { data: {title: 'Bravo !',
        message: `Etes-vous sure de vouloir crée ce compte ?  `, close: true}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.form.reset();
        this.load = true;
        this.userServices.createUser(user).subscribe(() => {
          this.log.login(user.mail, user.password).subscribe( (data) => {
                if (data !== null ) {
                  this.log.log().next(data);
                  this.router.navigateByUrl('/createSession');
                }
              },
              (error) => {
                this.log.log().next(null);
                console.log("error");
              }, () => {
                this.load = false;
              });

        });
      }
    });
  }

  public controlEmail(): string {
    if (this.email.touched) {
      if (this.email.hasError('required')) {
        return `L'adresse e-mail est obligatoire.`;
      }
      if (this.email.hasError('error_mail')) {
        return `L'adresse e-mail n'est pas correcte.`;
      }

    }
    return null;
  }
  public controlPseudo(): string {
    if (this.pseudo.touched) {
      if (this.pseudo.hasError('required')) {
        return `Le pseudo est obligatoire.`;
      }
    }
    return null;
  }
  public controlDepartement(): string {
    if (this.departement.touched) {
      if (this.departement.hasError('required')) {
        return `Le departement est obligatoire.`;
      }
    }
    return null;
  }
  public controlVille(): string {
    if (this.city.touched) {
      if (this.city.hasError('required')) {
        return `La ville est obligatoire.`;
      }
    }
    return null;
  }

  public controlPassword(): string {
    if (this.password.touched) {
      if (this.password.hasError('required')) {
        return `Le mot de passe est obligatoire.`;
      }
      if (this.password.hasError('minlength')) {
        return `Le mot de passe doit contenir au moins ${this.passwordLength} caractères (actuellement ${this.password.value.length}).`;
      }
    }
    return null;
  }
  public controlConfirm(): string {
    if (this.confirm.touched) {
      if (this.confirm.hasError('required')) {
        return `La confirmation du mot de passe est obligatoire.`;
      }
      if (this.form.hasError('error_password')) {
        return 'Les mots de passe doivent être identiques.';
      }
    }
    return null;
  }
  public controlGenre(): string {
    if (this.genre.dirty) {
      if (this.genre.hasError('required')) {
        return `N'oubliez pas de selectionner votre sexe !`;
      }
    }
    return null;
  }
}
