import { UtilsService } from './../../service/utils.service';
import { SingletonService } from './../../service/singleton.service';
import { NormalServiceService } from './../../service/normal-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  index=0;
  model = {
    left: true,
    middle: false,
    right: false
  };

    constructor(private nomrmalService:NormalServiceService, private singleton:SingletonService, private util:UtilsService) { }
    ngOnInit(): void {

    }

    public getData(){
      console.log(this.nomrmalService.getData());
    }
    
    public setData(){
      this.nomrmalService.setData([5,4,8,6]);
      console.log(this.nomrmalService.getData());
    }

    //Servicio global singleton
    public getMessage(): void{
      console.log(this.singleton.getMessage());
    }

    public setMessage(): void{
      this.singleton.setMessage("Se cambio el valor inyectando el servicio singleton");
    }

    public getObservable(){
      console.log(this.util.getData());
    }
    public setOservable(){
      this.util.setData(10);
    }

    //Comunicacion entre observables de login1 a login2
    onSend():void{
      this.util.setData(this.index++);

    }


}
