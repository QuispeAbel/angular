import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { TareasComponent } from '../components/tareas/tareas.component';
import { AuthGuard } from '../guardiands/auth.guard';
import { ClimaComponent } from '../components/clima/clima.component';
import { DollarComponent } from '../components/dollar/dollar.component';
import { DetailsDollarComponent } from '../components/details-dollar/details-dollar.component';
import { DollarResolver } from '../resolvers/dollar.resolver';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'tareas',
    component: TareasComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'clima',
    component: ClimaComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'dollar',
    component: DollarComponent,
    canActivate:[AuthGuard]
  },{
    path: 'dollar/:casa',
    component: DetailsDollarComponent,
    //canActivate: [AuthGuard],
    resolve:{
      casa : DollarResolver
    }
  },
  {
    path:'**',
    component: NotFoundComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
