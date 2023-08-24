import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import { TableData, DataKeys } from '../../domain';
import {IconDefinition, faCoffee, faHouse, faTrash, faPencil} from '@fortawesome/free-solid-svg-icons';
//Body
// interface TableData {
//   headers: DataKeys[];
//   dataColumns: any[];
// }
//  //Cabeceras
// interface DataKeys {
//   description: string;
//   field: string;
// }
interface icons {
  item: IconDefinition
}

const icons: any = {
  faTrash: faTrash,
  faHouse: faHouse,
  faPencil: faPencil

}

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTableComponent implements OnChanges, OnInit, OnDestroy {
  @Input() tableData: TableData ={
    headers: [],
    dataColumns: []
  }

    @Output() onUpdate = new EventEmitter<any>()
    @Output() onDelete = new EventEmitter<any>()
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes ->', changes)
  }

  ngOnInit(): void {
    console.log('OnInit')
  }

  ngOnDestroy(): void {
    console.log('OnDestroy')
  }

  countRender(): boolean{
    console.log('Render Table')
    return true;
  }

  getIcon(menuIcon: string): IconDefinition {
    return icons[menuIcon];
  }
  onUpdateClick(item: any){
    //console.log(item, 'item a actualizar')
    this.onUpdate.emit(item)
  }
  onDeleteClick(item: any){
    //console.log(item, 'item a eliminar')
    this.onDelete.emit(item)
  }
}
