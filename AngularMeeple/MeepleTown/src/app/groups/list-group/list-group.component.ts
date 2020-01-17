import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../group/group';
import {GroupService} from '../services/group.service';
import {group} from '@angular/animations';
import {log} from "util";
import {LoginService} from "../../login/services/login.service";
import {UserServicesService} from "../../users/services/user-services.service";


@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {
  constructor(private serviceGroup: GroupService, private loginService: LoginService, private userServicesService: UserServicesService) { }
  @Input()
  listGroup: Array<Group> = new Array<Group>();
  @Input()
  userPage = false;
  begin = 0;
  end = 5;
  diff = 0;
  data;
  ngOnInit() {
    this.data = 5;
    if (!this.userPage && this.listGroup.length === 0){
      this.serviceGroup.getAllGroup().subscribe((data) => {
            this.listGroup = data;
          }
      );
    }
  }
  public Previous(): void {
    // @ts-ignore
    /*
        if (this.listGroup.length >= this.begin) {
          this.end = (this.end - 5);
          this.begin = (this.begin - 5);
        }
    */
    if (this.begin >= this.data) {
      this.end += this.diff;
      this.end += -this.data;
      this.begin += -this.data;
      this.diff = 0;
    }
  }
  public Next(): void {
    /*
    if (this.end < this.listGroup.length) {
      this.begin =  (this.begin + 5);
      this.end = (this.end + 5);
     */

    if (this.end < this.listGroup.length) {
      if ( (this.end + this.data) > this.listGroup.length){
        this.begin += this.data;
        this.end = this.listGroup.length;
        this.diff = (this.data + this.begin) - this.listGroup.length;
      } else {
        this.begin += this.data;
        this.end += this.data;
      }

    }
  }
}
