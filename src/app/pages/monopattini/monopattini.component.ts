import { CatItem } from 'src/app/_viewmodel/cat-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monopattini',
  templateUrl: './monopattini.component.html',
  styleUrls: ['./monopattini.component.css']
})
export class MonopattiniComponent implements OnInit {

  filters: { marca: { value: string, selected?: boolean }[], potenza: { value: number, selected?: boolean }[] } = { marca: [], potenza: [] };
  items: CatItem[] = [];

  constructor() { }

  ngOnInit() {
    this.getItems();
    this.buildFilters();
  }

  getItems(): void {
    this.items = [
      CatItem.init({
        marca: 'Sunra',
        modello: 'X7',
        categoria: 'Monopattini',
        potenza: 350,
        prezzo: 399,
        imagesPath: ['assets/img/x7/01.png', 'assets/img/x7/02.png', 'assets/img/x7/03.png', 'assets/img/x7/04.png',
          'assets/img/x7/05.png', 'assets/img/x7/06.png', 'assets/img/x7/07.png', 'assets/img/x7/08.png']
      }),
      CatItem.init({
        marca: 'Sunra',
        modello: 'X8',
        categoria: 'Monopattini',
        potenza: 350,
        prezzo: 499,
        imagesPath: ['assets/img/x8/01.png', 'assets/img/x8/02.png', 'assets/img/x8/03.png']
      })
    ];
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
