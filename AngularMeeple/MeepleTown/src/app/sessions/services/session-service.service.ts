import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Session} from '../class/session';

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

  public addSession(session: Session) {
    return this.http.post(this.url, session);
  }

  public deleteSession(id: number) {
    const url2 = this.url + id;
    return this.http.delete(url2);
  }

  /*public updateSession(session: Session): Observable<Session> {
    const url2 = this.url + session.id;
    return this.http.put<Session>(url2, session);
  }*/
}
