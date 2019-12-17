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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CreateSessionComponent,
    ListSessionComponent,
    SessionPageComponent,
    ListGamesComponent,
    UserHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
