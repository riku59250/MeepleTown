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

  Groups = [];
  description;
  data;
  addBtn;
  }



ngOnInit(); {
    this.addBtn = 'Rejoindre';

    // @ts-ignore
    this.serviceGroup.getPageGroup(1).subscribe( (data ) => {
      this.Groups = data;
    });
  }


  // @ts-ignore
// tslint:disable-next-line:align
  public isAddBtn();: string; {
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
