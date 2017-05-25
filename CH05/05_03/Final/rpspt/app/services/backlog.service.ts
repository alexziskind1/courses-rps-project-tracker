import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import { UserService } from './user.service';
import { MockDataService } from './mock-data.service';
import { ItemTypeEnum, PriorityEnum, StatusEnum } from '../shared/static-data';
import { PTDomain } from '../typings/domain';
import IPTItem = PTDomain.IPTItem;
import IUser = PTDomain.IUser;

@Injectable()
export class BacklogService {
    private _allItems: Array<IPTItem> = [];

    public get items() {
        return this._allItems;
    }

    constructor(
        private mockDataService: MockDataService,
        private userService: UserService
    ) {
        this._allItems = mockDataService.generatePTItems(userService.users);
    }

    public getItem(id: string) {
        let selectedItem = _.find(this._allItems, i => i.id == id);
        return Promise.resolve(selectedItem);
    }
}
