
import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../group/group';
import {GroupService} from '../services/group.service';
import {group} from '@angular/animations';
import {log} from 'util';
import {LoginService} from '../../login/services/login.service';
import {UserServicesService} from '../../users/services/user-services.service';
import {Sort} from '@angular/material/sort';



@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {

  constructor(private serviceGroup: GroupService, private loginService: LoginService, private userServicesService: UserServicesService) {

  }
  @Input()
  listGroup: Array<Group> = new Array<Group>();
  @Input()
  userPage = false;
  searchText: string;
  begin = 0;
  end = 10;
  diff;
  sortListGroup: Array<Group> = this.listGroup;

  ngOnInit() {
    console.log(this.listGroup);
    this.diff = 10;
    if (!this.userPage && this.listGroup.length === 0) {
      this.serviceGroup.getAllGroup().subscribe((data) => {
            this.listGroup = data;
            this.sortListGroup = this.listGroup.slice();
          }
      );

    }
  }

  // création methode sortTable()
  sortTable(sort: Sort) {
    const group = this.listGroup.slice();
    if (!sort.active || sort.direction === '') {
      this.sortListGroup = group;
      return;
    }

    this.sortListGroup = group.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'type': return compare(a.type, b.type, isAsc);
        case 'nameDept': return compare(a.nameDept, b.nameDept, isAsc);
        case 'city': return compare(a.city, b.city, isAsc);
        default: return 0;
      }
    });
    // creation de fonction pour la comparaison des champs
    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }


  public Previous(): void {
    // @ts-ignore

    if (this.begin >= this.diff) {
      this.end += -this.diff;
      this.begin += -this.diff;
    }
    /*
    if (this.begin >= this.data) {
      this.end += this.diff;
      this.end += -this.data;
      this.begin += -this.data;
      this.diff = 0;
    }
    */
  }

  public Next(): void {
    if (this.end < this.listGroup.length) {
      this.begin += this.diff;
      this.end += this.diff;
    }

    /*
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

     */
  }

  length(): void {
    this.diff += this.begin;
    this.begin = 0;
    this.end += this.diff;
  }



}



