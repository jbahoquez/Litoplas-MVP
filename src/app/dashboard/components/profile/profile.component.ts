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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileLogo: Menu = {
    name:'Name 1',
    icon: faCoffee,
    color: 'red',
    description: '',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
