import { Component, OnInit } from '@angular/core';
import {GroupService} from '../services/group.service';

@Component({
  selector: 'app-pagegroup',
  templateUrl: './pagegroup.component.html',
  styleUrls: ['./pagegroup.component.scss']
})
export class PagegroupComponent implements OnInit {


  constructor(private serviceGroup: GroupService) {
  }
  id
  Groups = [];
  data;
  addBtn;


  ngOnInit() {
    this.addBtn = 'Rejoindre';


    this.serviceGroup.getPageGroup(this.id).subscribe( (data ) => {
      this.Groups = data;
    });
  }
  }



