import { ObjectUtil } from './../../_util/object-util';
import { Router } from '@angular/router';
import { SharedService } from './../../_service/shared.service';
import { Component, Input, OnInit } from '@angular/core';
import { CatItem } from 'src/app/_viewmodel/cat-item';

@Component({
  selector: 'app-cat-grid',
  templateUrl: './cat-grid.component.html',
  styleUrls: ['./cat-grid.component.css']
})
export class CatGridComponent implements OnInit {

  filters: { marca: { value: string }[], potenza: { value: number }[] } = { marca: [], potenza: [] };
  filteredItems: CatItem[] = [];

  @Input() items: CatItem[] = [];

  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.filteredItems = this.items;
  }

  openDetail(item: CatItem): void {
    this.sharedService.selectedItem = item;
    this.router.navigate(['/prodotto/scheda']);
  }

  applyFilter(filter: { property: string, value: any }): void {
    this.filters[filter.property.toLowerCase()].push({ value: filter.value });
    this.buildFilteredItems();
  }

  removeFilter(filter: { property: string, value: any }): void {
    this.filters[filter.property.toLowerCase()] = this.filters[filter.property.toLowerCase()].filter(el => el.value !== filter.value);
    this.buildFilteredItems();
  }

  private buildFilteredItems(): void {
    this.filteredItems = this.items.filter(item => {
      return (this.filters.marca.length === 0 || this.filters.marca.map(marca => marca.value).includes(item.marca))
        && (this.filters.potenza.length === 0 || this.filters.potenza.map(potenza => potenza.value).includes(item.potenza));
    });
  }

}
