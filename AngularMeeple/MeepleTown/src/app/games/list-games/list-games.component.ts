import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Game} from "../class/game";
import {GamesServicesService} from "../services/games-services.service";

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent implements OnInit {
    @Input()
    listGames: Array<Game>;
    searchText: string;

  constructor(private gameService: GamesServicesService) { }

  ngOnInit() {

  }

}
