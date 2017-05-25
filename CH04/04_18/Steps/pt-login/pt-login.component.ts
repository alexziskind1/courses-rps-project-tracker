import { Component, OnInit } from '@angular/core';

import { Page } from 'ui/page';

import { AuthenticationService } from '../services';
import { DEMO_PASSWORD } from '../shared/constants';
import { PTDomain } from '../typings/domain';
import ILoginModel = PTDomain.ILoginModel;

@Component({
    moduleId: module.id,
    selector: 'pt-login',
    templateUrl: 'pt-login.component.html',
    styleUrls: ['pt-login.component.css']
})
export class LoginComponent implements OnInit {
    public isLoading: boolean = false;

    public loginModel: ILoginModel = { username: 'alexziskind', password: DEMO_PASSWORD };

    constructor(
        private page: Page,
        private authService: AuthenticationService
    ) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    public login() {
        this.isLoading = true;
        this.authService.login(this.loginModel.username, this.loginModel.password)
            .subscribe(data => {
                if (data === null) {
                    console.log('login failed');
                }
                else {
                    console.log('login successful');
                }
                this.isLoading = false;
            },
            error => {
                this.isLoading = false;
            });
    }
}