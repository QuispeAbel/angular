import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { DollarApiService } from "../services/dollar-api.service";
import { Dollar } from "../models/dollar.model";

@Injectable({
    providedIn: 'root'
})

export class DollarResolver implements Resolve<Observable<any>> {

    casa !: Dollar['casa']

    constructor(private _api : DollarApiService){

    }
    resolve(route : ActivatedRouteSnapshot){
       
        this.casa = route.paramMap.get('casa') || ''
        return this._api.getDollarDetail(this.casa)
    }
}