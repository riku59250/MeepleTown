import { Component, OnInit } from '@angular/core';
import {Session} from '../class/session';
import {SessionServiceService} from '../services/session-service.service';
import {User} from '../../users/class/user';
import {LoginService} from '../../login/services/login.service';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.scss']
})
export class ListSessionComponent implements OnInit {
  listSessions: Session[] = [];
  searchString: string;
  isComplete = false ;
  user: BehaviorSubject<User>;

  constructor(private sessionService: SessionServiceService, private logService: LoginService) { }

  ngOnInit() {
    this.getAllSession();
    this.user = this.logService.log();
  }

  deleteSession(id: number) {
    this.sessionService.deleteSession(id).subscribe( () => {
        this.getAllSession();
    });
  }

  getAllSession() {
    this.sessionService.getAllSessions().subscribe( (sessions) => {
      this.listSessions = sessions;
    });
  }

  addPlayer(id: number) {
    this.sessionService.getSessionById(id).subscribe( (session) => {
     if (session.playersList.length < session.nbMaxPlayers) {
       console.log('ok');
       this.isComplete = false;
       // this.sessionService.addSession(session).subscribe();
     } else {
       this.isComplete = true;
       console.log('pas possible');
     }
    });
  }

}
