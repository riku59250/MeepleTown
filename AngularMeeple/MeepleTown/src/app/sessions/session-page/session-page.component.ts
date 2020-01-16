import { Component, OnInit } from '@angular/core';
import {Session} from '../class/session';
import {SessionServiceService} from '../services/session-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {User} from '../../users/class/user';
import {LoginService} from '../../login/services/login.service';
import {ConfirmationComponent} from "../../popup/confirmation/confirmation.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.scss']
})
export class SessionPageComponent implements OnInit {
  id: string;
  session: Session = new Session();
  user: User;
  isUserConnected = false;

  constructor(private dialog: MatDialog, private sessionService: SessionServiceService, private route: ActivatedRoute, private logService: LoginService) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      if (params.has('id')) {
        this.id = params.get('id');
      }
    });

    if (this.id && this.id !== '') {
      this.sessionService.getSessionById(Number.parseInt(this.id, 10)).subscribe((session) => {
        this.session = session;
      });
    }

    this.user = this.logService.log().getValue();
    this.isUserConnected = this.isConnected();
  }

  deletePlayer(user: User) {
    this.sessionService.deletePlayer(this.session, user).subscribe( () => {
      this.session.playersList = this.session.playersList.filter(item => item.id !== this.user.id);
    });
  }

  isAuthor(){
    if(this.session.author) {
      return this.session.author.id === this.user.id;
    }
    return false;
  }

  isConnected(){
    return this.user !== null;
  }

  isPlayer(){
    if(this.user && this.session.playersList) {
      for(let u of this.session.playersList) {
        if (u.id === this.user.id) {
          return true;
        }
      }
    }
    return false;
   
  }

  openDialogSuppress(user: User): void {
    const dialogRef = this.dialog.open(ConfirmationComponent, { data: {title: 'Suppression de joueur',
        message: `Êtes-vous sûr de vouloir supprimer ce joueur ?`, close: true}
      });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deletePlayer(user);
      }
    });
  }

}
