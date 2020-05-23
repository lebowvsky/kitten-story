import { adoptedKitten } from './../kitty';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-user-kitten',
  templateUrl: './app-user-kitten.component.html',
  styleUrls: ['./app-user-kitten.component.css'],
})
export class AppUserKittenComponent implements OnInit {
  constructor() {}
  adopted = adoptedKitten;
  ngOnInit(): void {}
}
