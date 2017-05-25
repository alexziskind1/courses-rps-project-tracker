import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pt-login',
    templateUrl: 'pt-login.component.html'
})
export class LoginComponent implements OnInit {
    public isLoading: boolean = false;

    constructor() { }

    ngOnInit() { }

    public login() {
        this.isLoading = true;
        console.log('login tapped');
    }
}