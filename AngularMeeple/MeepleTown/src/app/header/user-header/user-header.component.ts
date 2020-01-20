import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../users/class/user";
import {LoginService} from "../../login/services/login.service";
import {ConfirmationComponent} from "../../popup/confirmation/confirmation.component";
import {MatDialog} from "@angular/material/dialog";
import {Router, RouterModule} from "@angular/router";
import {UserServicesService} from "../../users/services/user-services.service";

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  user: User;
  constructor(private dialog: MatDialog, private service: LoginService, private router: Router,private userServicesService: UserServicesService) { }

  ngOnInit() {
      this.service.log().subscribe((data) => {
        if (data === null) {
           let u = sessionStorage.getItem('currentUser');
           console.log(u);
           if ( u !== null) {
             let id = parseInt(u);
             if (id !== NaN) {
               this.userServicesService.getUserById(id).subscribe(
                   (value)  => {
                     if (value !== null) {
                       this.user = value;
                       this.service.log().next(this.user);
                     } else {
                       this.user = null;
                       this.service.log().next(null);
                     }
                   }
               );
             }
           } else {
               this.user = null;
           }
        } else {
          this.user = data;

        }

      });

  }

  logout(): void {
    this.service.logout();
  }

  openDialogDeco() {
    const dialogRef = this.dialog.open(ConfirmationComponent, { data: {title: 'Déconnexion',
        message: `Etes-vous sure de vouloir vous déconnecter ?`, close: true}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        sessionStorage.removeItem('currentUser');
        console.log("deco");
          this.logout();
        this.router.navigateByUrl('/signin');
      }
    });
  }
}
