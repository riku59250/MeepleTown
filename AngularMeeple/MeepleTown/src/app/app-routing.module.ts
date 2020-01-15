import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './users/signup/signup.component';
import {SigninComponent} from './users/signin/signin.component';
import {CreateSessionComponent} from './sessions/create-session/create-session.component';
import {ListSessionComponent} from './sessions/list-session/list-session.component';
import {SessionPageComponent} from './sessions/session-page/session-page.component';
import {ListGamesComponent} from './games/list-games/list-games.component';
import {CreategroupComponent} from './groups/creategroup/creategroup.component';
import {UserPageComponent} from "./users/user-page/user-page.component";
import {ListGroupComponent} from "./groups/list-group/list-group.component";
import {PagegroupComponent} from "./groups/pagegroup/pagegroup.component";



const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'createSession', component: CreateSessionComponent},
  {path: 'listSessions', component: ListSessionComponent},
  {path: 'sessionPage/:id', component: SessionPageComponent},
  {path: 'listGame', component: ListGamesComponent},
  {path: 'createGroup' , component: CreategroupComponent},
  {path: 'pageGroup/:id', component: PagegroupComponent},
  {path: 'listGroup' , component: ListGroupComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'user/:id', component: UserPageComponent},
  {path: '', redirectTo: '/signup', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
