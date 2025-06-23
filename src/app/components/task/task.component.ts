import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';
import { MostrarModalService } from 'src/app/services/mostrar-modal.service';
import { ToDoService } from 'src/app/services/to-do.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


export class TaskComponent {

  @Input() tarea : Tarea = {id: null,titulo:'',fechaCreacion: '',descripcion:'',estado: null}

  constructor(private _modal : MostrarModalService, private _todos : ToDoService){

  }

  cerrar(): void {
    this._modal.sharingObservableSet(false);
  }

  echo() : void {
    this._todos.removeTodo(this.tarea.id)
  }
}
