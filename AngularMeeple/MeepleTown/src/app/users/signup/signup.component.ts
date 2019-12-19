import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from '../../validators/custom-validator';
import {UserServicesService} from '../services/user-services.service';
import {User} from '../class/user';
import {LoginService} from '../../login/services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  pseudo: FormControl;
  email: FormControl;
  genre: FormControl;
  departement: FormControl;
  city: FormControl;
  password: FormControl;
  confirm: FormControl;
  passwordLength = 8;
  form: FormGroup;

  constructor(private fb: FormBuilder, private userServices: UserServicesService, private log: LoginService, private router: Router) { }

  ngOnInit() {
    this.pseudo = new FormControl(null, [Validators.required]);
    this.genre = new FormControl(null, [Validators.required]);
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

    this.log.log().subscribe((value) => {
      if ( value !== null) {
        this.router.navigateByUrl('/createSession');
      }
    });
  }

  public signup() {
    if ( this.form.valid) {
      console.log(this.form.value);
      let user = new User(this.form.value.pseudo, this.form.value.email, this.form.value.password, this.form.value.departement, this.form.value.city);
      console.log(user);
      this.userServices.createUser(user).subscribe(() => {
        this.log.login(user.mail, user.password);
      });
      this.form.reset();
    } else {
      console.log(this.form.invalid);
    }
  }

  public controlEmail(): string {
    if (this.email.touched) {
      if (this.email.hasError('required')) {
        return `L'adresse email est obligatoire`;
      }
      if (this.email.hasError('error_mail')) {
        return `L'adresse email n'est pas bonne`;
      }

    }
    return null;
  }
  public controlPseudo(): string {
    if (this.pseudo.touched) {
      if (this.pseudo.hasError('required')) {
        return `Le pseudo est obligatoire`;
      }
    }
    return null;
  }
  public controlDepartement(): string {
    if (this.departement.touched) {
      if (this.departement.hasError('required')) {
        return `le departement est obligatoire`;
      }
    }
    return null;
  }
  public controlVille(): string {
    if (this.city.touched) {
      if (this.city.hasError('required')) {
        return `la ville est obligatoire`;
      }
    }
    return null;
  }

  public controlPassword(): string {
    if (this.password.touched) {
      if (this.password.hasError('required')) {
        return `Le mot de passe est obligatoire`;
      }
      if (this.password.hasError('minlength')) {
        return `Le password doit contenir aux moins ${this.passwordLength} (actuellement ${this.password.value.length})`;
      }
    }
    return null;
  }
  public controlConfirm(): string {
    if (this.confirm.touched) {
      if (this.confirm.hasError('required')) {
        return `Confirmé le mot de passe est obligatoire`;
      }
      if (this.form.hasError('error_password')) {
        return 'Les mot de passe doivent etre identique !';
      }
    }
    return null;
  }
  public controlGenre(): string {
    if (this.genre.dirty) {
      if (this.genre.hasError('required')) {
        return `N'oublier pas de selectionner votre sexe !`;
      }
    }
    return null;
  }
}
