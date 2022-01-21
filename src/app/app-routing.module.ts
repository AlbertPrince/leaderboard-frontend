import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from 'src/components/leaderboard/leaderboard.component';

const routes: Routes = [
  {
    path : "home",
  component : LeaderboardComponent  
  },
  {
    path : "",
    redirectTo : "home",
    pathMatch : "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
