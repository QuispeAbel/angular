import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  signInGruop : FormGroup

  constructor (private _builder : FormBuilder) {
    this.signInGruop = _builder.group({
      name : ['',Validators.required],
      password : ['', Validators.required]
    })
  }
}
