import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserServicesService} from "../services/user-services.service";
import {LoginService} from "../../login/services/login.service";
import {Router} from "@angular/router";
import {User} from "../class/user";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  error = false;
  email: FormControl;
  password: FormControl;

  form: FormGroup;
  constructor(private fb: FormBuilder, private service: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.email = new FormControl(null, [Validators.required]);
    this.password = new FormControl(null, [Validators.required]);
    this.form = this.fb.group({
      email: this.email,
      password: this.password
    });

  }

  public signin(): void {
    if (this.form.valid) {
      this.service.login(this.form.value.email, this.form.value.password).subscribe(
          (data) => {
            if (data !== null ) {
              this.service.log().next(data);
              this.error = false;
              this.router.navigateByUrl('/createSession');
            }
          },
          (error) => {
            this.service.log().next(null);
            this.error = true;
          }
      );
      this.form.reset();
    }
  }
  public controlEmail(): string {
    if (this.email.touched) {
      if (this.email.hasError('required')) {
        return  `L'email est requis pour pouvoir ce connecter`;
      }
    }
    return null;
  }
  public controlPassword(): string {
    if (this.password.touched) {
      if (this.password.hasError('required')) {
        return `Le mot de passe est requis pour pouvoir ce connecter`;
      }
    }
    return null;
  }
  public messageError(): string{
    if (this.error) {
      return "Le mot de passe ou l'address email est invalide !";
    }
    return null;
  }
}
