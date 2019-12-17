import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "../services/login.service";

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(private service: LoginService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
      : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.service.log().value !== null ? true : false;
  }
}
