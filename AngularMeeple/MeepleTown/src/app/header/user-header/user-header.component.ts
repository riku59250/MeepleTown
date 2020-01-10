import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../users/class/user";
import {LoginService} from "../../login/services/login.service";

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  user: BehaviorSubject<User>;
  constructor(private service: LoginService) { }

  ngOnInit() {
    this.user = this.service.log();
    console.log(this.user.value);
  }

  logout(): void {
    this.service.logout();
  }
}
