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

  dollar$ !: Observable<Dollar>
  constructor(private _ac: ActivatedRoute, private _api : DollarApiService) {

  }
  ngOnInit(): void {
    this._ac.paramMap.subscribe(params => {
      this.casa = params.get('casa') || ''
    })
  
    this.dollar$ = this._api.getDollarDetail(this.casa)
  }


  
}
