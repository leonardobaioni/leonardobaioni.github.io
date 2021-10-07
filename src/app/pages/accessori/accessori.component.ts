import { CatItem } from 'src/app/_viewmodel/cat-item';
import { Component, Input, OnInit } from '@angular/core';
import { Record } from 'src/app/_mock/record';

@Component({
  selector: 'app-accessori',
  templateUrl: './accessori.component.html',
  styleUrls: ['./accessori.component.css']
})
export class AccessoriComponent implements OnInit {

  // filters: { marca: { value: string, selected?: boolean }[], potenza: { value: number, selected?: boolean }[] } = { marca: [], potenza: [] };
  items: CatItem[] = [];

  constructor() { }

  ngOnInit() {
    this.getItems();
    // this.buildFilters();
  }

  getItems(): void {
    this.items = Record.ACCESSORI;
  }

  // buildFilters(): void {
  //   this.items.forEach(item => {
  //     if (!this.filters.marca.find(filterItem => filterItem.value.toUpperCase() === item.marca.toUpperCase())) {
  //       this.filters.marca.push({ value: item.marca });
  //     }
  //     if (!this.filters.potenza.find(filterItem => filterItem.value === item.potenza)) {
  //       this.filters.potenza.push({ value: item.potenza });
  //     }
  //   });
  // }

}
