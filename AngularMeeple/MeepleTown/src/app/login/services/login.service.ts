import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../users/class/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoginSubject = new BehaviorSubject<User >(null);

  private url = 'http://localhost:8080/meepletown/user/';
  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<User>   {
   return  this.http.get<User>(this.url + '/connect?email=' + email + '&password=' + password )
  }

  log(): BehaviorSubject<User> {
    return this.isLoginSubject;
  }
  logout(): void {
      this.isLoginSubject.next(null);
  }

  update(user: User): Observable<User> {
        return this.http.put<User>(this.url , user);
  }
}
