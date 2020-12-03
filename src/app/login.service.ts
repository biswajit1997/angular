import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(public afs: AngularFirestore) {}

  create_NewRegister(data: any) {
    return this.afs.collection('Register').add(data);
  }
  allData() {
    return this.afs.collection('Register').snapshotChanges();
  }
  deleteData(id: any) {
    return this.afs.collection('Register').doc(id).delete();
  }
  editData(id: any) {
    return this.afs.collection('Register').doc(id).get();
  }
  userLogin(login: any) {
    return this.afs.collection('Register', (ref) => ref.where('email', '==', login.email).where('password', '==', login.password).limit(1))
    .snapshotChanges();
  }
}
