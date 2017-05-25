import { Component, OnInit } from '@angular/core';

import { ItemTypeEnum, PriorityEnum, StatusEnum } from '../../shared/static-data';
import { PTDomain } from '../../typings/domain';
import IPTItem = PTDomain.IPTItem;

@Component({
    moduleId: module.id,
    selector: 'pt-item',
    templateUrl: 'pt-item.component.html'
})

export class PTItemComponent implements OnInit {
    public item: IPTItem;

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.item = ITEM;
        }, 2000);
    }
}

const ITEM: IPTItem =
    { id: '1', title: 'item 1', description: 'item 1 desc', estimate: 5, priority: PriorityEnum.Low, status: StatusEnum.Open, tasks: [], type: ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null };