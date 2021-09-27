import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cat-filters',
  templateUrl: './cat-filters.component.html',
  styleUrls: ['./cat-filters.component.css']
})
export class CatFiltersComponent implements OnInit {

  @Input() filters: { marca: { value: string, selected?: boolean }[], potenza: { value: number, selected?: boolean }[] } = { marca: [], potenza: [] };
  @Output() applyFilter: EventEmitter<{ property: string, value: any }> = new EventEmitter();
  @Output() removeFilter: EventEmitter<{ property: string, value: any }> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  applyFilterFn(property: string, filter: { value: string, selected?: boolean }): void {
    if (filter.selected) {
      filter.selected = false;
      this.removeFilter.emit({ property, value: filter.value });
    } else {
      filter.selected = true;
      this.applyFilter.emit({ property, value: filter.value });
    }
  }

}
