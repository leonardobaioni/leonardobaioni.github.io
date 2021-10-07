import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccessoriComponent } from './pages/accessori/accessori.component';
import { AutoComponent } from './pages/auto/auto.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { EbikeComponent } from './pages/ebike/ebike.component';
import { ElencoProdottiComponent } from './pages/elenco-prodotti/elenco-prodotti.component';
import { MonopattiniComponent } from './pages/monopattini/monopattini.component';
import { MotoComponent } from './pages/moto/moto.component';
import { SchedaProdottoComponent } from './pages/scheda-prodotto/scheda-prodotto.component';
import { ScooterComponent } from './pages/scooter/scooter.component';
import { VeicoliDaLavoroComponent } from './pages/veicoli-da-lavoro/veicoli-da-lavoro.component';
import { CatFiltersComponent } from './_component/cat-filters/cat-filters.component';
import { CatGridComponent } from './_component/cat-grid/cat-grid.component';
import { CatItemComponent } from './_component/cat-item/cat-item.component';
import { CatTitleComponent } from './_component/cat-title/cat-title.component';
import { ContainerComponent } from './_component/container/container.component';
import { ContentComponent } from './_component/content/content.component';
import { FooterComponent } from './_component/footer/footer.component';
import { HeaderComponent } from './_component/header/header.component';
import { NavbarComponent } from './_component/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NavbarComponent,
    HomepageComponent,
    AutoComponent,
    MotoComponent,
    ScooterComponent,
    EbikeComponent,
    MonopattiniComponent,
    AccessoriComponent,
    ChiSiamoComponent,
    ContattiComponent,
    NotFoundComponent,
    CountdownComponent,
    SchedaProdottoComponent,
    ElencoProdottiComponent,
    CatItemComponent,
    CatGridComponent,
    CatFiltersComponent,
    CatTitleComponent,
    VeicoliDaLavoroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
