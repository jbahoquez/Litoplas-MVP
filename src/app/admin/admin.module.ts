import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PermissionsManagementComponent } from './pages/permissions-management/permissions-management.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { AdminManagementComponent } from './pages/admin-management/admin-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TableInfoComponent } from './components/table-info/table-info.component';
import { TextTransformPipe } from '../pipes/text-transform.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PermissionsManagementComponent,
    UserManagementComponent,
    AdminManagementComponent,
    TableInfoComponent,
    TextTransformPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class AdminModule { }
