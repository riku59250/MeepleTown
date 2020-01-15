import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Session} from '../class/session';
import {User} from '../../users/class/user';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  private url = 'http://localhost:8080/meepletown/session/';
  session: Session = new Session();
  sessions: Session[] = [];

  constructor(private http: HttpClient) {}

  public getAllSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(this.url);
  }

  public getSessionById(id: number): Observable<Session> {
    const url2 = this.url + id;
    return this.http.get<Session>(url2);
  }

  public addSession(session: Session, user: User){
    return this.http.post(this.url + '/' + user.id, session, );
  }

  public deleteSession(id: number) {
    const url2 = this.url + id;
    return this.http.delete(url2);
  }

  /*public updateSession(session: Session): Observable<Session> {
    const url2 = this.url + session.id;
    return this.http.put<Session>(url2, session);
  }*/

  public addPlayer(id: number, user: User): Observable<User> {
    return this.http.put<User>(this.url + 'adduser/' + id , user);
  }

  public deletePlayer(session: Session, user: User){
    const url2 = this.url + 'deleteuser/' + session.id + '/' + user.id;
    console.log('ok ' + url2)
    return this.http.delete(url2);
  }

  public getPlayer(id: number): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'getusers/' + id);
  }

  public getAuthor(id: number): Observable<User> {
    return this.http.get<User>(this.url + 'getauthor/' + id);
  }
}
