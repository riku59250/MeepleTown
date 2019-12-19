import { Injectable } from '@angular/core';

import {Group } from '../group/group';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class GroupService {

    private url = 'http://localhost:4200/createGroup';
    groupSubject: any;

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
}
