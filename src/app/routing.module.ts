import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';
import { TareasComponent } from './to-do/components/tareas/tareas.component';
import { AuthGuard } from './guardiands/auth.guard';
import { DollarComponent } from './dollar/components/dollar/dollar.component';
import { DetailsDollarComponent } from './dollar/components/details-dollar/details-dollar.component';
import { DollarResolver } from './resolvers/dollar.resolver';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'tareas',
    loadChildren: () => import('./to-do/to-do.module').then(m => m.ToDoModule),
    canActivate:[AuthGuard]
  },

  {
    path:'dollar',
    loadChildren: () => import('./dollar/dollar.module').then(m => m.DollarModule),
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
