import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor() { }

  private sharingObservablePrivate: BehaviorSubject<Tarea> = 
      new BehaviorSubject<Tarea>({titulo:'',subtitle: '',descripcion:''})

   get sharingObservable(){
    return this.sharingObservablePrivate.asObservable()
  }

}
