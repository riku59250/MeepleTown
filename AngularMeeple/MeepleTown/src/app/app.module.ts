import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './users/signup/signup.component';
import { SigninComponent } from './users/signin/signin.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateSessionComponent } from './sessions/create-session/create-session.component';
import { ListSessionComponent } from './sessions/list-session/list-session.component';
import { SessionPageComponent } from './sessions/session-page/session-page.component';
import { ListGamesComponent } from './games/list-games/list-games.component';
import { UserHeaderComponent } from './header/user-header/user-header.component';
import { SearchFilterPipe } from './filters/search-filter.pipe';
import {ListGroupComponent} from "./groups/list-group/list-group.component";
import {CreategroupComponent} from "./groups/creategroup/creategroup.component";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CreateSessionComponent,
    ListSessionComponent,
    SessionPageComponent,
    ListGamesComponent,
    UserHeaderComponent,
    SearchFilterPipe,
      ListGroupComponent,
      CreategroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SearchFilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
