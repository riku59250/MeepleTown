import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../users/class/user";
import {LoginService} from "../../login/services/login.service";
import {ConfirmationComponent} from "../../popup/confirmation/confirmation.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  user: BehaviorSubject<User>;
  constructor(private dialog: MatDialog, private service: LoginService) { }

  ngOnInit() {
    this.user = this.service.log();
    console.log(this.user.value);
  }

  logout(): void {
    this.service.logout();
  }

  openDialogDeco() {
    const dialogRef = this.dialog.open(ConfirmationComponent, { data: {title: 'Annuler la création',
        message: `Êtes-vous sûr de vouloir annuler la création de ce groupe ? Toutes les données vont être effacées du formulaire.`, close: true}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.logout();
      }
    });
  }
}
