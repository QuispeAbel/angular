import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dollar } from 'src/app/models/dollar.model';
import { DollarApiService } from 'src/app/services/dollar-api.service';

@Component({
  selector: 'app-details-dollar',
  templateUrl: './details-dollar.component.html',
  styleUrls: ['./details-dollar.component.css']
})
export class DetailsDollarComponent implements OnInit {

  casa !: Dollar['casa']

  //dollar$ !: Observable<Dollar>
  dollar$ !: Dollar
  constructor(private _ac: ActivatedRoute, private _api : DollarApiService) {
    // console.log(this._ac.snapshot.data['casa'])
    this.dollar$ = this._ac.snapshot.data['casa']
    console.log("este es el dolar")
    console.log(this.dollar$)
  }
  ngOnInit(): void {
    //console.log(this.dollar$)
    
  }


  
}
