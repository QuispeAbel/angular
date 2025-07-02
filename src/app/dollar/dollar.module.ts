import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DollarRoutingModule } from './dollar-routing.module';
import { DetailsDollarComponent } from './components/details-dollar/details-dollar.component';
import { DollarComponent } from './components/dollar/dollar.component';


@NgModule({
  declarations: [
    DollarComponent,
    DetailsDollarComponent
  ],
  imports: [
    CommonModule,
    DollarRoutingModule
  ]
})
export class DollarModule { }
