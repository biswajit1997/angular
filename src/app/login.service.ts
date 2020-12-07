import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  usersDataName: string = '';
  // loggedIn = false;
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
    return this.afs
      .collection('Register', (ref) =>
        ref
          .where('email', '==', login.email)
          .where('password', '==', login.password)
          .limit(1)
      )
      .snapshotChanges();
  }
  // updateLogin(status: boolean) {
  //   this.loggedIn = status;
  // }

  profileData(token: any) {
    return this.afs
      .collection('Register', (ref) =>
        ref
          .where('id', '==', token)

          .limit(1)
      )
      .snapshotChanges();
  }
  loginUser() {
    return !!localStorage.getItem('token');
  }

  //get username
  setUserName(username: string) {
    this.usersDataName = username;
    return console.log(username);
  }
  // getUserName() {
  //   return this.usersDataName;
  // }
}
