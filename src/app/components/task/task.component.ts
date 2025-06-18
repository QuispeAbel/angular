import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';
import { MostrarModalService } from 'src/app/services/mostrar-modal.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


export class TaskComponent {

  //mostrar : boolean = false

  @Input() tarea? : Tarea = {titulo:'',subtitle: '',descripcion:''}

  constructor(private _modal : MostrarModalService){

  }

  // editar(){
  //     this._modal.mostrarModalfunc()
  //     console.log(this._modal.mostrarModal)
  //   }

}
