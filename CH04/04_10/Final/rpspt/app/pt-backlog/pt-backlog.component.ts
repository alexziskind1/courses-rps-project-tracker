import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-telerik-ui/sidedrawer/angular';

import { SideDrawerLocation } from 'nativescript-telerik-ui/sidedrawer';

@Component({
    moduleId: module.id,
    selector: 'pt-backlog',
    templateUrl: 'pt-backlog.component.html',
    styleUrls: ['pt-backlog.component.css']
})

export class PtBacklogComponent implements OnInit {
    private _drawer: SideDrawerType;
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

    public selectedViewIndex: number;

    constructor() {
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

    public logoutTap() {
        alert('LOGOUT');
    }
}