import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { FormatFechaPipe } from './pipes/format-fecha.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FilterComponent } from './components/filter/filter.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TareasComponent } from './components/tareas/tareas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ClimaComponent } from './components/clima/clima.component';
import { DollarComponent } from './components/dollar/dollar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component'
import { AuthGuard } from './guardiands/auth.guard';

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
  },
  {
    path:'**',
    component: NotFoundComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    EditModalComponent,
    FormatFechaPipe,
    DropdownComponent,
    FilterComponent,
    TareasComponent,
    NavbarComponent,
    NotFoundComponent,
    DollarComponent,
    ClimaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
