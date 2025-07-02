import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dollar } from 'src/app/models/dollar.model';
import { DollarApiService } from 'src/app/services/dollar-api.service';

@Component({
  selector: 'app-dollar',
  templateUrl: './dollar.component.html',
  styleUrls: ['./dollar.component.css']
})
export class DollarComponent implements OnInit{

  public valores$ !: Observable<Dollar[]>
  private _api : DollarApiService

  constructor(_api : DollarApiService, private _route : Router){
    this._api = _api
  }

  ngOnInit(): void {
    this._api.getDollar()
    this.valores$ = this._api._valores$
  }

  detalle( valor : Dollar){
    console.log(valor.casa)
    this._route.navigate(['dollar/'+ valor.casa])
  }

}
