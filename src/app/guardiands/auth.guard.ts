import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';
import { Injectable } from '@angular/core';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate {

  public permiso : boolean = false

  constructor(private _user : UsuarioService, private _router : Router){
    _user.logueadoObservable.subscribe(logueado => this.permiso = logueado)
  }



  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.permiso == false){
      alert("no estas logueado")
      this._router.navigate(['/'])
    }
    return this.permiso
  }

  
}
