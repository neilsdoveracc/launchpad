import { Component, Injectable, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

declare let $: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    constructor(
        private router: Router,
        private toastr: ToastrService,   
    ) {
    }
    isDropdownOpen = false;
    @Input() userName: string = 'John Doe'; // Example default user name
    activeTab: string = 'dashboard'; // Set the default tab as 'dashboard'
    showDropdown: boolean = false;

    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }

    setActiveTab(tab: string) {
        this.activeTab = tab;
    }

    logout() {
        throw new Error('Method not implemented.');
    }

}