import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../share/shared.module';

import { HomeComponent } from './component/home/home.component';
import { SizeBarComponent } from './component/home/sizebar/sizebar.component';
import { ContentProduct } from './component/home/contentproduct/contentproduct.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContentProduct, 
    SizeBarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule 
  ]
})
export class UserModule { }
