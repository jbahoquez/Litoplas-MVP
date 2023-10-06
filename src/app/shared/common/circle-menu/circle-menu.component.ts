import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {faCoffee, IconDefinition } from '@fortawesome/free-solid-svg-icons';



interface Menu {
  id?: number ;
  name: string;
  description?: string;
  icon: IconDefinition;
  color?: string;
  iconColor?: string;
  ruta?: string;
}

@Component({
  selector: 'app-circle-menu',
  templateUrl: './circle-menu.component.html',
  styleUrls: ['./circle-menu.component.css']
})
export class CircleMenuComponent implements OnInit {

  // @Output() emitData: EventEmitter<number>
  @Output() emitData: EventEmitter<string>
  @Input() menu: Menu = {
    id: 0,
    name: '',
    description: '',
    icon: faCoffee,
    color: '',
    iconColor: '',
    ruta: '',
  }

  constructor() {
    // this.emitData = new EventEmitter<number>();
    this.emitData = new EventEmitter<string>();
  }



  ngOnInit(): void {
  }

  getColor(): string {
    if (this.menu.color) {
      const rgbaColor = this.hexToRgba(this.menu.color, 0.3); // Cambia 0.5 al valor de opacidad deseado
      return `background-color: ${rgbaColor}`;
    } else {
      return '';
    }
    // return this.menu.color ? `background-color: ${this.menu.color}` : '';
  }

  getColorFont(): string {
    return this.menu.iconColor ?  `color: ${this.menu.iconColor}` : ''
  }

  // onClickButton(menuId: number ) {

  //   if(menuId) this.emitData.emit(menuId)
  // }

  onClickButton(menuRuta: string ) {

    if(menuRuta) this.emitData.emit(menuRuta)
  }

  hexToRgba(hex: string, opacity: number): string {
    // Convierte el valor hexadecimal a RGBA
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }


}
