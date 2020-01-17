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
    begin = 0;
    end = 10;
    data;
    diff;

  constructor(private gameService: GamesServicesService) { }

  ngOnInit() {

      this.diff = 10;

      this.gameService.getGames().subscribe( (data) => {
        this.listGames = data;
        console.log(this.listGames);
      });
  }


  public prev(): void {
      if (this.begin >= this.diff) {
          this.end += -this.diff;
          this.begin += -this.diff;
      }
  }

  public next(): void {
      if (this.end < this.listGames.length) {
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
