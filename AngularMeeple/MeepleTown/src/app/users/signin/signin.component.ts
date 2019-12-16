import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  email: FormControl;
  password: FormControl;

  form: FormGroup;
  constructor(private fb: FormBuilder) {}

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
      console.log(this.form.value);
      this.form.reset();
    }
  }
  public controlEmail(): string {
    if (this.email.touched){
      if (this.email.hasError('required')){
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
}
