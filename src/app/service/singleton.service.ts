import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'//Para que un servicio sea singleton y pueda mandaarse a llamar desde cualquier parte se le anexa esto, se inicializa en el provider del mulo principal (app.module en providers o realizando providers on in root como al inicio de esta lia cualquiera de las dos maneras en valida) para que tenga acceso toda la aplicacion 
})
export class SingletonService {
    private message='Mensaje vacio';
    constructor() { }
    getMessage(): string{
      return this.message;
    }

    setMessage(message:string){
      this.message=message;
  }
}
