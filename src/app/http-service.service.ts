import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getdata() {
    return this._http.get<AppModule[]>(this.geturl);
  }
  postData(allDataPost: any) {
    return this._http.post<AppModule[]>(this.postUrl, allDataPost);
  }
  deleteData(id: any) {
    return this._http.post<AppModule[]>(this.deleteUrl, id);
  }
  editData(id: any) {
    return this._http.post<AppModule[]>(this.editUrl, id);
  }
  updateData(upData: any) {
    return this._http.post<AppModule[]>(this.updateUrl, upData);
  }
}
