import { Component } from '@angular/core';
import { MostrarModalService } from 'src/app/services/mostrar-modal.service';
import { ToDoService } from 'src/app/services/to-do.service';
import { formOptions } from 'src/app/config/options';
import { Tarea, TareaEstado } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {

  estado : TareaEstado = 'pendiente'
  description : string = ''
  titulo : string = ''

  public statusOptions = formOptions

  constructor(private _modal : MostrarModalService, private _todo : ToDoService){

  }

  crear(){
    console.log(this.estado+this.description)

    this._todo.addTodo({id:Math.random() ,titulo:this.titulo,fechaCreacion: new Date(),descripcion:this.description,estado:this.estado})
    this.cerrar()
    // this._todo.addTodo();
  }

  cerrar(){
    this._modal.sharingObservableSet(false)
  }

  cambiarEstado(estado: TareaEstado ) {
    this.estado = estado;
    // console.log("llega" + estado );
  }

}