import { Component, OnInit } from '@angular/core';
import {Session} from '../class/session';
import {SessionServiceService} from '../services/session-service.service';
import {User} from '../../users/class/user';
import {LoginService} from '../../login/services/login.service';
import {BehaviorSubject} from "rxjs";
import {ConfirmationComponent} from "../../popup/confirmation/confirmation.component";
import {MatDialog} from "@angular/material/dialog";
import {UserServicesService} from "../../users/services/user-services.service";

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.scss']
})
export class ListSessionComponent implements OnInit {
  listSessions: Session[] = [];
  searchString: string;
  user: BehaviorSubject<User>;

  // @ts-ignore
  constructor(private dialog: MatDialog, private sessionService: SessionServiceService, private logService: LoginService, private userService: UserServicesService) { }

  ngOnInit() {
    this.getAllSession();
    this.user = this.logService.log();
    
  }

  openDialogSuppress(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationComponent, { data: {title: 'Suppression de partie',
        message: `Êtes-vous sûr de vouloir supprimer cette partie et tous ses joueurs ? Cette action est irréversible.`, close: true}
      });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteSession(id);
      }
    });
  }

  deleteSession(id: number) {
    this.sessionService.deleteSession(id).subscribe( () => {
        this.getAllSession();
    });
  }

  getAllSession() {
    this.sessionService.getAllSessions().subscribe( (sessions) => {
      this.listSessions = sessions;
      for(let session of this.listSessions) {
        this.getPlayers(session.id, session);
      }
    });
  }

  addPlayer(session: Session) {
      this.sessionService.getSessionById(session.id).subscribe( (session) => {
        if (!session.playersList) {
          session.playersList = new Array();
        }
        if (session.playersList.length < session.nbMaxPlayers) {
          if (this.user !== null) {
            this.sessionService.addPlayer(session, this.user.getValue()).subscribe(value => {
              session.playersList.push(this.user.getValue());
            }, (error) => {
              console.log(error);
            });
          }
        } 
      });
  }

  getPlayers(id: number, session?){
    if(session) {
      this.sessionService.getPlayer(id).subscribe( (user) => {
        session.playersList = user;
      });
    } else {
      this.sessionService.getSessionById(id).subscribe( (session) => {
        this.sessionService.getPlayer(id).subscribe( (user) => {
          session.playersList = user;
        });
      });
    }
     
    
  }

  isPlayer(session: Session){
    if(this.user && session.playersList) {
      for(let u of session.playersList) {
        if (JSON.stringify(u) === JSON.stringify(this.user.getValue())) {
          return true;
        }
      }
    }
    return false;
   
  }

  isComplete(session: Session){
    if(session.playersList) {
      return  session.nbMaxPlayers <= session.playersList.length;
    }
    return false;
  }
}
