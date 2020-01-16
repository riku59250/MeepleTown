import { Component, OnInit } from '@angular/core';
import {Session} from '../class/session';
import {SessionServiceService} from '../services/session-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {User} from '../../users/class/user';

@Component({
  selector: 'app-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.scss']
})
export class SessionPageComponent implements OnInit {
  id: string;
  session: Session = new Session();

  constructor(private sessionService: SessionServiceService, private route: ActivatedRoute) { }

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
  }

  deletePlayer(user: User) {
    this.sessionService.deletePlayer(this.session, user).subscribe( () => {
      this.sessionService.getPlayer(this.session.id).subscribe((listUsers) => {
        this.session.playersList = listUsers;
      });
    });
  }

}
