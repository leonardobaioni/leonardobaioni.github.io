import { SharedService } from './../../_service/shared.service';
import { Component, OnInit } from '@angular/core';
import { CatItem } from 'src/app/_viewmodel/cat-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scheda-prodotto',
  templateUrl: './scheda-prodotto.component.html',
  styleUrls: ['./scheda-prodotto.component.css']
})
export class SchedaProdottoComponent implements OnInit {

  item: CatItem;

  constructor(private route: ActivatedRoute, private sharedService: SharedService) {
    this.item = sharedService.selectedItem;
  }

  ngOnInit() {
    const idProdotto: string = this.route.snapshot.paramMap.get('id');
  }

}
