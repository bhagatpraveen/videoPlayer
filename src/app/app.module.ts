import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListvideoComponent } from './listvideo/listvideo.component'
import { RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { AppRoutingModule } from './/app-routing.module';
import { UpperCasePipe } from './common/pipes/uppercase.pipe'

import { HttpInterceptorClass } from './common/interceptor/httpInnterceptor.service'


@NgModule({
  declarations: [
    AppComponent,
    ListvideoComponent,
    PlayerComponent,
    UpperCasePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorClass, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
