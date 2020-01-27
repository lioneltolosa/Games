import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// MODULES
import { ComponentsModule } from './components/components.module';

import { HomeComponent } from './views/home/home.component';
import { GamesComponent } from './views/games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
