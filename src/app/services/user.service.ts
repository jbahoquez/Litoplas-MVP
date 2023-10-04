import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


// interface User{
//   name:string;
//   email:string;
//   phone: string;
//   role: string;
//   id_d?: string;

// }

interface IIntranetUsuarios{
  n_ide:           string;
  password?:        string;
  mail?:           string;
  nombre?:         string;
  fecha?:          Date | null;
  usuario?:        string;
  estado?:         string;
  peticiones?:     string;
  incidentes?:     string;
  fecha_password?: Date | null;
  fecha_retiro?:   Date | null;
  c_emp?:          string;
  bloqueado?:      string;
  salt?:           string;
  roles_id:        number;
  perfiles_id:     number;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private readonly API_URL=`${environment.api}/intranet-usuarios`;
  private contUser$ = new BehaviorSubject<number>(0)

  get totalUsers(): Observable<number>{
    return this.contUser$
  }

  setTotalUsers(total: number){
    this.contUser$.next(total)
  }

  // userData=[
  //   {
  //     name:'Jaime Bahoquez',
  //     email:'jbahoquez@gmail.com',
  //     telefono:'3333333333',
  //     password:'ddddd'
  //   }
  // ]
  // get getuserdata(){
  //   return this.userData
  // }
  constructor(private readonly http: HttpClient) { }


  // saveUser(user: User): void{
  //   this.userData.push(user)
  // }

  // getUsers() : User[]{
  //   return this.userData
  // }

  addNewUser(user: IIntranetUsuarios): Observable<IIntranetUsuarios>{
    const body={...user};
    //delete body.n_ide
    //console.log(this.API_URL, body)
    return this.http.post<IIntranetUsuarios>(this.API_URL, body)
  }
  getUsers(): Observable<IIntranetUsuarios[]>{
    return this.http.get<IIntranetUsuarios[]>(this.API_URL)
  }

  deleteUsers(id: string): Observable<void>{

    return this.http.delete<void>(`${this.API_URL}/${id}`)
  }

  updateUsers(user: IIntranetUsuarios, n_ide:string): Observable<void>{
    const body={...user};
    return this.http.put<void>(`${this.API_URL}/${n_ide}`,body)
  }

}
