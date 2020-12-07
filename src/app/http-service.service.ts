import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppModule } from './app.module';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  geturl = 'http://localhost:8000/api/index';
  postUrl = 'http://localhost:8000/api/create';
  deleteUrl = 'http://localhost:8000/api/delete';
  editUrl = 'http://localhost:8000/api/show';
  updateUrl = 'http://localhost:8000/api/update';

  // apiurl ='https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: HttpClient) {}

  getdata(): Observable<any> {
    return this._http.get(this.geturl);
  }
  postData(allDataPost: any): Observable<any> {
    return this._http.post(this.postUrl, allDataPost);
  }
  deleteData(id: any): Observable<any> {
    return this._http.post(this.deleteUrl, id);
  }
  editData(id: any): Observable<any> {
    return this._http.post(this.editUrl, id);
  }
  updateData(upData: any): Observable<any> {
    return this._http.post(this.updateUrl, upData);
  }
}
