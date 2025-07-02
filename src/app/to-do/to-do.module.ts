import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { TaskComponent } from './components/task/task.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FormatFechaPipe } from '../pipes/format-fecha.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FilterComponent } from './components/filter/filter.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    TaskComponent,
        TaskListComponent,
        EditModalComponent,
        FormatFechaPipe,
        DropdownComponent,
        FilterComponent,
        TareasComponent,
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ]
})
export class ToDoModule { }
