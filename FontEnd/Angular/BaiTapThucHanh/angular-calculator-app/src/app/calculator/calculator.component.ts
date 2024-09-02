import { Component } from '@angular/core';
 
@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent { 
  // call api data user
  // Full name

  userName: string = "Nguyen văn A";
  // Login validate
  isCheckUser: boolean = false;

  userList = [
    'Nguyen Van A', 'Nguyen Van B',
    'Nguyen Van C', 'Nguyen Van D',
    'Nguyen Van C', 'Nguyen Van D'
  ]

  /***
   * input: type = color 
   * Hiển thị lại màu đã chọn ở input 
   */




}