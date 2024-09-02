import { Component } from '@angular/core';

@Component({
    selector: 'color-picker',
    templateUrl: './colorpicker.component.html',
    styleUrls: ['./colorpicker.component.css']
})

export class ColorPickerComponent {
    selectedColor: string = "#ff0000";
}