import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dollar } from '../models/dollar.model';

@Injectable({
  providedIn: 'root'
})
export class DollarApiService {

  constructor( private _http : HttpClient) { }

  public _valores : BehaviorSubject<Dollar[]> = new BehaviorSubject<Dollar[]>([])

  private _dollarDetail : BehaviorSubject<Dollar> = new BehaviorSubject<Dollar>({
    compra: 0,
    venta: 0, 
    casa: '', 
    nombre: '', 
    moneda: '', 
    fechaActualizacion: ''})

  get _valores$() : Observable<Dollar[]> {
    return this._valores.asObservable()
  }

  getDollar() : void {
    this._http.get('https://dolarapi.com/v1/dolares').subscribe(
      data => this._valores.next(Array.isArray(data) ? data : Object.values(data)),
      err => console.log(err)
    )
  }

  getDollarDetail(casa : Dollar['casa']) : Observable<Dollar> {

    return this._http.get<Dollar>(`https://dolarapi.com/v1/dolares/${casa}`)
    

    //return this._dollarDetail.asObservable()
  }


}
