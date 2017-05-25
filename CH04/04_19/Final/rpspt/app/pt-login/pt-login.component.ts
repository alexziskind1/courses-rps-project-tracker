import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Page } from 'ui/page';
import { View } from 'ui/core/view';

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

    @ViewChild('loginInputs') loginInputsRef: ElementRef;

    public get loginInputs(): View {
        return this.loginInputsRef.nativeElement;
    }

    public loginModel: ILoginModel = { username: 'alexziskind', password: 'fake_password' };

    constructor(
        private page: Page,
        private authService: AuthenticationService
    ) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    public login() {
        this.isLoading = true;
        this.loginInputs.className = '';

        this.authService.login(this.loginModel.username, this.loginModel.password)
            .subscribe(data => {
                if (data === null) {
                    console.log('login failed');
                    this.loginInputs.className = 'login-failed';
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