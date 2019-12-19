import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Game} from "../class/game";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamesServicesService {
   url = 'http://localhost:8080/meepletown/game/';
  constructor(private http: HttpClient) {}

  public getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.url);
  }
}
