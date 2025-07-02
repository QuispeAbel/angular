import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { RoutingModule } from './routing.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
