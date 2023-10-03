import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Login{
  n_ide:string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API_URL=`${environment.api}/auth/login`;

  constructor(private readonly http: HttpClient) { }

  iniciarSesion(login: Login): Observable<string>{

    const token=this.http.post<string>(this.API_URL,login)
    return token


  }
}
