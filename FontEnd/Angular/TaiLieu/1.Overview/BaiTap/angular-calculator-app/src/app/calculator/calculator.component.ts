import { Component } from '@angular/core';

@Component({
    selector: 'calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {
  display: string = '';

  appendValue(value: string): void {
    // Ngăn chặn toán tử liên tiếp
    if (this.isOperator(value) && this.isOperator(this.display.slice(-1))) {
      return;
    }
    this.display += value;
  }

  clear(): void {
    this.display = '';
  }

  calculate(): void {
    try {
      const result = new Function('return ' + this.display)();
      this.display = result;
    } catch (e) {
      this.display = 'Error';
    }
  }

  isOperator(value: string): boolean {
    return ['+', '-', '*', '/'].includes(value);
  }
}