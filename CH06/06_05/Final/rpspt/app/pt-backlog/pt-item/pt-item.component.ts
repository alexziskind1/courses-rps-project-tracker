import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RouterExtensions } from 'nativescript-angular/router';

import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';
import { SegmentedBar, SegmentedBarItem } from 'ui/segmented-bar';
import { ConfirmOptions, confirm } from 'ui/dialogs';

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
    private _selectedItemDetailScreenIndex: number = 0;

    private _itemDetailScreens = [
        { title: 'Details', routePath: 'pt-item-details' },
        { title: 'Tasks', routePath: 'pt-item-tasks' },
        { title: 'Chitchat', routePath: 'pt-item-chitchat' }
    ];
    public myNavItems: Array<SegmentedBarItem> = [];

    constructor(
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions,
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
        this.route.params
            .switchMap((params: Params) => this.backlogService.getItem(params['id']))
            .subscribe((item: IPTItem) => {
                this.item = item;
            });
    }

    public onNavBackTap() {
        this.routerExtensions.backToPreviousPage();
    }

    public selectedItemDetailScreenIndexChanged(segBar: SegmentedBar) {
        let newIndex = segBar.selectedIndex;
        if (this._selectedItemDetailScreenIndex !== newIndex && newIndex >= 0 && newIndex < this._itemDetailScreens.length) {
            this._selectedItemDetailScreenIndex = newIndex;
            let path = this._itemDetailScreens[this._selectedItemDetailScreenIndex].routePath;
            // Navigate with relative link
            this.routerExtensions.navigate([path], { relativeTo: this.route });
        }
    }

    public onDelete() {
        var options: ConfirmOptions = {
            title: "Delete Item",
            message: "Are you sure you want to delete this item?",
            okButtonText: "Yes",
            cancelButtonText: "Cancel"
        };

        confirm('Are you sure you want to delete this item?')
            .then((result: boolean) => {
                // result can be true/false/undefined
                if (result) {
                    this.backlogService.deleteItem(this.item);
                    setTimeout(() => {
                        this.routerExtensions.backToPreviousPage();
                    }, 100);
                }
            });
    }
}
