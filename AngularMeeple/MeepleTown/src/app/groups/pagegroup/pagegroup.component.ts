import { Component, OnInit } from '@angular/core';
import {GroupService} from '../services/group.service';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Group} from "../group/group";
import {logger} from "codelyzer/util/logger";

@Component({
  selector: 'app-pagegroup',
  templateUrl: './pagegroup.component.html',
  styleUrls: ['./pagegroup.component.scss']
})
export class PagegroupComponent implements OnInit {


  constructor(private serviceGroup: GroupService, private route: ActivatedRoute, private router: Router) {
  }
  id: string;
  group: Group;
  addBtn;


  ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) => {
        if (params.has('id')) {
          this.id =  params.get('id');
          if (this.id && this.id !== '') {
            let idNumber = parseInt(this.id);
            if( idNumber !== NaN) {
              this.serviceGroup.getPageGroup(idNumber).subscribe((data) => {
                console.log(data);
                this.group = data;
              }, (error) => {
                this.router.navigateByUrl("/listGroup");
              });
            }
          }
       }
    });
  }

  isAddBtn(): void {
    console.log("coucou");
  }

}


