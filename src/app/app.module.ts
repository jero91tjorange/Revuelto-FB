
import { UtilsService } from './service/utils.service';
import { SingletonService } from './service/singleton.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//animaciones angular material
import { MatSliderModule } from '@angular/material/slider'; //elemnto de angular material

import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,//Importar modulo de animaciones angular materials
    MatSliderModule,//comprobar que material esta instalado
    AppRoutingModule,
    HttpClientModule//Se tiene que implementar para las peticciones http (post, put, get, patch y delete)

  ],
  providers: [SingletonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
