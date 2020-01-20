import { Component, OnInit } from '@angular/core';
import {Session} from '../class/session';
import {SessionServiceService} from '../services/session-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {User} from '../../users/class/user';
import {LoginService} from '../../login/services/login.service';
import {ConfirmationComponent} from "../../popup/confirmation/confirmation.component";
import {MatDialog} from "@angular/material/dialog";
import {Game} from "../../games/class/game";
import {GamesServicesService} from "../../games/services/games-services.service";

@Component({
  selector: 'app-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.scss']
})
export class SessionPageComponent implements OnInit {
  id: string;
  games: Array<Game>;
  indexGame: number;
  session: Session = new Session();
  user: User;
  isUserConnected = false;
  isFull = true;
  constructor(private dialog: MatDialog, private sessionService: SessionServiceService, private route: ActivatedRoute, private logService: LoginService, private gamesService: GamesServicesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      if (params.has('id')) {
        this.id = params.get('id');
      }
    });

    if (this.id && this.id !== '') {
      this.sessionService.getSessionById(Number.parseInt(this.id, 10)).subscribe((session) => {
        this.session = session;
        this.isFull = this.full();
        this.gamesService.getGames().subscribe( (data) => {
          this.games = this.verifeListGame(data, this.session);
        });
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

  isAuthor() {
    if (this.session.author) {
      return this.session.author.id === this.user.id;
    }
    return false;
  }

  isConnected() {
    return this.user !== null;
  }
  full() {
    return this.session.playersList.length >= this.session.nbMaxPlayers;
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
  skip(): void {
    this.deletePlayer(this.user);
  }
  addPlayer() {
    this.sessionService.getSessionById(this.session.id).subscribe( (session) => {
      if (!session.playersList) {
        session.playersList = new Array();
      }
      if (session.playersList.length < session.nbMaxPlayers) {
        if (this.user !== null) {
          this.sessionService.addPlayer(session.id, this.user).subscribe( () => {
            session.playersList.push(this.user);
          }, (error) => {
            console.log(error);
          });
        }
      }
      this.session = session;
    });

  }
  addGame() {
    if (this.indexGame !== undefined) {
      this.sessionService.updateLisGame(this.games[this.indexGame], this.session.id).subscribe(() =>{
        this.session.gamesListSession.push(this.games[this.indexGame]);
        this.games = this.verifeListGame(this.games, this.session);
      },(error) => {
        console.log(error);
      });
    }
  }
  verifeListGame(games: Array<Game>, session: Session): Array<Game>{
    games.forEach((value, index) => {
      this.session.gamesListSession.forEach((value1, index1) => {
        if ( value1.id === value.id) {
          games.splice(index, 1);
        }
      });
    });
    return games;

  }

  supprGame(game: Game){
    this.sessionService.deleteGame(this.session, game).subscribe( () => {
      this.session.gamesListSession.forEach((value1, index1) => {
        if ( value1.id === game.id) {
          this.session.gamesListSession.splice(index1, 1);
        }
      });
      this.session.playersList = this.session.playersList.filter(item => item.id !== this.user.id);
    });
  }

  openDialogSuppressGame(game){
    const dialogRef = this.dialog.open(ConfirmationComponent, { data: {title: 'Suppression de jeu',
        message: `Êtes-vous sûr de vouloir supprimer le jeu ${game.name} de votre partie ?`, close: true}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.supprGame(game);
      }
    });
  }
}
