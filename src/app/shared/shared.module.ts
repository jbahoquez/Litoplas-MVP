import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

import { CircleMenuComponent } from './common/circle-menu/circle-menu.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { CustomTableComponent } from './common/custom-table/custom-table.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CircleMenuComponent,
    CustomTableComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,

    MatMenuModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CircleMenuComponent,
    CustomTableComponent,
    SpinnerComponent


  ]
})
export class SharedModule { }
