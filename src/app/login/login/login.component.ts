import { UtilsService } from './../../service/utils.service';
import { SingletonService } from './../../service/singleton.service';
import { NormalServiceService } from './../../service/normal-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  formReactive:FormGroup; //Se inyecta rl formBuilder en el constructor para tener acces a grupo controlables como se vera mas adelante
  
  name=new FormControl('');//Nueva instancia del reactiveforms, recordar que tambien se debe de importar en la parte de superior del archivo donde se usara
  
  
  index=0;

  model = {
    left: true,
    middle: false,
    right: false
  };

    constructor(private nomrmalService:NormalServiceService, private singleton:SingletonService, private util:UtilsService, private formbuilder: FormBuilder) {
      this.formReactive=this.formbuilder.group({
        name:'',
        lastname:['', Validators.required],//en ['', validacion] sin los corchetes en la validacion en caso de que sea un solo parametro a validar
        date:''
      });
    }
      

    ngOnInit(): void {
      this.formReactive.valueChanges.subscribe(res=>console.log(res)
      );


      this.name.valueChanges.subscribe(res =>{
        console.log('Cambios', res);
        
      });

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

    onSubmit(values:any){//Funcion para cuando se implente en formulario basado en plantillas
      console.log(values);      
    }

    onShow(){
      console.log(this.name.value);
      
    }

    onShowAll(){
      console.log('El valor del formulario reactivo es: <br>', this.formReactive.value);
      
      
    }

    



    /*
  
  */




  /*
  
  
  */


}
