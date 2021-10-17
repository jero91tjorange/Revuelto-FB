import { UtilsService } from './../../service/utils.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.sass']
})
export class Login2Component implements OnInit {

  constructor(private utils:UtilsService) { }
  ngOnInit(): void {
    this.utils.currentData().subscribe(m => console.log(m))
    
  }

}
