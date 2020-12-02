import { Injectable } from '@angular/core'; 
import {AngularFirestore} from '@angular/fire/firestore';
import { clearScreenDown } from 'readline';

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
 