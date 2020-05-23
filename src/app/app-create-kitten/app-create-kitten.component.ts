import { Kitty, kitten } from './../kitty';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-create-kitten',
  templateUrl: './app-create-kitten.component.html',
  styleUrls: ['./app-create-kitten.component.css'],
})
export class AppCreateKittenComponent implements OnInit {
  name = '';
  breed = '';
  birthdate = '';
  imgsrc = '';

  constructor() {}

  onSubmit() {
    const kitty = new Kitty(this.name, this.breed, this.birthdate, this.imgsrc);
    kitten.push(kitty);
    console.log(kitten);
  }

  ngOnInit(): void {}
}
