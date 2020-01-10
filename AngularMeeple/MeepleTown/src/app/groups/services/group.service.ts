import { Injectable } from '@angular/core';

import {Group } from '../group/group';
import { HttpClient, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { map} from 'rxjs/operators';
import {group} from '@angular/animations';




@Injectable({
  providedIn: 'root'
})
export class GroupService {

    private url = 'http://localhost:3000/Group';
    groupSubject = new Subject<Group[]>();
    private group: Group;



    constructor(private http: HttpClient) {
    }

    public getAllGroup(): Observable<Group[]> {
        return this.http.get<Group[]>(this.url).pipe(
            map((groups: Group[]) => {
                return groups.map((group: Group) => {
                    return new Group(group.nameGroup, group.groupType, group.nameDept, group.city);
                });
            })
        );
    }



    public saveGroupToServer() {
        this.http.put('http://localhost:8080/meepletown', this.group).subscribe(
            () => {
                console.log('Groupe enregistré !');
            },
            (error => {
                console.log('Erreur ! : ' + error);
            })
        );
    }
}
