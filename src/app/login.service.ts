import { Injectable } from '@angular/core'; 
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public afs:AngularFirestore ) { }

  create_NewRegister(data:any){
    
    return this.afs.collection('Register').add(data);
  }
  allData(){
     return this.afs.collection('Register').snapshotChanges();
  }
}
 