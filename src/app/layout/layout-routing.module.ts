import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from '../admin/admin.module';
import { AuthModule } from '../auth/auth.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch:'full'
  },
  {
    path: '',
    component: UserLayoutComponent,
    children:[
      {path: 'dashboard', loadChildren: () => DashboardModule},
      {path: 'admin', loadChildren: () => AdminModule },
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children:[
      {path: 'login', loadChildren: () => AuthModule }
    ]
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
