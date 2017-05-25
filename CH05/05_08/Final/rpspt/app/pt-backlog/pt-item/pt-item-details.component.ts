import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';

import { BacklogService } from '../../services/backlog.service';
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

    public formFieldGridCols = '90, *, 90 ';

    constructor(
        private backlogService: BacklogService,
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef
    ) { }

    ngOnInit() {
        this.item = this.backlogService.items[0];
    }

    public textViewFieldHeight(value: string): number {
        if (value) {
            let lineHeight = 20;
            let numlines = Math.ceil(value.length / 36);
            let newHeight = ((numlines < 2 ? 2 : numlines) * lineHeight) + 10;
            return newHeight < 150 ? newHeight : 150;
        }
        else {
            return 40;
        }
    }

    public titleChange(newVal: string) {
        this.item.title = newVal;
        this.backlogService.updatePtItem(this.item);
    }

    public descriptionChange(newVal: string) {
        this.item.description = newVal;
        this.backlogService.updatePtItem(this.item);
    }

    public estimateIncDecTapped(incdec: boolean) {
        this.item.estimate = incdec ? this.item.estimate + 1 : this.item.estimate - 1;
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