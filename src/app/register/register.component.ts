import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dataItem: Array<any> = [];

  

  displayedColumns: string[] = ['Name', 'Email', 'Mobile', 'Action'];
  dataSource = new MatTableDataSource(this.dataItem);

  constructor(public loginservice: LoginService) { }

  ngOnInit() {
    this.loginservice.allData().subscribe((data) => {
      this.dataItem = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data().name,
          email: e.payload.doc.data().email,
          mobile: e.payload.doc.data().mobile,
        };
      });
      this.dataSource = new MatTableDataSource(this.dataItem);
    });
  }
  Register(formObj: any) {
    let data = formObj;
    this.loginservice
      .create_NewRegister(data)
      .then((res) => {
       window.location.reload();
        console.log(this.dataItem);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  delete(id: number) {
    console.log(id);
    this.loginservice
      .deleteData(id)
      .then((res) => {
        console.log('deleted');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
