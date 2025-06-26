import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  constructor() { }

  users : User[] = [{mail: 'admin@mail', pass: '1234'}]

  private logueado : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  get logueadoObservable(){
    return this.logueado.asObservable()
  }

  Log(user : User){
    console.log(user)
    if(this.existUser(user)){
    this.logueado.next(true)
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
