import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileData: any;

  constructor(public loginservice: LoginService) {}

  ngOnInit() {
    // let token = localStorage.getItem('token')
    // console.log(token)
    // this.loginservice.profileData(token).subscribe((res) => {
    //   this.profileData = res[0].payload.doc.data();
    //   console.log(this.profileData)
    // });
  }

  // logout() {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('profile');
  //   window.location.href = '/login';

  //   // this.login =true;
  // }
}
