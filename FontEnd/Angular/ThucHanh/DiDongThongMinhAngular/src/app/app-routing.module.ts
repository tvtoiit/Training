import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'smallphone', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./smallphone/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./smallphone/admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', redirectTo: '/smallphone' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
