import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListvideoComponent } from './listvideo/listvideo.component'
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { AppComponent } from './app.component'


const routes = [
  // { path: 'createNewuser', component: CreateNewUserComponent },
  { path: 'video', component: PlayerComponent },
  {
    path: '**',
    component: PlayerComponent,

  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
