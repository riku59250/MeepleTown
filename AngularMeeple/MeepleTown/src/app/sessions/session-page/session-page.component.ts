import { Component, OnInit } from '@angular/core';
import {Session} from '../../classes/session';
import {SessionServiceService} from '../services/session-service.service';

@Component({
  selector: 'app-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.scss']
})
export class SessionPageComponent implements OnInit {
  id: string;
  session: Session = new Session();

  constructor(private sessionService: SessionServiceService) { }

  ngOnInit() {
    this.session = this.sessionService.getSessionById(Number.parseInt(this.id, 10));
  }

}
