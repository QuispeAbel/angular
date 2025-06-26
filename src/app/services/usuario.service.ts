import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  constructor(private _router : Router) { }

  users : User[] = [{mail: 'admin@mail', pass: '1234'}]

  private logueado : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  get logueadoObservable(){
    return this.logueado.asObservable()
  }

  Log(user : User){
    console.log(user)
    if(this.existUser(user)){
    this.logueado.next(true)
    this._router.navigate(['/tareas'])

  }else{
      alert('usuario o contraseña icorrecta')
    }
  }

  unLog(){
    this.logueado.next(false)
  }

  private existUser(userParam : User) : boolean {
    if(this.users.some((user)=> user.mail == userParam.mail && user.pass == userParam.pass)){return true}
    return false
  }
}
