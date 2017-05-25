import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';

import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-telerik-ui/sidedrawer/angular';
import { SideDrawerLocation } from 'nativescript-telerik-ui/sidedrawer';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';

import { BacklogService } from '../services';
import { AddItemModalComponent } from "./shared/add-item-modal.component";
import { PTDomain } from '../typings/domain';
import INewItem = PTDomain.INewItem;


@Component({
    moduleId: module.id,
    selector: 'pt-backlog',
    templateUrl: 'pt-backlog.component.html',
    styleUrls: ['pt-backlog.component.css']
})
export class PTBacklogComponent implements OnInit {
    private _drawer: SideDrawerType;
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

    public selectedViewIndex: number;

    public myTitleProperty: string = 'My Backlog';

    constructor(private backlogService: BacklogService,
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef) {
        this.selectedViewIndex = 1;
    }

    ngOnInit() { }

    public ngAfterViewInit() {
        this._drawer = this.drawerComponent.sideDrawer;
        this._drawer.drawerLocation = SideDrawerLocation.Right;
    }

    public showSlideout() {
        this._drawer.showDrawer();
    }

    public selectFilteredView(itemFilterIndex: number, pageTitle: string) {
        this.selectedViewIndex = itemFilterIndex;
    }

    public showAddItemModal() {
        this.myTitleProperty = 'Adding';
        /*
        const options: ModalDialogOptions = {
            context: { promptMsg: "Add item" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modalService.showModal(AddItemModalComponent, options).then((newItem: INewItem) => {
            if (newItem != null) {
                //this.backlogService.addNewPTItem(newItem, null);
            }
        });*/
    }

    public logoutTap() {
        alert('LOGOUT');
    }
}