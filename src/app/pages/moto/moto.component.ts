import { CatItem } from 'src/app/_viewmodel/cat-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {

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
        modello: 'Miku Max',
        categoria: 'Moto',
        descrizione: 'I fari Full LED illuminano il percorso garantendo un ampio raggio di visibilità ed una proiezione che raggiunge i 12 metri. <br> Il quadro strumenti Full Digital ha un design minimale e compatto, inclusivo di tutti gli indicatori necessari per il conducente: velocità massima, livello di carica della batteria, connessione Bluetooth e tanto altro. <br> Il motore 800W e le sospensioni Bosch®️ garantiscono prestazioni ottimizzate a potenza costante e comfort durante il tragitto. <br> Il vano sottosella può contenere tutto ciò di cui necessiti, oltre ad una comoda porta USB per ricaricare il tuo smartphone durante la guida, in un vano protetto da urti e sbalzi.',
        caratteristiche: [
          { property: 'Motore', value: '800W BOSCH Technology Field Oriented Control' },
          { property: 'Autonomia', value: '60 km' },
          { property: 'Velocità', value: '45 km/h' },
          { property: 'Carico Massimo', value: '1 persona (70kg/persona)' },
          { property: 'Ricarica', value: '4 ore (0-100%)' },
          { property: 'Batteria', value: '60V 20AH a litio, estraibile' }
        ],
        potenza: 800,
        prezzo: 2499,
        imagesPath: ['assets/img/miku-max/01.png', 'assets/img/miku-max/02.png', 'assets/img/miku-max/03.png',
          'assets/img/miku-max/04.png', 'assets/img/miku-max/05.png', 'assets/img/miku-max/06.png',
          'assets/img/miku-max/07.png', 'assets/img/miku-max/08.png']
      }),
      CatItem.init({
        marca: 'Sunra',
        modello: 'Miku Super',
        categoria: 'Moto',
        descrizione: 'Non dovrai più scegliere tra Potenza e Comfort: con il nuovo MIKU Super puoi averli entrambi. Il design unico e dalle curve sportive racchiude la potenza del motore Bosch®️ da 3000W. La sella ergonomica studiata da Sunra EV garantisce comfort per tutta la durata del tuo viaggio. <br> Il quadro strumenti permette una visualizzazione immediata di tutte le informazioni necessarie al conducente, senza ulteriori distrazioni. <br> La forma del faro anteriore con illuminazione Full LED rende immediatamente riconoscibile lo scooter e si fa notare sin dal primo approccio visivo. <br> Lo scooter è dotato di doppia batteria estraibile e portatile, facilmente rimovibile. Il sistema di gestione delle batterie assicura tolleranza degli errori e migliori performance. <br> Modalità di guida adattabili al tuo stile e al tipo di percorso. Il cruise control ti permette di regolare la velocità di guida facilitando la percorrenza sui lunghi tratti.',
        caratteristiche: [
          { property: 'Motore', value: '3000W Sunra' },
          { property: 'Autonomia', value: '135 km' },
          { property: 'Velocità', value: '80 km/h' },
          { property: 'Carico Massimo', value: '2 persone (70kg/persona)' },
          { property: 'Ricarica', value: '4 ore (0-100%)' },
          { property: 'Batteria', value: '2 * 72V 20AH a litio, estraibili' }
        ],
        potenza: 200,
        prezzo: null,
        imagesPath: ['assets/img/miku-super/01.png', 'assets/img/miku-super/02.png', 'assets/img/miku-super/03.png',
          'assets/img/miku-super/04.png', 'assets/img/miku-super/05.png', 'assets/img/miku-super/06.png',
          'assets/img/miku-super/07.png', 'assets/img/miku-super/08.png', 'assets/img/miku-super/09.png',
          'assets/img/miku-super/10.png', 'assets/img/miku-super/11.png', 'assets/img/miku-super/12.png']
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
