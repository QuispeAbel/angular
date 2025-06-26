import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  constructor() { }

  private logueado : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  get logueadoObservable(){
    return this.logueado.asObservable()
  }

  Log(){
    this.logueado.next(true)
  }

  unLog(){
    this.logueado.next(false)
  }
}
