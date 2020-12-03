import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  
  acountIcon = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    
  ngOnInit(): void {
   let  data  = localStorage.getItem('pro');
   if (data === 'true') {
     console.log(data)
    this.acountIcon=true ;
    }
  }
 

      
  constructor(private breakpointObserver: BreakpointObserver) {}

  
  
}
