import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _user : UsuarioService, private _router : Router){}

  signIn(){
    this._user.Log()
    this._router.navigate(['/tareas'])
  }
}
