import { Component } from "@angular/core";

@Component({
    selector: 'edit-component',
    templateUrl: 'edit.component.html',
    styleUrls: ['edit.component.scss'],
})

export class EditComponent {
    user: string = "Nguyen Van A";

    /**
     * handle edit form customer
     */
    handleEdit() {

    }
    /**
     * handle clear form
     */
    handleClearForm() {

    }
}