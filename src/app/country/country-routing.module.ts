import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryPage } from './country.page';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: CountryPage
  },
  {
    path: ':name',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryPageRoutingModule {}
