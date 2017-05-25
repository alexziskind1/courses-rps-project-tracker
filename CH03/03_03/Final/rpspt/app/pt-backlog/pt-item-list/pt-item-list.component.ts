import { Component, OnInit } from '@angular/core';

import { ItemTypeEnum, PriorityEnum, StatusEnum } from '../../shared/static-data';
import { PTDomain } from '../../typings/domain';
import IPTItem = PTDomain.IPTItem;

@Component({
    moduleId: module.id,
    selector: 'pt-item-list',
    templateUrl: 'pt-item-list.component.html',
    styleUrls: [ 'pt-item-list.component.css' ]
})
export class PTItemListComponent implements OnInit {
    public ptItems: IPTItem[];


    constructor() { }

    ngOnInit() {
        this.ptItems = ITEMS;
    }
}

const ITEMS: IPTItem[] = [
    { id: '1', title: 'item 1', description: 'item 1 desc', estimate: 1, priority: PriorityEnum.Low, status: StatusEnum.Open, tasks: [], type: ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null },
    { id: '2', title: 'item 2', description: 'item 2 desc', estimate: 1, priority: PriorityEnum.Low, status: StatusEnum.Open, tasks: [], type: ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null },
    { id: '3', title: 'item 3', description: 'item 3 desc', estimate: 1, priority: PriorityEnum.Low, status: StatusEnum.Open, tasks: [], type: ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null },
    { id: '4', title: 'item 4', description: 'item 4 desc', estimate: 1, priority: PriorityEnum.Low, status: StatusEnum.Open, tasks: [], type: ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null },
    { id: '5', title: 'item 5', description: 'item 5 desc', estimate: 1, priority: PriorityEnum.Low, status: StatusEnum.Open, tasks: [], type: ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null },
];