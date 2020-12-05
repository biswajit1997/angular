import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataItem: any;

  constructor(private httpService: HttpServiceService) {}
  ngOnInit() {
    this.httpService.getTag().subscribe((data) => {
      this.dataItem = data;
      console.log(this.dataItem);
      // data.map((item) => {
      //   this.dataItem = item;
      //   console.log(this.dataItem);
      // });
    });
  }
}
