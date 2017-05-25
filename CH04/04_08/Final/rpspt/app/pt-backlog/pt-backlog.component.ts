import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-telerik-ui/sidedrawer/angular';

import { SideDrawerLocation } from 'nativescript-telerik-ui/sidedrawer';

@Component({
    moduleId: module.id,
    selector: 'pt-backlog',
    templateUrl: 'pt-backlog.component.html',
    styles: [`
        .side-drawer-panel {
            background-color: #333333;
        }
    `]
})

export class PtBacklogComponent implements OnInit {
    private _drawer: SideDrawerType;
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

    constructor() { }

    ngOnInit() { }

    public ngAfterViewInit() {
        this._drawer = this.drawerComponent.sideDrawer;
        this._drawer.drawerLocation = SideDrawerLocation.Right;
    }

    public showSlideout() {
        this._drawer.showDrawer();
    }

    public logoutTap() {
        alert('LOGOUT');
    }
}