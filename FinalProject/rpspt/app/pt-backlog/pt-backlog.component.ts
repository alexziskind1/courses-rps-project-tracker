//angular imports
import { Component, AfterViewInit, ViewChild, ViewContainerRef, ChangeDetectionStrategy } from "@angular/core";

//nativescript imports
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-telerik-ui/sidedrawer/angular';
import { DrawerTransitionBase, SideDrawerLocation, SlideInOnTopTransition } from 'nativescript-telerik-ui/sidedrawer';
import { RouterExtensions } from 'nativescript-angular/router';

//app imports
import { BacklogService, AuthenticationService } from '../services';
import { AddItemModalComponent } from "./shared/add-item-modal.component";
import { PTDomain } from '../typings/domain';
import INewItem = PTDomain.INewItem;


@Component({
    moduleId: module.id,
    selector: 'pt-backlog',
    templateUrl: 'pt-backlog.component.html',
    styleUrls: ['pt-backlog.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PTBacklogComponent implements AfterViewInit {

    private _sideDrawerTransition: DrawerTransitionBase = new SlideInOnTopTransition();
    private _drawer: SideDrawerType;

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

    public selectedViewIndex: number;

    public get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    constructor(private router: RouterExtensions,
        private backlogService: BacklogService,
        private authService: AuthenticationService,
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef) {
        this.selectedViewIndex = 1;
    }

    public ngAfterViewInit() {
        this._drawer = this.drawerComponent.sideDrawer;
        this._drawer.drawerLocation = SideDrawerLocation.Right;
    }

    public showSlideout() {
        this._drawer.showDrawer();
    }

    public selectFilteredView(itemFilterIndex: number, pageTitle: string) {
        this.selectedViewIndex = itemFilterIndex;
        this._drawer.closeDrawer();
    }

    public showAddItemModal() {
        const options: ModalDialogOptions = {
            context: { promptMsg: "Add item" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modalService.showModal(AddItemModalComponent, options).then((newItem: INewItem) => {
            if (newItem != null) {
                this.backlogService.addNewPTItem(newItem, this.authService.currentUser);
            }
        });
    }

    public logoutTap() {
        this.authService.logout();
        this.router.navigate(["/login"], { clearHistory: true });
    }
}

