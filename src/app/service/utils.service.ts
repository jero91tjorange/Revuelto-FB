import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UtilsService {

private data$=new BehaviorSubject<number>(0)//Recordar que las variables de las observables van con $ al final del nombre de la variable

  constructor() { }

  public getData(): number{
    return this.data$.getValue();
  }

  public setData(number:number):void{
    this.data$.next(number);
  }

  public currentData(): Observable<number>{
    return this.data$.asObservable();
  }
  
}
