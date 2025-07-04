import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MostrarModalService {

  //mostrarModal : boolean = false

  constructor() { }

  private sharingObservablePrivate: BehaviorSubject<boolean> = 
    new BehaviorSubject<boolean>(false)

  get sharingObservable(){
    return this.sharingObservablePrivate.asObservable()
  }

  sharingObservableSet(valor : boolean){
    this.sharingObservablePrivate.next(valor)
  }

}
