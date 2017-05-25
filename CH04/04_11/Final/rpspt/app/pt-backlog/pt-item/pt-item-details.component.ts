import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';

import { BacklogService } from '../../services';

import { ItemTypeEnum, PriorityEnum, StatusEnum } from '../../shared/static-data';
import { PTDomain } from '../../typings/domain';
import IPTItem = PTDomain.IPTItem;

import { ItemTypePickerModalComponent } from "../shared/item-type-picker-modal.component";

@Component({
    moduleId: module.id,
    selector: 'pt-item-details',
    templateUrl: 'pt-item-details.component.html'
})

export class PTItemDetailsComponent implements OnInit {
    public item: IPTItem;

    constructor(
        private backlogService: BacklogService,
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef
    ) { }

    ngOnInit() {
        this.backlogService.getItem('2')
            .then(item => {
                this.item = item;
            });
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