import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';

import { ItemTypeEnum, PriorityEnum, StatusEnum } from '../../shared/static-data';
import { PTDomain } from '../../typings/domain';
import IPTItem = PTDomain.IPTItem;

import { ItemTypePickerModalComponent } from "../shared/item-type-picker-modal.component";


@Component({
    moduleId: module.id,
    selector: 'pt-item',
    templateUrl: 'pt-item.component.html',
    styleUrls: ['pt-item.component.css']
})
export class PTItemComponent implements OnInit {

    public item: IPTItem;

    constructor(
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef
    ) { }

    ngOnInit() {
        //setTimeout(() => {
        this.item = ITEM;
        //}, 2000);
    }

    public showTypeModal() {
        const options: ModalDialogOptions = {
            context: { itemTitle: this.item.title, promptMsg: "Select item type" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modalService.showModal(ItemTypePickerModalComponent, options).then((res: ItemTypeEnum) => {
            if (res) {
                console.log(res);
                this.item.type = res;
            }
        });
    }
}

const ITEM: IPTItem =
    { id: '1', title: 'item 1', description: 'item 1 desc', estimate: 5, priority: PriorityEnum.Low, status: StatusEnum.Open, tasks: [], type: ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null };