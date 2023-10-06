import { Component, OnInit } from '@angular/core';
import {faCoffee, faHouse, faClose, faHamburger, faCar,  IconDefinition, faMessage, faBars, faHomeAlt, faStar, faFlag, faBell, faGear } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OptionsModalComponent } from '../../components/options-modal/options-modal.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

interface Menu {
  id?: number;
  name: string;
  description?: string;
  icon: IconDefinition;
  color?: string;
  iconColor?: string;
  ruta?: string;
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


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  messageIcon: IconDefinition = faMessage;



  profileLogo: Menu = {
    name:'Name 1',
    icon: faCoffee,
    color: 'red',
    description: 'Juancho checa',
  }

  getIcon(menuIcon: string): IconDefinition {
    return icons[menuIcon];
  }

  menus: Menu[] = [
    {
      id:1,
      name:'admin user',
      description: 'admin user',
      icon: this.getIcon('faHouse'),
      color: '#F91000',
      iconColor: '#000'
    },
    {
      id:2,
      name:'Name 2',
      description: 'home',
      icon: faHouse,
      color: '#000000',
      iconColor: '#000'
    },
    {
      id:3,
      name:'Name 3',
      description: 'settings',
      icon: faClose,
      color: '#FA9000',
      iconColor: '#000'
    },
    {
      id:4,
      name:'Name 4',
      description: 'role and permissions',
      icon: faHamburger,
      color: '#7c73e6',
      iconColor: '#000'
    },
    {
      id:5,
      name:'Name 5',
      description: 'Description 5',
      icon: faCar,
      color: '#00F002',
      iconColor: '#000'
    },{
      id:1,
      name:'admin user',
      description: 'admin user',
      icon: this.getIcon('faHouse'),
      color: '#F91000',
      iconColor: '#000',
      ruta:'/admin/user-management'
    },
    {
      id:2,
      name:'Name 2',
      description: 'home',
      icon: faHouse,
      color: '#000000',
      iconColor: '#000'
    },
    {
      id:3,
      name:'Name 3',
      description: 'settings',
      icon: faClose,
      color: '#FA9000',
      iconColor: '#000'
    },
    {
      id:4,
      name:'Name 4',
      description: 'role and permissions',
      icon: faHamburger,
      color: '#7c73e6',
      iconColor: '#000'
    },
    {
      id:5,
      name:'Name 5',
      description: 'Description 5',
      icon: faCar,
      color: '#00F002',
      iconColor: '#000'
    },

  ];

  constructor(private bottomSheet: MatBottomSheet, private router: Router) { }

  ngOnInit(): void {
  }

  // menuClicked(id: number) {
  //   // alert(`menu clickeado ${id}`);
  //   // const hostname = window.location.hostname;
  //   // alert(`Nombre del equipo ${hostname}`)
  //   // const modalRef = this.modalService.open(OptionsModalComponent);
  //   // modalRef.componentInstance.menuId = id;
  //   //this.bottomSheet.open(OptionsModalComponent);
  // }

  menuClicked(ruta: string) {
    // alert(`menu clickeado ${ruta}`);
    // const hostname = window.location.hostname;
    // alert(`Nombre del equipo ${hostname}`)
    // const modalRef = this.modalService.open(OptionsModalComponent);
    // modalRef.componentInstance.menuId = id;
    //this.bottomSheet.open(OptionsModalComponent);
    this.router.navigate([ruta]);
  }

}
