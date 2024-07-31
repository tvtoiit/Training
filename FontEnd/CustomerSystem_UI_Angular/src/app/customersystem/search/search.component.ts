import { Component, ViewChild, Input } from "@angular/core";
import { InputElementComponent } from "../common/input-element/input-element.component";

@Component ({
    selector: 'search-component',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss']
})

export class SearchComponent {
    @ViewChild('cusName') cusName!: InputElementComponent;
    @Input() fieldType: string = "";

    user: string = "Nguyen Van A";
    handleLogout() {

    }
    /**
     * handle add user
     */
    handleAddUser() {

    }

    /**
     * handle delete user
     */
    handleDeleteUser() {

    }

    /**
     * handle import user
     */
    handleImport() {

    }

    /**
     * handle export user
     */
    handleExport() {

    }

    /**
     * handle search customer
     */
    handleSearch() {

    }
}