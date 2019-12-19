import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Game} from "../class/game";
import {GamesServicesService} from "../services/games-services.service";

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent implements OnInit {
  games: Array<Game>;

  constructor(private gameService: GamesServicesService) { }

  ngOnInit() {
   this.gameService.getGames().subscribe((data) => {
     this.games = data;
   }, (error) => {
     console.log(error);
   });
  }

}
