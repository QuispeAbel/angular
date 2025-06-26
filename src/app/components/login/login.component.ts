import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formGroup : FormGroup

  constructor(private _user : UsuarioService, private _router : Router, private _builder : FormBuilder){

    this.formGroup = _builder.group({
      email : ['', Validators.compose([Validators.required, Validators.email])],
      password : ['', Validators.required]
    })
  }


  signIn(values : any){
    let user : User = {mail: values.email, pass: values.password}
    this._user.Log(user)
    this._router.navigate(['/tareas'])
  }
}
