import { Injectable } from '@angular/core';

import {Group } from '../group/group';
import { HttpClient, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { map} from 'rxjs/operators';
import {group} from '@angular/animations';
import {User} from "../../users/class/user";




@Injectable({
  providedIn: 'root'
})
export class GroupService {

    private url = 'http://localhost:8080/meepletown/groupe/';

    groupSubject = new Subject<Group[]>();
    private group: Group;



    constructor(private http: HttpClient) {
    }

    public getAllGroup(): Observable<Group[]> {
        /*return this.http.get<Group[]>(this.url).pipe(
            map((groups: Group[]) => {
                console.log(groups);
                return groups.map((group: Group) => {
                    console.log(group);
                    return new Group(group.id, group.nameGroup, group.groupType, group.nameDept, group.city, group.description);
                });
            })
        );*/
        return this.http.get<Group[]>(this.url);
    }


    public getPageGroup(id: number): Observable<Group> {
    /*return  this.http.get<Group[]>(this.url + '/' + this.group.id).pipe(
        map( (groups: Group[]) => {
            return groups.map(( group: Group) => {
                return new Group(group.id, group.nameGroup, group.groupType, group.nameDept, group.city, group.description);
            });
        })
    );*/
    return this.http.get<Group>(this.url + '/' + id);
    }

   public update(group: Group): Observable<Group> {
        return  this.http.put<Group>(this.url , group );
   }
    public createGroupe(group : Group, id: number): Observable<Group>{
            return this.http.post<Group>(this.url  + id, group);
    }
}
