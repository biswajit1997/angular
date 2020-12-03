import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  profile=false;
  oneItem: any;
  // profile = false;
  login = true;
  constructor(public loginservice: LoginService) { }

  ngOnInit(): void {
  }

  LogIn(login: any) {
    this.loginservice.userLogin(login).subscribe((res) => {
      // this.login = false;
      this.oneItem = res[0].payload.doc.data();
      this.login = false;
      
      this.profile = true;
     
      console.log(this.oneItem);
      localStorage.setItem('pro','true');
    });
    
    console.log(this.oneItem);
    
  }
  logout(){
    this.profile = false;
    window.location.reload();
    // this.login =true;
  }
}
