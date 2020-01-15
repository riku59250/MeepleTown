import { Component, OnInit } from '@angular/core';
import {GroupService} from "../services/group.service";

@Component({
  selector: 'app-pagegroup',
  templateUrl: './pagegroup.component.html',
  styleUrls: ['./pagegroup.component.scss']
})
export class PagegroupComponent implements OnInit {

  constructor(private serviceGroup: GroupService) {
    // @ts-ignore
    super(serviceGroup);
  }
  description;
  imgGroup;
  data;
  addBtn;


  ngOnInit() {
    this.addBtn = 'Rejoindre';


    this.serviceGroup.getPageGroup().subscribe( (data ) => {
      this.description = data;
      this.imgGroup = data;
    });
  }


  // @ts-ignore
  public isAddBtn(): string {
    if (this.addBtn.click) {
      this.addBtn._value = 'Quitter';
    }
  }


  /*
   public displayDescription(){
     return this.description;
   }
 */

}
