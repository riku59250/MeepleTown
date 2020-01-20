import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login/services/login.service";
import {User} from "./users/class/user";
import {UserServicesService} from "./users/services/user-services.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MeepleTown';
  user: User;
  constructor(private loginService: LoginService, private userServicesService: UserServicesService) {
  }
  ngOnInit() {
    this.loginService.log().subscribe((data) => {
      this.user = data;

    });
  }
}
