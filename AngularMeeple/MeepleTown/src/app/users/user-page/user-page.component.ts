import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../login/services/login.service";
import {BehaviorSubject} from "rxjs";
import {User} from "../class/user";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserServicesService} from "../services/user-services.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  tabModif = [false, false];
  user: User;
  id: string;
  admin: boolean;
  constructor(private serviceLog: LoginService, private router: Router, private route: ActivatedRoute, private userService: UserServicesService) {
    this.user = new User();
    this.admin = false;
  }

  ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      if (params.has('id')) {
        this.id =  params.get('id');
        if (this.id && this.id !== '') {
          let idNumber = parseInt(this.id);
          if( idNumber !== NaN) {
            this.userService.getUserById(idNumber).subscribe((data) => {
              this.user = data;
              this.admin = false;
            }, (error) => {
              this.router.navigateByUrl("/user");
            });
          }

        }
      } else {
        if (this.serviceLog.log().value !== null ) {
          this.userService.getUserById(this.serviceLog.log().value.id).subscribe((data)=>{
            if (data !== null) {
              this.serviceLog.log().next(data);
            }
          });
          this.serviceLog.log().subscribe((value) => {
            this.user = value;
            this.admin = true;
          });
        } else {
          this.router.navigateByUrl("/signin");
        }

      }

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
