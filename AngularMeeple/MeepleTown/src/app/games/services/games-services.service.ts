import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Game} from "../class/game";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamesServicesService {
   url = 'localhost:3030/games';
   Games: Array<Game>;
  constructor(private http: HttpClient) {
    this.Games = [new Game("7 Wonders", null, 'Jeu de gestion de ressource', 2, 7),
        new Game('Glank', null, 'Jeu de deck building', 2, 4),
        new Game('Dice Forge', null, 'Jeu de dés et de ressources', 2, 4)
    ];
  }

  public getGames(): Array<Game> {
    return this.Games;
  }
}
