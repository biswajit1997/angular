import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //from group

  userProfileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  onSubmit() {
    // console.log(this.userProfileForm.controls['firstName'].value);
    console.log(this.userProfileForm.value);
    // console.log(this.userProfileForm.get('age')?.value);
    if (this.userProfileForm.valid) {
      console.log('true');
    } else {
      console.log('false');
    }
  }
}
