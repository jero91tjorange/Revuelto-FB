import { Injectable } from '@angular/core';

@Injectable(
  /*{
  providedIn: 'root'
}
*/)
export class NormalServiceService {

  private data=[1,2,3,4,5];
  constructor() { }

  public getData(): number[]{
    return this.data;
  }

  public setData(data: number[]){
    this.data=data;
  }
}
