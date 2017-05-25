import { Injectable } from '@angular/core';

import * as appSettingsModule from "application-settings";

import { Observable, Observer } from 'rxjs/Rx';

import { UserService } from './';

import { DEMO_PASSWORD } from '../shared/constants';
import { PTDomain } from '../typings/domain';
import IUser = PTDomain.IUser;

@Injectable()
export class AuthenticationService {

    public currentUser: IUser;

    constructor(private userService: UserService) {

        userService.usersObs.subscribe((d) => {
            this.currentUser = d[0];
        });
    }

    public login(username: string, password: string) {
        return Observable.create((observer: Observer<IUser>) => {
            //simulate logging in
            if (password === DEMO_PASSWORD) {
                setTimeout(() => {
                    observer.next(this.currentUser);
                    appSettingsModule.setString('CurrentUser', JSON.stringify(this.currentUser));
                }, 3000);
            } else {
                setTimeout(() => {
                    observer.next(null);
                }, 3000);
            }
        });
    }

    public logout() {
        appSettingsModule.remove('CurrentUser');
    }

    static isLoggedIn(): boolean {
        return !!appSettingsModule.getString('CurrentUser');
    }
}