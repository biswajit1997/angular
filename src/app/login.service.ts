import { Injectable } from '@angular/core'; 
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  // create_NewRegister(data:any){
  //   console.log(data);
  //   return this.fireService.collection('Register').add(data);
  // }
}
