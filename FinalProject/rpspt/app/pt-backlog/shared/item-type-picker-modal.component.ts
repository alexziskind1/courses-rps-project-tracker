//angular imports
import { Component, OnInit } from "@angular/core";

//nativescript imports
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

//app imports
import { ItemTypeEnum } from '../../shared/static-data';

@Component({
    moduleId: module.id,
    selector: 'item-type-picker-modal',
    templateUrl: 'item-type-picker-modal.component.html'
})
export class ItemTypePickerModalComponent implements OnInit {
    public prompt: string;
    public itemTitle: string;

    public items: DisplayItem[];

    constructor(private params: ModalDialogParams) { }

    public close() {
        this.params.closeCallback(null);
    }

    ngOnInit() {
        this.prompt = this.params.context.promptMsg;
        this.itemTitle = this.params.context.itemTitle;

        let theItems: DisplayItem[] = [];

        for (var enumMember in ItemTypeEnum) {
            let intVal = parseInt(enumMember, 10);
            var isValueProperty = intVal >= 0;
            if (isValueProperty) {
                theItems.push({ value: enumMember, title: ItemTypeEnum[enumMember], img: ItemTypeEnum.getImage(intVal) });
            }
        }
        this.items = theItems;
    }

    public typeSelect(args: any) {
        this.params.closeCallback(ItemTypeEnum[args]);
    }
}

interface DisplayItem {
    title: string;
    value: string;
    img: string;
}
