import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OptionsModalComponent } from './components/options-modal/options-modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    OptionsModalComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
