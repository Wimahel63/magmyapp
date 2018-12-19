import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { VoterComponent } from './voter/voter.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({//decorateur, se met avant une class
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    VotetakerComponent,
    VoterComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }//cette classe est de type appmodule
//appcomponent: composant general qui contient tous les autres