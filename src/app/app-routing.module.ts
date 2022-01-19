import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from 'src/components/leaderboard/leaderboard.component';

const routes: Routes = [
  {
    path : "home",
  component : LeaderboardComponent  
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
