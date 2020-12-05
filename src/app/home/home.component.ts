import { ClassField } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sub = true;
  up = false;
  id: string = '';
  name: string = '';
  email: string = '';
  mobile: string = '';

  showdata: any;
  allDataPost: any;
  allDataUpdate: any;

  dataItem: any;
  constructor(private httpService: HttpServiceService) {}
  ngOnInit() {
    this.httpService.getdata().subscribe((e) => {
      let all = e;
      this.dataItem = all;

      console.log(this.dataItem);
    });
  }
  submit(name: string, email: string, mobile: string) {
    this.allDataPost = {
      name: name,
      email: email,
      mobile: mobile,
    };
    console.log(this.allDataPost);
    this.httpService.postData(this.allDataPost).subscribe((e) => {
      console.log(e);
      this.httpService.getdata().subscribe((e) => {
        let all = e;
        this.dataItem = all;

        console.log(this.dataItem);
      });
    });
  }
  delete(id: number) {
    let param = {
      id: id,
    };
    this.httpService.deleteData(param).subscribe((e) => {
      console.log(e);
      this.httpService.getdata().subscribe((e) => {
        let all = e;
        this.dataItem = all;

        console.log(this.dataItem);
      });
    });
  }
  edit(id: number) {
    let param = {
      id: id,
    };
    this.sub = false;
    this.up = true;
    this.httpService.editData(param).subscribe((e) => {
      this.showdata = e;
      this.id = this.showdata.id;
      this.name = this.showdata.name;
      this.email = this.showdata.email;
      this.mobile = this.showdata.mobile;
    });
  }
  update(name: string, email: string, mobile: string, id: string) {
    console.log(id);
    this.allDataUpdate = {
      id: id,
      name: name,
      email: email,
      mobile: mobile,
    };

    this.httpService.updateData(this.allDataUpdate).subscribe((e) => {
      console.log(e);
      this.httpService.getdata().subscribe((e) => {
        let all = e;
        this.dataItem = all;

        console.log(this.dataItem);
      });
    });
  }
}
