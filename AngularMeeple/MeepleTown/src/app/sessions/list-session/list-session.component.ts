import { Component, OnInit } from '@angular/core';
import {Session} from '../../classes/session';
import {SessionServiceService} from "../services/session-service.service";

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.scss']
})
export class ListSessionComponent implements OnInit {
  listSessions: Session[] = [];

  constructor(private sessionService: SessionServiceService) { }

  ngOnInit() {
    this.listSessions = this.sessionService.getAllSessions();
    // TO DO récuperer les sessions de la DB
  }

}
