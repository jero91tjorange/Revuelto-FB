import { UtilsService } from './../service/utils.service';
import { NormalServiceService } from './../service/normal-service.service';
import { PublicationService } from './../service/publication.service';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbButtonLabel, NgbButtonsModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
//Materiasl
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Login2Component } from './login2/login2.component';
import { LogintestComponent } from './logintest/logintest.component';

const routes:Routes=[
  {path:'', component:LoginComponent}

  //Al declarar login dos deja de funcionar el archivo de routing????
]

@NgModule({
  declarations: [
    LoginComponent,
    Login2Component,
    LogintestComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    NgbToastModule,//Ngboostrap
    NgbButtonsModule,//Ngboostrap
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, //Formularios basados en plantillas
    ReactiveFormsModule//Formularios reactivos
    //No se deben mesclar en un solo modulo estos dos tipod de formularios
  ],

  providers:[
    NormalServiceService,//Los servicios se declaran en el provider, y se encuentran disponibles en todo el modulo, es decir cualquier componente dentro del modulo puede ejecutarlo solo hay que inyectarlos
    UtilsService,
    PublicationService
  ]
})
export class LoginModule { }
