import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/storage/local-storage.service';
import { decrypt } from 'src/app/utils/encrypt';



// interface User {

//   name: string;
//   email: string;
//   phone: string;
//   role: string;
//   id_d?: string;
// }

interface IIntranetUsuarios{
  n_ide:           string;
  password:        string;
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


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  user: any
  ngOnInit(): void {
    const localUser= this.localStorageService.getItem<string>('user')
    this.user= decrypt<IIntranetUsuarios>(localUser!)
  }

}
