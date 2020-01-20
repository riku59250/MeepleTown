import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../class/game';
import {GamesServicesService} from '../services/games-services.service';
import {Sort} from '@angular/material/sort';


@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent implements OnInit {

    @Input()
    listGames: Array<Game> = new Array<Game>();
    @Input()
    userPage = false;
    searchText: string;
    begin = 0;
    end = 10;
    data;
    diff;

    sortListGames: Array<Game> = this.listGames;

  constructor(private gameService: GamesServicesService) { }

  ngOnInit() {

      this.diff = 10;

      if ( !this.userPage && this.listGames.length === 0 ) {
          this.gameService.getGames().subscribe( (data) => {
              this.listGames = data;
              this.sortListGames = this.listGames.slice();
          });
      }

  }

    // création methode sortGameTable()
    sortGameTable(sort: Sort) {
        const game = this.listGames.slice();
        if (!sort.active || sort.direction === '') {
            this.sortListGames = game;
            return;
        }

        this.sortListGames = game.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                // case 'type': return compare(   a.type, b.type, isAsc);
                case 'description': return compare(a.description, b.description, isAsc);
                case 'nbrMaxJoueur': return compare(a.nbrMaxJoueur, b.nbrMaxJoueur, isAsc);
                default: return 0;
            }
        });
        // creation de fonction pour la comparaison des champs
        function compare(a: number | string, b: number | string, isAsc: boolean) {
            return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
        }
    }


// methode bouton précédent
  public prev(): void {
      if (this.begin >= this.diff) {
          this.end += -this.diff;
          this.begin += -this.diff;
      }
  }

  // méthode bouton suivant
  public next(): void {
      if (this.end < this.listGames.length) {
          this.begin += this.diff;
          this.end += this.diff;
      }
  }

  // méthode pour redéfinir le nombre d'élément à afficher
  length(): void {
      this.diff += this.begin;
      this.begin = 0;
      this.end +=  this.diff;
  }

}
