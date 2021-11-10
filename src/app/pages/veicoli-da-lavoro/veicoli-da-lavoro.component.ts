import { CatItem } from 'src/app/_viewmodel/cat-item';
import { Record } from 'src/app/_mock/record';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veicoli-da-lavoro',
  templateUrl: './veicoli-da-lavoro.component.html',
  styleUrls: ['./veicoli-da-lavoro.component.css']
})
export class VeicoliDaLavoroComponent implements OnInit {

  filters: { marca: { value: string, selected?: boolean }[], potenza: { value: number, selected?: boolean }[] } = { marca: [], potenza: [] };
  items: CatItem[] = [];

  constructor() { }

  ngOnInit() {
    this.getItems();
    this.buildFilters();
  }

  getItems(): void {
    this.items = Record.VEICOLI_DA_LAVORO;
  }

  buildFilters(): void {
    this.items.forEach(item => {
      if (!this.filters.marca.find(filterItem => filterItem.value.toUpperCase() === item.marca.toUpperCase())) {
        this.filters.marca.push({ value: item.marca });
      }
      if (!this.filters.potenza.find(filterItem => filterItem.value === item.potenza)) {
        this.filters.potenza.push({ value: item.potenza });
      }
    });
  }

}
