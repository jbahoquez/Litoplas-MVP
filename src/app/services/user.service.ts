import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


interface User{
  _id?: string;
  name:string;
  email:string;
  telefono: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private readonly API_URL=`${environment.api}/users`;
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

  addNewUser(user: User): Observable<User>{
    const body={...user};
    delete body._id
    //console.log(this.API_URL, body)
    return this.http.post<User>(this.API_URL, body)
  }
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.API_URL)
  }

  deleteUsers(id: string): Observable<void>{

    return this.http.delete<void>(`${this.API_URL}/${id}`)
  }

  updateUsers(user: User): Observable<void>{
    const body=user;
    return this.http.put<void>(`${this.API_URL}/${user._id}`,body)
  }

}