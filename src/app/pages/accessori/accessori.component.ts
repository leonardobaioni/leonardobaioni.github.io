import { CatItem } from 'src/app/_viewmodel/cat-item';
import { Component, Input, OnInit } from '@angular/core';

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
    this.items = [
      CatItem.init({
        marca: 'Parabrezza Robo-S',
        modello: '(PMMA Classic)',
        categoria: 'Accessori',
        prezzo: 97.6,
        imagesPath: ['assets/img/parabrezza-robo-s/pmma-classic.jpg']
      }),
      CatItem.init({
        marca: 'Portapacchi Robo-S',
        modello: '(PMMA Fumè)',
        categoria: 'Accessori',
        prezzo: 109.8,
        imagesPath: ['assets/img/portapacchi-robo-s/pmma-fume.jpg']
      }),
      CatItem.init({
        marca: 'Portapacchi Robo-S',
        modello: '(PMMA Trasparente)',
        categoria: 'Accessori',
        prezzo: 97.6,
        imagesPath: ['assets/img/portapacchi-robo-s/pmma-trasparente.jpg']
      }),
      CatItem.init({
        marca: 'Portapacchi Robo-S',
        modello: '(Acciaio Nero)',
        categoria: 'Accessori',
        prezzo: 85.4,
        imagesPath: ['assets/img/portapacchi-robo-s/acciaio-nero.jpg']
      }),
      CatItem.init({
        marca: 'Portapacchi Robo-S',
        modello: '(Piastra per Delivery)',
        categoria: 'Accessori',
        prezzo: 146.4,
        imagesPath: ['assets/img/portapacchi-robo-s/piastra-per-delivery.jpg',
          'assets/img/portapacchi-robo-s/piastra-per-delivery-02.jpg', 'assets/img/portapacchi-robo-s/piastra-per-delivery-03.jpg',
          'assets/img/portapacchi-robo-s/piastra-per-delivery-04.jpg', 'assets/img/portapacchi-robo-s/piastra-per-delivery-05.jpg',
          'assets/img/portapacchi-robo-s/piastra-per-delivery-06.jpg', 'assets/img/portapacchi-robo-s/piastra-per-delivery-07.jpg',
          'assets/img/portapacchi-robo-s/piastra-per-delivery-08.jpg', 'assets/img/portapacchi-robo-s/piastra-per-delivery-09.jpg'
        ]
      })
    ];
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
