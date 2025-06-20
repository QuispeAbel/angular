import { Component } from '@angular/core';
import { MostrarModalService } from './services/mostrar-modal.service';
import { Observable } from 'rxjs';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  componentes : Tarea[] = [
    {id: 0,titulo:"Hacer tarea1",fechaCreacion:new Date(), descripcion:"hacer tarea de math", estado: 'pendiente'},
    {id: 2,titulo:"Hacer tarea2",fechaCreacion:new Date(), descripcion:"hacer tarea de X", estado: 'en progreso'},
    {id: 3,titulo:"Hacer tarea3",fechaCreacion:new Date(), descripcion:"hacer tarea de Y", estado: 'completada'},
  ]
  
    public mostrarModal$ : Observable<boolean>

    constructor(private _modal : MostrarModalService){
      this.mostrarModal$ = _modal.sharingObservable
    }

    agregarTarea(){
      this._modal.sharingObservableSet(true);
    }
    
}
