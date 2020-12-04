import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  constructor(private httpService:HttpServiceService) {}
  ngOnInit() {
    return this.httpService.getTag()
    .subscribe(data=>{
      console.log(data)
    })
  }
 
  
 


}
