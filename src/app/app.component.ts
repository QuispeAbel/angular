import { Component } from '@angular/core';
import { MostrarModalService } from './services/mostrar-modal.service';
import { Observable, Subscription } from 'rxjs';
import { Tarea } from './models/tarea.model';
import { ToDoService } from './services/to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
