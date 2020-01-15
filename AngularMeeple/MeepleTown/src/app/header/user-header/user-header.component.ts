import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../users/class/user";
import {LoginService} from "../../login/services/login.service";
import {ConfirmationComponent} from "../../popup/confirmation/confirmation.component";
import {MatDialog} from "@angular/material/dialog";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  user: User;
  constructor(private dialog: MatDialog, private service: LoginService, private router: Router) { }

  ngOnInit() {
     this.service.log().subscribe((data) => {
      this.user = data;
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
        this.logout();
        this.router.navigateByUrl('/signin');
      }
    });
  }
}
