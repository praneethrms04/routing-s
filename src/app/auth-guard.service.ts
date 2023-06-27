import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanAc {
  constructor() {}
  CanActivate( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ):: Observable<boolean | Promise<boolean|UrlTree>|boolean { return}
}
  