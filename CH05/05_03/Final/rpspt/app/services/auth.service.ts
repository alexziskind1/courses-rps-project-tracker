import { Injectable } from '@angular/core';

import { Observable, Observer } from 'rxjs/Rx';

import { DEMO_PASSWORD } from '../shared/constants';
import { PTDomain } from '../typings/domain';
import IUser = PTDomain.IUser;

@Injectable()
export class AuthenticationService {

    constructor() { }

    public login(username: string, password: string) {
        return Observable.create((observer: Observer<IUser>) => {
            //simulate logging in
            if (password === DEMO_PASSWORD) {
                setTimeout(() => {
                    let fakeUser: IUser = { id: '1', fullName: 'Alex Ziskind', avatar: '' };
                    observer.next(fakeUser);
                }, 3000);
            } else {
                setTimeout(() => {
                    observer.next(null);
                }, 3000);
            }
        });
    }

    public logout() {
        console.log('logging out');
    }
}