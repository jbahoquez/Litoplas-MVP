import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminManagementComponent } from './pages/admin-management/admin-management.component';
import { PermissionsManagementComponent } from './pages/permissions-management/permissions-management.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { WithoutSaveGuard } from '../guards/without-save.guard';
import { PasswordManagementComponent } from './pages/password-management/password-management.component';

const routes: Routes = [
  { path:'', component: AdminManagementComponent },
  { path:'user-management', component: UserManagementComponent },
  { path: 'user-management/:userId', component: UserManagementComponent, canDeactivate: [WithoutSaveGuard]},
  { path:'permissions-management', component: PermissionsManagementComponent, canDeactivate: [WithoutSaveGuard] },
  { path:'password-management', component: PasswordManagementComponent, canDeactivate: [WithoutSaveGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
