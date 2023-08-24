import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {faCoffee, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface Menu {
  id?: number ;
  name: string;
  description?: string;
  icon: IconDefinition;
  color?: string;
  iconColor?: string;
}

@Component({
  selector: 'app-circle-menu',
  templateUrl: './circle-menu.component.html',
  styleUrls: ['./circle-menu.component.css']
})
export class CircleMenuComponent implements OnInit {

  @Output() emitData: EventEmitter<number>
  @Input() menu: Menu = {
    id: 0,
    name: '',
    description: '',
    icon: faCoffee,
    color: '',
    iconColor: '' 
  }

  constructor() { 
    this.emitData = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  getColor(): string {
    return this.menu.color ? `background-color: ${this.menu.color}` : '';
  }

  getColorFont(): string {
    return this.menu.iconColor ?  `color: ${this.menu.iconColor}` : ''
  }

  onClickButton(menuId: number ) {
    if(menuId) this.emitData.emit(menuId)
  }



}
