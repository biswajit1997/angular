import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  oneItem: any;
  // profile = false;
  userName = 'sdcsdcs';
  constructor(public loginservice: LoginService) {}

  ngOnInit(): void {}

  LogIn(login: any) {
    this.loginservice.userLogin(login).subscribe((res) => {
      this.oneItem = res[0].payload.doc.data();
      console.log(this.oneItem.name);
      this.loginservice.setUserName(this.oneItem.name);
      localStorage.setItem('token', this.oneItem.id);
      localStorage.setItem('profile', 'true');
      localStorage.setItem('name', this.oneItem.name);
      window.location.href = '/profile';
    });

    console.log(this.oneItem);
  }
}
