import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {





 

  constructor(public loginservice:LoginService) { }

  ngOnInit(): void {
  }


  Login(formObj:any){
    let data =formObj;
    
    console.log(data)
    this.loginservice.create_NewRegister(data).then(res => {
      console.log(data)
    }).catch(error =>{
      console.log(error)
    })
  }
}
