import { UtilsService } from './service/utils.service';
import { SingletonService } from './service/singleton.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//animaciones angular material
import { MatSliderModule } from '@angular/material/slider'; //elemnto de angular material

import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,//Importar modulo de animaciones angular materials
    MatSliderModule,//comprobar que material esta instalado
    AppRoutingModule,

  ],
  providers: [SingletonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
