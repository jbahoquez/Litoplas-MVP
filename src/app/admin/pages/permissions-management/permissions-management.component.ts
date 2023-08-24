import { Component, OnInit } from '@angular/core';

interface Permission{
  name: string,
  description: string,
  isActive: boolean
}

@Component({
  selector: 'app-permissions-management',
  templateUrl: './permissions-management.component.html',
  styleUrls: ['./permissions-management.component.css']
})
export class PermissionsManagementComponent implements OnInit {

  permissionDefault: Permission={
    name: '',
    description: '',
    isActive: false
  }

  permission: Permission={
    name: '',
    description: '',
    isActive: true
  }

  permissionsData: Permission[]=[

  ];
  constructor() { }

  ngOnInit(): void {
  }

  processData(){
    this.permissionsData.push({...this.permission})
    this.permission.name=''
    this.permission.description=''
    //console.log(this.permission)
  }

}
