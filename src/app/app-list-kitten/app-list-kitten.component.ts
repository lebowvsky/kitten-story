import { Component, OnInit } from '@angular/core';
import { kitten, adoptedKitten } from './../kitty';

@Component({
  selector: 'app-app-list-kitten',
  templateUrl: './app-list-kitten.component.html',
  styleUrls: ['./app-list-kitten.component.css'],
})
export class AppListKittenComponent implements OnInit {
  constructor() {}
  arrayKitten = [...kitten];
  adoptedKitten = adoptedKitten;
  ngOnInit(): void {}

  adopted(name) {
    this.adoptedKitten.push(kitten.find((elt, index) => elt.name === name));
    this.arrayKitten = this.arrayKitten.filter((elt) => elt.name !== name);
    kitten.pop();
  }
}
