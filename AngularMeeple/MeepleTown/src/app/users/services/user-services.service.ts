import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../class/user";

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  private url = 'http://localhost:8080/meepletown/user/';
  constructor(private http: HttpClient) { }

  getAllUser(): Observable<User[]>  {
    return this.http.get<User[]>(this.url);
  }
  createUser(user: User): Observable<User>  {
    console.log(user);
    return this.http.post<User>(this.url, user);
  }

}
