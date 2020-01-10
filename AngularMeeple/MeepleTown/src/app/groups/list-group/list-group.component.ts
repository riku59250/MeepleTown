import { Component, OnInit } from '@angular/core';
import {Group} from '../group/group';
import {GroupService} from '../services/group.service';
import {group} from '@angular/animations';


@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {
  constructor(private serviceGroup: GroupService) { }
  listGroup = [];
  begin = 0;
  end = 5;
  data;
  ngOnInit() {
    this.data = 5;
    this.serviceGroup.getAllGroup().subscribe((data) => {
          this.listGroup = data;
        }
    );
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
      this.end += -this.data;
      this.begin += -this.data;
    }
  }
  public Next(): void {
    /*
    if (this.end < this.listGroup.length) {
      this.begin =  (this.begin + 5);
      this.end = (this.end + 5);
     */
    if (this.end < this.listGroup.length) {
      this.begin += this.data;
      this.end += this.data;
    }
  }
  length(): void {
    this.data = +this.begin;
    this.begin = 0;
    this.end = this.data;
  }
}