import { Component } from '@angular/core';
import { MostrarModalService } from './services/mostrar-modal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    public mostrarModal$ : Observable<boolean>

    constructor(private _modal : MostrarModalService){
      this.mostrarModal$ = _modal.sharingObservable
    }

    agregarTarea(){
      this._modal.sharingObservableSet(true);
    }
    
}
