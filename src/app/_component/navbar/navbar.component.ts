import { Component, OnInit } from '@angular/core';
import { Path } from 'src/app/_constant/path';
import { Page } from '../../_model/page';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pages: Page[] = [];

  constructor() { }

  ngOnInit() {
    this.pages = this.getNavbarPages();
  }

  private getNavbarPages(): Page[] {
    // TODO: GET NavbarPages
    const arr: Page[] = [
      { title: 'Homepage', path: Path.HOMEPAGE, showInNavbar: true, navbarPosition: 1 },
      { title: 'Auto', path: Path.AUTO, showInNavbar: true, navbarPosition: 2 },
      { title: 'Moto', path: Path.MOTO, showInNavbar: true, navbarPosition: 3 },
      { title: 'Scooter', path: Path.SCOOTER, showInNavbar: true, navbarPosition: 4 },
      { title: 'E-Bike', path: Path.EBIKE, showInNavbar: false, navbarPosition: 5 },
      { title: 'Monopattini', path: Path.MONOPATTINI, showInNavbar: true, navbarPosition: 6 },
      { title: 'Veicoli da Lavoro', path: Path.VEICOLI_DA_LAVORO, showInNavbar: true, navbarPosition: 7 },
      { title: 'Accessori', path: Path.ACCESSORI, showInNavbar: true, navbarPosition: 8 },
      { title: 'Chi Siamo', path: Path.CHI_SIAMO, showInNavbar: false, navbarPosition: 9 },
      { title: 'Contatti', path: Path.CONTATTI, showInNavbar: false, navbarPosition: 10 }
    ];  // MOCK
    return arr.filter(page => page.showInNavbar).sort((a: Page, b: Page) => a.navbarPosition - b.navbarPosition);
  }

}
