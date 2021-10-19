import { PublicationService } from './../../service/publication.service';
import { UtilsService } from './../../service/utils.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.sass']
})
export class Login2Component implements OnInit {

  constructor(private utils:UtilsService, private publicationservice:PublicationService) { }
  ngOnInit(): void {
    this.publicationservice.getAll().subscribe(res => console.log(res));
    //otras [pasadas]
    this.utils.currentData().subscribe(m => console.log(m));//Envio de datos nummeros revisar suscripcion    
  }

  create(){

    this.publicationservice.create({"date": "Fecha expirada de prueba",
    "descripction": "Modificacion de la variable de entorno al mismo json ",
    "idUser": 30000000,
    "imageUrl": "http://firebase/img.jpg",
    "userPhothoUrl": "http://firebase/user1.jpg"})
    .subscribe(res => console.log(res));
  }

  update(){
    this.publicationservice.update("p0001", {"date": "90/90/90",
    "descripction": "esto ya paso brother ",
    "idUser": 100,
    "imageUrl": "http://firebase/img.jpg",
    "userPhothoUrl": "http://firebase/user1.jpg"})
    .subscribe(res => console.log(res));
  }

  delete(){
    this.publicationservice.delete("p0002")
    .subscribe(res => console.log(res));
  }

  patch(){
    this.publicationservice.patch("p0001", {"date": ":(",})
    .subscribe(res => console.log(res));
  }
  }


/*
"p0001": {
  "date": "17/02/2021",
  "descripction": "lorem ipsunmruicnr ",
  "idUser": 1,
  "imageUrl": "http://firebase/img.jpg",
  "userPhothoUrl": "http://firebase/user1.jpg"*/