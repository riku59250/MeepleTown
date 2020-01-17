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
    end = 5;
    data;

  constructor(private gameService: GamesServicesService) { }

  ngOnInit() {

      this.data = 5;

      this.gameService.getGames().subscribe( (data) => {
        this.listGames = data;
        console.log(this.listGames);
      });
  }


  public prev(): void {
      if (this.begin >= this.data) {
          this.end += -this.data;
          this.begin += -this.data;
      }
  }

  public next(): void {
      if (this.end < this.listGames.length) {
          this.begin += this.data;
          this.end += this.data;
      }
  }

  length(): void {
      this.data += this.begin;
      this.begin = 0;
      this.end +=  this.data;
  }

}
