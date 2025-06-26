import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Dollar } from 'src/app/models/dollar.model';

@Component({
  selector: 'app-dollar',
  templateUrl: './dollar.component.html',
  styleUrls: ['./dollar.component.css']
})
export class DollarComponent {

  public valores ?: any[] = []

  constructor( private _httpClient : HttpClient){

    this._httpClient.get('https://dolarapi.com/v1/dolares').subscribe(
      data => this.valores = Array.isArray(data) ? data : Object.values(data),
      err => console.log(err)
    )

  }

}
