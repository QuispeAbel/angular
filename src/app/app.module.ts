import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogComponent } from './components/log/log.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    TaskComponent,
    TaskListComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule
    ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
