import {Component, Input, OnInit} from '@angular/core';
import {Session} from '../class/session';
import {SessionServiceService} from '../services/session-service.service';
import {User} from '../../users/class/user';
import {LoginService} from '../../login/services/login.service';
import {ConfirmationComponent} from "../../popup/confirmation/confirmation.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from '@angular/router';
import {group} from "@angular/animations";
import {Sort} from "@angular/material/sort";

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.scss']
})
export class ListSessionComponent implements OnInit {

  @Input()
  userPage: boolean = false;
  @Input()
  id: number;
  listSessions: Session[] = new Array ();
  searchString: string;
  user: User;
  isUserConnected = false;
  begin = 0;
  end = 10;
   diff;
   sortListSessions: Session[] = this.listSessions;

  // @ts-ignore
  constructor(private dialog: MatDialog, private sessionService: SessionServiceService, private logService: LoginService, private router: Router) { }

  ngOnInit() {

    this.diff = 10;


    this.user = this.logService.log().getValue();
    this.isUserConnected = this.isConnected();
    if ( !this.userPage) {
      this.getAllSession();
    } else {
      this.getAllSessionUser(this.id);
    }
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
      this.listSessions = this.listSessions.filter(item => item.id !== id);
    });
  }

  getAllSession() {
    this.sessionService.getAllSessions().subscribe( (sessions) => {
      this.listSessions = sessions;
      this.listSessions.sort((a, b) => (a.startDate > b.startDate) ? 1 : -1);

      this.sortListSessions = this.listSessions.slice();
    });
  }

  getAllSessionUser(id: number) {
    this.sessionService.getAllSessionsByUser(id).subscribe( (sessions) => {
      this.listSessions = sessions;
      this.listSessions.sort((a, b) => (a.startDate > b.startDate) ? 1 : -1);
      console.log(this.listSessions);

      this.sortListSessions = this.listSessions.slice();
    });
  }


  addPlayer(session: Session) {
      this.sessionService.getSessionById(session.id).subscribe( (session) => {
        if (!session.playersList) {
          session.playersList = new Array();
        }
        if (session.playersList.length < session.nbMaxPlayers) {
          if (this.user !== null) {
            this.sessionService.addPlayer(session.id, this.user).subscribe( () => {
              session.playersList.push(this.user);
              this.router.navigateByUrl('/sessionPage/' + session.id);
            }, (error) => {
              console.log(error);
            });
          }
        }
      });
  }

  getPlayers(id: number, session?){
    if (session) {
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

  getAuthor(id: number, session: Session){
      this.sessionService.getAuthor(id).subscribe( (user) => {
        session.author = user;
      });
  }

  deletePlayer(session: Session){
    this.sessionService.deletePlayer(session, this.user).subscribe( () => {
      session.playersList = session.playersList.filter(item => item.id !== this.user.id);
      if (this.userPage) {
        this.listSessions = this.listSessions.filter(item => item.id !== session.id);
      }
    });
  }

  isPlayer(session: Session){
    if(this.user && session.playersList) {
      for(let u of session.playersList) {
        if (u.id === this.user.id) {
          return true;
        }
      }
    }
    return false;
  }

  isComplete(session: Session){
    if(session.playersList) {
      return session.nbMaxPlayers <= session.playersList.length;
    }
    return false;
  }

  isConnected() {
    return this.user !== null;
  }

  isAuthor(author: User) {
    if(author) {
      return author.id === this.user.id;
    }
    return false;
  }

  // methode de rangement de tableau
  sortSessionTable(sort: Sort) {
    const session = this.listSessions.slice();
    if (!sort.active || sort.direction === '') {
      this.sortListSessions = session;
      return;
    }

    this.sortListSessions = session.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title': return compare(a.title, b.title, isAsc);
        case 'place': return compare(a.place, b.place, isAsc);
        case 'startDate': return compare(a.startDate.getDate(), b.startDate.getDate(), isAsc);
        case 'nbMaxPlayers': return compare(a.nbMaxPlayers, b.nbMaxPlayers, isAsc);
        case 'author': return compare(a.author.id, b.author.id, isAsc);
        default: return 0;
      }
    });
    // creation de fonction pour la comparaison des champs
    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }


  public Previous(): void {
    if (this.begin >= this.diff) {
      this.end += -this.diff;
      this.begin += -this.diff;
    }
  }

  public Next(): void {
    if (this.end < this.listSessions.length) {
      this.begin += this.diff;
      this.end += this.diff;
    }
  }

  length(): void {
    this.diff += this.begin;
    this.begin = 0;
    this.end +=  this.diff;
  }
}
