# Angular Documentation

## 1. ngModule
NgModule là một decorator đánh dấu một lớp là một Module của Angular và cung cấp metadata cấu hình cho Angular.

## 2. Component
Component là một thành phần cơ bản của Angular. Mỗi component bao gồm một class với decorator `@Component` để xác định các thuộc tính của nó.

## 3. Templates
### Interpolation
Binding dữ liệu từ component tới view thông qua cú pháp `{{}}`.

### Property Binding
Binding thuộc tính của HTML element từ component tới view thông qua cú pháp `[property]="expression"`.

### Event Binding
Binding sự kiện từ view tới component thông qua cú pháp `(event)="handler"`.

### Two-way Binding
Binding hai chiều sử dụng `ngModel` thông qua cú pháp `[(ngModel)]="property"`.

## 4. Cách truyền dữ liệu giữa các component

### Cách truyền dữ liệu từ component con lên component cha
- Được thực hiện thông qua cơ chế  `input property`
1. Khai báo `input property` trong component con
@Input() message: string = '';

2. Sử dụng component con trong component cha
- Trong template của component cha sử dụng selector của component con và truyền dữ liệu vào Input Property bằng cú pháp `property binding` `[property]="value"`

Ví dụ: <app-child [message]="partenMessage"></app-child>

### Cách truyền dữ liệu từ component cha xuống component con
1. Sử dụng EventEmitter và Output trong component con
Ví dụ: <button (click)="senData()">Send data to parent</button>
Ở component con khai báo 

@Output() dataEvent = new EventEmitter<string>();
senData = () => {
  this.dataEvent.emit('Hello from child Component');
} 

2. Lắng nghe sự kiện trong component cha
Ví dụ: <app-child (dataEvent)="receiveData($event)"></app-child>


## 5. Directives
Thay đổi cấu trúc của DOM hoặc điều chỉnh hành vi của các element.

### ngIf
Điều kiện hiển thị: `*ngIf="condition"`.

### ngFor
Lặp qua một danh sách: `*ngFor="let item of items"`.

### Attribute Directives
Thay đổi kiểu và hành vi của element.

#### ngClass
Thay đổi lớp CSS: `[ngClass]="{'class-name': condition}"`.

#### ngStyle
Thay đổi kiểu CSS: `[ngStyle]="{'property': value}"`.

## 6. Services và Dependency Injection
Services là nơi chứa các logic dùng chung cho nhiều component. Dependency Injection (DI) là một mẫu thiết kế để cung cấp các dependency cho các class.

### @Injectable
Decorator để khai báo một service có thể được inject.

### Injection trong Component
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  constructor() { }
}

// Inject service vào component
import { MyService } from './my-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
})
export class MyComponent {
  constructor(private myService: MyService) { }
}


## 7. Routing
### Cấu hình các route cho ứng dụng.

Khai báo route

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

### Router Outlet
Để xác định nơi sẽ render component tương ứng với route.

<router-outlet></router-outlet>

## 8. Forms
### Template-driven forms
Sử dụng ngModel để quản lý các form.

<form #myForm="ngForm">
  <input name="name" ngModel>
</form>


Reactive forms
Sử dụng FormGroup và FormControl để quản lý các form.

import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
})
export class MyFormComponent {
  myForm = new FormGroup({
    name: new FormControl(''),
  });
}


## 9. Pipes
Sử dụng pipes trong template

<p>{{ today | date }}</p>

Tạo custom pipe

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipe implements PipeTransform {
  transform(value: string): string {
    return `Custom: ${value}`;
  }
}

