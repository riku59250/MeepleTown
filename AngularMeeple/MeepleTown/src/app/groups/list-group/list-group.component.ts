import { Component, OnInit } from '@angular/core';
import {Group} from '../group/group';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {
  searchString: string;
  listGroup = [];

  constructor() { }

  ngOnInit() {
  }



}
