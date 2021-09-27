import { SchedaProdottoComponent } from './pages/scheda-prodotto/scheda-prodotto.component';
import { MotoComponent } from './pages/moto/moto.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { AccessoriComponent } from './pages/accessori/accessori.component';
import { MonopattiniComponent } from './pages/monopattini/monopattini.component';
import { EbikeComponent } from './pages/ebike/ebike.component';
import { ScooterComponent } from './pages/scooter/scooter.component';
import { AutoComponent } from './pages/auto/auto.component';
import { CountdownComponent } from './countdown/countdown.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Path } from './_constant/path';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: Path.HOMEPAGE,
    component: HomepageComponent
  },
  {
    path: Path.HOME,
    component: HomepageComponent
  },
  {
    path: Path.AUTO,
    component: AutoComponent
  },
  {
    path: Path.MOTO,
    component: MotoComponent
  },
  {
    path: Path.SCOOTER,
    component: ScooterComponent
  },
  {
    path: Path.EBIKE,
    component: EbikeComponent
  },
  {
    path: Path.MONOPATTINI,
    component: MonopattiniComponent
  },
  {
    path: Path.ACCESSORI,
    component: AccessoriComponent
  },
  {
    path: Path.CHI_SIAMO,
    component: ChiSiamoComponent
  },
  {
    path: Path.CONTATTI,
    component: ContattiComponent
  },
  {
    path: Path.SCHEDA_PRODOTTO + '/:id',
    component: SchedaProdottoComponent
  },
  {
    path: Path.COUNTDOWN,
    component: CountdownComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
