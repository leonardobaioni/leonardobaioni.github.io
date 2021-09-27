import { CatItem } from 'src/app/_viewmodel/cat-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scooter',
  templateUrl: './scooter.component.html',
  styleUrls: ['./scooter.component.css']
})
export class ScooterComponent implements OnInit {

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
        modello: 'Robo-S',
        categoria: 'Scooter',
        descrizione: 'Robo-S è uno scooter elettrico 125  (categoria L3) innovativo, potente e connesso adatto all’uso quotidiano cittadino.  È costruito per offrire prestazioni elevate in termini di autonomia e di velocità. <br> Lo scooter a primo impatto si presenta con un grande look sportivo grazie al suo gruppo ottico full-led, per poi mostrare il suo cuore digitale con il quadro comandi full-digital, il Touch ID e l’app per il controllo e la diagnostica da remoto. <br> A differenza degli altri scooter elettrici il Robo-s raggiunge una velocità di 90km/h, e dispone di un vano sottosella spazioso che può contenere uno casco jet di grosse dimensioni.',
        caratteristiche: [
          { property: 'Lunghezza', value: '1.750 mm' },
          { property: 'Larghezza', value: '770 mm' },
          { property: 'Altezza sella da terra MIN', value: '770 mm' },
          { property: 'Interasse', value: '1.305 mm' },
          { property: 'Peso a secco', value: '100 Kg' },
          { property: 'Tipo motore', value: 'Elettrico' },
          { property: 'Potenza', value: '3 kW (4,1 CV)' },
          { property: 'Emissioni', value: 'Zero Emissioni' },
          { property: 'Tipologia cambio', value: 'Diretta' },
          { property: 'Trasmissione finale', value: 'Ingranaggi' },
          { property: 'Velocità massima', value: '90 km/h' },
          { property: 'Telaio', value: 'Monotrave - Acciaio' },
          { property: 'Sospensione anteriore', value: 'Forcella telescopica' },
          { property: 'Sospensione posteriore', value: 'Forcellone' },
          { property: 'Tipo freno anteriore', value: 'Disco' },
          { property: 'Misura freno anteriore', value: '220 mm' },
          { property: 'Tipo freno posteriore', value: 'Disco' },
          { property: 'Misura freno posteriore', value: '180 mm' },
          { property: 'Misura cerchio anteriore', value: '12 pollici' },
          { property: 'Pneumatico anteriore', value: '110/70 R12 53J-R12"' },
          { property: 'Misura cerchio posteriore', value: '12 pollici' },
          { property: 'Pneumatico posteriore', value: '110/70 R12 53J-R12"' }
        ],
        potenza: 3000,
        prezzo: 3999,
        imagesPath: ['assets/img/robo-s/01.png', 'assets/img/robo-s/02.png', 'assets/img/robo-s/03.png', 'assets/img/robo-s/04.png',
          'assets/img/robo-s/05.png', 'assets/img/robo-s/06.png', 'assets/img/robo-s/07.png', 'assets/img/robo-s/08.png']
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
