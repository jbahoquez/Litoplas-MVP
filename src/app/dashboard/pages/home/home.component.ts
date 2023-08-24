import { Component, OnInit } from '@angular/core';
import {faCoffee, faHouse, faClose, faHamburger, faCar,  IconDefinition, faMessage, faBars, faHomeAlt, faStar, faFlag, faBell, faGear } from '@fortawesome/free-solid-svg-icons';

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
      color: 'red'
    },
    {
      id:2,
      name:'Name 2',
      description: 'home',
      icon: faHouse,
      color: 'blue'
    },
    {
      id:3,
      name:'Name 3',
      description: 'settings',
      icon: faClose,
      color: '#eeeeee',
      iconColor: '#000'
    },
    {
      id:4,
      name:'Name 4',
      description: 'role and permissions',
      icon: faHamburger,
      color: '#7c73e6'
    },
    {
      id:5,
      name:'Name 5',
      description: 'Description 5',
      icon: faCar,
      color: '#eeeeee',
      iconColor: '#000'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  menuClicked(id: number) {
    alert(`menu clickeado ${id}`);
  }

}
