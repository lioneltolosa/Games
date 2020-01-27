import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { GamesComponent } from './views/games/games.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'games', component: GamesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
