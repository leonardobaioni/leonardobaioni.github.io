import { CatItem } from 'src/app/_viewmodel/cat-item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elenco-prodotti',
  templateUrl: './elenco-prodotti.component.html',
  styleUrls: ['./elenco-prodotti.component.css']
})
export class ElencoProdottiComponent implements OnInit {

  @Input() title: string;
  @Input() filters: { marca: { value: string, selected?: boolean }[], potenza: { value: number, selected?: boolean }[] } = { marca: [], potenza: [] };
  @Input() items: CatItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
