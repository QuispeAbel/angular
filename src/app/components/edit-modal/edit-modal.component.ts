import { Component } from '@angular/core';
import { MostrarModalService } from 'src/app/services/mostrar-modal.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {

  constructor(private _modal : MostrarModalService){

  }

  editar(){
    
  }

  cerrar(){
    this._modal.sharingObservableSet(false)
  }
}

