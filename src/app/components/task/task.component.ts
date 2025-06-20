import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';
import { MostrarModalService } from 'src/app/services/mostrar-modal.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


export class TaskComponent {

  @Input() tarea : Tarea = {id: null,titulo:'',fechaCreacion: '',descripcion:'',estado: null}

  //@Output() edicion : EventEmitter<Tarea> = new EventEmitter<Tarea>

  constructor(private _modal : MostrarModalService){

  }

  editar(): void {
    this._modal.sharingObservableSet(true);

    //this.edicion.emit(this.tarea)
  }

  cerrar(): void {
    this._modal.sharingObservableSet(false);
  }
}
