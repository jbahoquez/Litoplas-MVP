import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){

  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.isLoggetIn()) return true
    alert('Usted no tiene permisos para ver esta página')
    this.router.navigateByUrl('login')
    return false;
  }

  isLoggetIn(): boolean{

    return !!localStorage.getItem('token')
  }

}
