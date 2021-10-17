import { UtilsService } from './../service/utils.service';
import { NormalServiceService } from './../service/normal-service.service';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NgbButtonLabel, NgbButtonsModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
//Materiasl
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Login2Component } from './login2/login2.component';

const routes:Routes=[
  {path:'', component:LoginComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    Login2Component
  ],
  imports: [
    MatProgressSpinnerModule,
    NgbToastModule,//Ngboostrap
    NgbButtonsModule,//Ngboostrap
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],

  providers:[
    NormalServiceService,//Los servicios se declaran en el provider, y se encuentran disponibles en todo el modulo, es decir cualquier componente dentro del modulo puede ejecutarlo solo hay que inyectarlos
    UtilsService
  ]
})
export class LoginModule { }
