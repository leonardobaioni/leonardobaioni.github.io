import { CatItem } from 'src/app/_viewmodel/cat-item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  selectedItem: CatItem;

  constructor() { }

}
