import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css'],
})
export class DialogExampleComponent implements OnInit {
  userName = 'sdcsdcs';

  profileData: any;

  constructor(public loginservice: LoginService) {}

  ngOnInit() {
    let token = localStorage.getItem('token');
    console.log(token);

    this.loginservice.profileData(token).subscribe((res) => {
      this.profileData = res[0].payload.doc.data();

      this.userName = this.profileData.name;
      console.log(this.userName);
    });
    console.log(this.userName);
    // this.loginservice.setUserName(this.userName);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    localStorage.removeItem('name');
    window.location.href = '/login';

    // this.login =true;
  }
}
