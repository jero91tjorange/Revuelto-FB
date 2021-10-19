import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logintest',
  templateUrl: './logintest.component.html',
  styleUrls: ['./logintest.component.sass']
})
export class LogintestComponent implements OnInit {
  name:string='';
  formReactive:FormGroup;
  constructor(private formbuilder:FormBuilder) { 
    this.formReactive=this.formbuilder.group({
      name:['', [Validators.required, Validators.minLength(5)] ], 
      lastname:''
    });
  }

  ngOnInit(): void {
    
  }

  getValue(value: string){
    return this.formReactive.get(value);
  }

}
