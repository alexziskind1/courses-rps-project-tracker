import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';
import { SegmentedBar, SegmentedBarItem } from 'ui/segmented-bar';

import { BacklogService } from '../../services';

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

    private _itemDetailScreens = [
        { title: 'Details', routePath: 'pt-item-details' },
        { title: 'Tasks', routePath: 'pt-item-tasks' },
        { title: 'Chitchat', routePath: 'pt-item-chitchat' }
    ];
    public myNavItems: Array<SegmentedBarItem> = [];

    constructor(
        private backlogService: BacklogService,
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef
    ) {
        for (let i = 0; i < this._itemDetailScreens.length; i++) {
            let tmpSegmentedBarItem: SegmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
            tmpSegmentedBarItem.title = this._itemDetailScreens[i].title;
            this.myNavItems.push(tmpSegmentedBarItem);
        }
    }

    ngOnInit() {
        this.backlogService.getItem('2')
            .then(item => {
                this.item = item;
            });
    }

    public selectedItemDetailScreenIndexChanged(segBar: SegmentedBar) {
        let newIndex = segBar.selectedIndex;
        console.log('selected index: ' + newIndex);
    }
}
