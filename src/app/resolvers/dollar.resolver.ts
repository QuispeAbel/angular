import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { DollarApiService } from "../services/dollar-api.service";
import { Dollar } from "../models/dollar.model";

@Injectable({
    providedIn: 'root'
})

export class DollarResolver implements Resolve<Observable<any>> {

    casa !: Dollar['casa']
    retorno !: Observable<Dollar>

    constructor(private _api : DollarApiService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Dollar> {
        this.casa = route.paramMap.get('casa') || ''
        return this._api.getDollarDetail(this.casa)
        //this.retorno = this._api.getDollarDetail(this.casa)
        //return this.retorno
    }
    
}