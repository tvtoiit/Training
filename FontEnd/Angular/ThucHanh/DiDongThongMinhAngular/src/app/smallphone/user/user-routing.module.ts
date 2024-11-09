import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
//   { path: 'product/:id', component: ProductDetailComponent }, // Đường dẫn có tham số, ví dụ: /product/1
//   { path: 'cart', component: CartComponent },
//   { path: '', redirectTo: 'home', pathMatch: 'full' } // Mặc định điều hướng đến Trang chủ
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
