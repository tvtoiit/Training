import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './customersystem/login/login.component';
import { SearchComponent } from './customersystem/search/search.component';
import { EditComponent } from './customersystem/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
