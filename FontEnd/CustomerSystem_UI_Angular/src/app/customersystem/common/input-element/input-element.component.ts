import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'input-element',
    templateUrl: 'input-element.component.html',
    styleUrls: ['input-element.component.scss'],
})

export class InputElementComponent {
    @Input() fieldType!: string;
    @Input() label: string = '';
    @Input() type: string = 'text';
    @Input() placeholder: string = '';
    @Input() value: any;
    @Input() disabled: boolean = false;
    @Output() valueChange = new EventEmitter();

    constructor() {}

    ngOnInit(): void{

    }

    onValueChange = (newValue: Event): void => {
        this.value = newValue;
        this.valueChange.emit(this.value);
    }
}