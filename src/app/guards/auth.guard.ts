import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){

  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.isLoggetIn()) return true
    Swal.fire({
      title: 'Acceso denegado!',
      text: 'Usted no tiene permisos para ver esta página!',
      icon: 'error',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Continuar'
    })
    // alert('Usted no tiene permisos para ver esta página')
    this.router.navigateByUrl('login')
    return false;
  }

  isLoggetIn(): boolean{

    return !!localStorage.getItem('token')
  }

}
