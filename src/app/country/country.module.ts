import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryPageRoutingModule } from './country-routing.module';

import { CountryPage } from './country.page';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryPageRoutingModule,
    SharedModule
  ],
  declarations: [CountryPage, DetailComponent]
})
export class CountryPageModule {}
