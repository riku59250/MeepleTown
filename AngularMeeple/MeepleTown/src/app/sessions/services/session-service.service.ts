import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Session} from '../../classes/session';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  private url = 'http://localhost:8080/meepletown/session/';
  session: Session = new Session();
  sessions: Session[] = [];

  constructor(private http: HttpClient) {
    this.session.title = 'Super partie de 7 Wonders';
    this.session.place = 'Dans les locaux de Dawan';
    this.session.description = `Venez jouer avec nous autour d'une table de 7 wonders, parce qu'on est trop cool. ` ;
    this.session.nbMaxPlayers = 7;
    this.session.nbMinPlayers = 2;
    this.session.startDate = new Date();
    this.session.endDate = new Date();
    this.session.isPrivate = false;
    this.sessions.push(this.session);
  }

  public getAllSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(this.url);
  }

  public getSessionById(id: number) { // : Observable<Session> {
   // const url2 = this.url + '/' + id;
   // return this.http.get<Session>(this.url);

    return this.session;
  }

  public addSession(session: Session) {
    return this.http.post(this.url, session);
  }

  public deleteSession(id: number) {
    const url2 = this.url + '/' + id;
    return this.http.delete(url2);
  }

  public updateSession(session: Session): Observable<Session> {
    const url2 = this.url + '/' + session.id;
    return this.http.put<Session>(url2, session);
  }
}
