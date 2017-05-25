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
    private _filteredItems: Array<IPTItem> = [];

    public get items() {
        return this._allItems;
    }

    public get filteredItems() {
        return this._filteredItems;
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

    public updatePtItem(item: IPTItem) {

    }

    public filter(selectedViewIndex: number) {
        var filteredItems = [];
        switch (selectedViewIndex) {
            case 0:
                filteredItems = this._allItems.filter(i => i.assignee.fullName === 'Alex Ziskind');
                break;
            case 1:
                filteredItems = this._allItems.filter(i => i.status === StatusEnum.Open || i.status === StatusEnum.ReOpened);
                break;
            case 2:
                filteredItems = this._allItems.filter(i => i.status === StatusEnum.Closed);
                break;
            default:
                filteredItems = this._allItems;
        }
        this._filteredItems = filteredItems;
    }
}
