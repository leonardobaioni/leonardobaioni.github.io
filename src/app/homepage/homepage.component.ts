import { Record } from './../_mock/record';
import { CatItem } from 'src/app/_viewmodel/cat-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  items: CatItem[] = [];

  constructor() { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.items = Record.getAll();
  }

}
