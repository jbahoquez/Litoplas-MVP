import { Component, OnInit } from '@angular/core';
import {faCoffee, faHouse, faClose, faHamburger, faCar,  IconDefinition, faMessage, faBars, faHomeAlt, faStar, faFlag, faBell, faGear } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from '../../../storage/local-storage.service';
import { decrypt } from 'src/app/utils/encrypt';

interface Menu {
  id?: number;
  name: string;
  description?: string;
  icon: IconDefinition;
  color?: string;
  iconColor?: string;
}

interface icons {
  item: IconDefinition
}

const icons: any = {
  faCoffee: faCoffee,
  faHouse: faHouse,
  faBars: faBars,
  faHomeAlt: faHomeAlt,
  faStar: faStar,
  faFlag: faFlag,
  faBell: faBell,
  faMessage: faMessage,
  faGear: faGear
}

interface IIntranetUsuarios{
  n_ide:           string | null;
  password?:       string;
  mail?:           string | null;
  nombre?:         string | null;
  fecha?:          Date | null;
  usuario?:        string | null;
  estado?:         string | null;
  peticiones?:     string | null;
  incidentes?:     string | null;
  fecha_password?: Date | null;
  fecha_retiro?:   Date | null;
  c_emp?:          string | null;
  bloqueado?:      string | null;
  salt?:           string | null;
  roles_id:        number | null;
  perfiles_id:     number | null;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService){}

  // usuario:IIntranetUsuarios=decrypt(this.localStorageService.getItem('user'))
  // nombre: string=this.usuario.nombre


  profileLogo: Menu = {
    name:'Name 1',
    icon: faCoffee,
    color: 'red',
    description: '',
  }


  ngOnInit(): void {
  }

}
