import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  logueado : boolean = false

  constructor(private _user : UsuarioService, private _ruter : Router){
    _user.logueadoObservable.subscribe(logueado => this.logueado = logueado)
  }

  signOut(){
    this._user.unLog()
    this._ruter.navigate(['/'])
  }
}
