import { Component, OnInit } from '@angular/core';
import {GroupService} from '../services/group.service';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Group} from "../group/group";
import {logger} from "codelyzer/util/logger";
import {LoginService} from '../../login/services/login.service';

import {User} from "../../users/class/user";

@Component({
  selector: 'app-pagegroup',
  templateUrl: './pagegroup.component.html',
  styleUrls: ['./pagegroup.component.scss']
})
export class PagegroupComponent implements OnInit {


  constructor(private serviceGroup: GroupService, private route: ActivatedRoute, private router: Router, private loginService: LoginService) {}
  id: string;
  group: Group;
  addBtn;
  user: User;
  begin = 0;
  end = 10;
  diff;

  ngOnInit() {

    this.diff = 10;

    this.user = this.loginService.log().value;
    this.route.paramMap.subscribe( (params: ParamMap) => {
        if (params.has('id')) {
          this.id =  params.get('id');
          if (this.id && this.id !== '') {
            let idNumber = parseInt(this.id);
            if( idNumber !== NaN) {
              this.serviceGroup.getPageGroup(idNumber).subscribe((data) => {
                this.group = data;
                console.log(this.group.membersList.includes(this.user));
              }, (error) => {
                this.router.navigateByUrl("/listGroup");
              });
            }
          }
       }
    });
  }

  addUser(): void {
    if ( !this.includeUser() ) {
      this.group.membersList.push(this.loginService.log().value);
      this.serviceGroup.update(this.group).subscribe((success) => {
      }, (error) => {
        console.log(error);
      });
    }
  }

  skip(): void {
      let i = 0;
      this.group.membersList.forEach((user: User) => {
        if (user.id === this.user.id) {
          console.log("vrais");
          this.group.membersList.splice(i, 1);
          console.log(this.group);
          this.serviceGroup.update(this.group).subscribe((success) => {
            console.log(success);
          }, (error) => {
            console.log(error);
          });
        }
        i++;
      });
  }

  includeUser(): boolean {
    let bool = false;
    this.group.membersList.forEach((user: User) => {
      if ( user.id === this.user.id) {
        bool = true;
      }
    });
    return bool;
  }

  public Previous(): void {
    if (this.begin >= this.diff ) {
      this.end += -this.diff;
      this.begin += -this.diff;
    }
  }

  public Next(): void {
    if (this.end < this.group.membersList.length) {
      this.begin += this.diff;
      this.end += this.diff;
    }
  }

   length(): void {
    this.diff += this.begin;
    this.begin = 0;
    this.end += this.diff;
  }


}


