import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../login/services/login.service";
import {BehaviorSubject} from "rxjs";
import {User} from "../class/user";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  tabModif = [false, false];
  user: User;
  constructor(private serviceLog: LoginService) { }

  ngOnInit() {
    this.serviceLog.log().subscribe((value) => {
      this.user = value;
    });
  }
  modifier(i: number) {
    this.tabModif[i] = !this.tabModif[i];
  }
  update(i: number) {
    this.modifier(i);
    this.serviceLog.update(this.user).subscribe((data) => {
      this.serviceLog.log().next(this.user);
    }, (error) => {
      console.log(error);
    });
  }



}
