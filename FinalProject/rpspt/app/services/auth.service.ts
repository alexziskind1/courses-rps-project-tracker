//angular imports
import { Injectable } from '@angular/core';

//nativescript imports
import * as appSettingsModule from "application-settings";

//3rd party imports
import { Observable, Observer } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

//app imports
import { APP_SETTINGS_CURRENT_USER, DEMO_PASSWORD } from '../shared/constants';
import { UserService } from './';
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
                    appSettingsModule.setString(APP_SETTINGS_CURRENT_USER, JSON.stringify(this.currentUser));
                }, 3000);
            } else {
                setTimeout(() => {
                    observer.next(null);
                }, 3000);
            }

        });
    }

    public logout() {
        appSettingsModule.remove(APP_SETTINGS_CURRENT_USER);
    }

    static isLoggedIn(): boolean {
        return !!appSettingsModule.getString(APP_SETTINGS_CURRENT_USER);
    }
}