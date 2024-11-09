import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import các component trong phần Admin
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }, // Mặc định điều hướng đến Dashboard khi vào /admin
//   { path: 'add-product', component: AddProductComponent },
//   { path: 'add-supplier', component: AddSupplierComponent },
//   { path: 'search-product', component: SearchProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
