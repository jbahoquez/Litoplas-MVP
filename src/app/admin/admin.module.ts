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

import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { PasswordManagementComponent } from './pages/password-management/password-management.component';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    PermissionsManagementComponent,
    UserManagementComponent,
    AdminManagementComponent,
    TableInfoComponent,
    TextTransformPipe,
    PasswordManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule,

    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    MatTabsModule,
    MatButtonToggleModule

  ]
})
export class AdminModule { }
