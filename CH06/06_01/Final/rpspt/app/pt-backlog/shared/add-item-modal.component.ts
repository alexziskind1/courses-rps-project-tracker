//angular imports
import { Component, OnInit, ViewContainerRef } from "@angular/core";

//nativescript imports
import { Page } from 'ui/page';
import { ModalDialogService, ModalDialogParams, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
import { ItemEventData, ListView } from 'ui/list-view';
import { ItemTypePickerModalComponent } from "../shared/item-type-picker-modal.component";

//app imports
import { ItemTypeEnum } from '../../shared/static-data';
import { PTDomain } from '../../typings/domain';
import INewItem = PTDomain.INewItem;

import IUser = PTDomain.IUser;

@Component({
    moduleId: module.id,
    selector: 'add-item-modal',
    templateUrl: 'add-item-modal.component.html',
    styleUrls: ['add-item-modal.component.css']
})
export class AddItemModalComponent implements OnInit {
    public prompt: string;

    public formFieldGridCols = '90, *, 90';
    public newItem: INewItem;

    public get btnDoneEnabled() {
        return this.newItem.title.length > 0;
    }

    constructor(
        private params: ModalDialogParams,
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef) { }

    public tapCancel() {
        this.params.closeCallback(null);
    }

    public tapDone() {
        this.params.closeCallback(this.newItem);
    }

    ngOnInit() {
        this.prompt = this.params.context.promptMsg;
        this.newItem = {
            title: '',
            description: '',
            type: ItemTypeEnum.PBI
        };
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

    public showTypeModal() {
        const options: ModalDialogOptions = {
            context: { itemTitle: this.newItem.title, promptMsg: "Select item type" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modalService.showModal(ItemTypePickerModalComponent, options).then((res: ItemTypeEnum) => {
            if (res) {
                this.newItem.type = res;
            }
        });
    }
}