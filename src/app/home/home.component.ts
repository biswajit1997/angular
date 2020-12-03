import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataItem: Array<any> = [];

  all: any = [
    {
      name: 'Biswajit',
      email: 'biswajit@gmail.com',
      mobile: '9937816787',
    },
    {
      name: 'Amresh',
      email: 'amaresh@gobjectmail,com',
      mobile: '7008018338',
    },
  ];

  displayedColumns: string[] = ['Name', 'Email', 'Mobile', 'Action'];
  dataSource = new MatTableDataSource(this.dataItem);

  constructor(public loginservice: LoginService) {}
  ngOnInit() {

    this.loginservice.allData().subscribe((data) => {
      this.dataItem = data.map((e:any) => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data().name,
          email: e.payload.doc.data().email,
          mobile: e.payload.doc.data().mobile,
        };
      });

      console.log("wsd", this.dataItem)
      this.dataSource = new MatTableDataSource(this.dataItem);
    });

    
  }
  Login(formObj: any) {
    let data = formObj;
    this.loginservice
      .create_NewRegister(data)
      .then((res) => {
        console.log(this.dataItem);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // getAllData() {
  //   this.loginservice.allData().subscribe((el) => {
  //     let item;
  //     for (let property in el) {
  //       item = el[property].payload.doc.data();
  //       this.dataItem.push(item);
  //     }
  //     console.log(this.dataItem);
  //   });
  // }

  LogIn(login:any){
  
  }
}
