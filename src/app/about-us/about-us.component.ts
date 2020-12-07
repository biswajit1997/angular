import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  item = '';
  // @Input() item: string;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  email = new FormControl('');

  updateEmail() {
    this.email.setValue('test@gmail.com');
  }
}
