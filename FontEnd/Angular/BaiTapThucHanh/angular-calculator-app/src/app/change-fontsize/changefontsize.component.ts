import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
    selector: 'change-fontsize',
    templateUrl: './changefontsize.component.html',
    styleUrls: ['./changefontsize.component.css']
})

export class ChangeFontSizeComponent {
    @ViewChild('element') elementRef!: ElementRef;

    // Font size giá trị ban đầu
    fontSize = 14;

    // Function change font size 
    changeFontSizeValue = (): void => {
        // lấy value khi change input (kéo dài hơn làm thay đổi value)
        const fontSize = this.elementRef.nativeElement.value;
        // Gán lại value cho giá trị đầu tiên
        this.fontSize = Number(fontSize);;
    }
}