import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DollarComponent } from './components/dollar/dollar.component';

const routes: Routes = [
  {path: '',
  component: DollarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DollarRoutingModule { }
