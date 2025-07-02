import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Tarea } from 'src/app/models/tarea.model';
import { MostrarModalService } from 'src/app/services/mostrar-modal.service';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

   public todos : Tarea[] = []
  
      public suscription : Subscription
    
      public mostrarModal$ : Observable<boolean>
  
      constructor(private _modal : MostrarModalService, private _todos : ToDoService){
        this.mostrarModal$ = _modal.sharingObservable
  
        this.suscription = _todos.sharingObservable.subscribe( todos => this.todos = todos)
  
      }
  
      ngDestroy(){
        this.suscription .unsubscribe()
      }
      agregarTarea(){
         this._modal.sharingObservableSet(true);
      }

}
