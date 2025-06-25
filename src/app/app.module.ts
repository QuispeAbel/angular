import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogComponent } from './components/log/log.component';
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

const routes: Routes = [
  {
    path:'',
    component: TareasComponent
  },
  {
    path:'tareas',
    component: TareasComponent
  },
  {
    path:'clima',
    component: ClimaComponent
  },
  {
    path:'dollar',
    component: DollarComponent
  },
  {
    path:'**',
    component: NotFoundComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    TaskComponent,
    TaskListComponent,
    EditModalComponent,
    FormatFechaPipe,
    DropdownComponent,
    FilterComponent,
    TareasComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
