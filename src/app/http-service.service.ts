import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from './app.module';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiurl = 'http://localhost:8000/api/addtag';

  constructor(private _http:HttpClient) { }



  getTag(){
    return this._http.get<AppModule[]>(this.apiurl);
  }
}
