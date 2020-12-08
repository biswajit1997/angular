import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  userName: any;
  profileData: any;
  loginStatus = false;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private loginServise: LoginService
  ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    let data = localStorage.getItem('token');
    if (data) {
      console.log(data);
      this.loginStatus = true;
      // this.userName = localStorage.getItem('name');
      // let token = (this.userName = localStorage.getItem('token'));
      this.loginServise.profileData(data).subscribe((result) => {
        this.profileData = result[0].payload.doc.data();
      });
    }
  }

  openDialog() {
    this.dialog.open(DialogExampleComponent);
  }
}
