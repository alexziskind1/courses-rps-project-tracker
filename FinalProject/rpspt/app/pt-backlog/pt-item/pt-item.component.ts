//angular imports
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params, UrlSegment } from '@angular/router';

//nativescript imports
import { RouterExtensions } from 'nativescript-angular/router';
import { SegmentedBar, SegmentedBarItem } from 'ui/segmented-bar';
import { confirm, action, ActionOptions, ConfirmOptions } from 'ui/dialogs';

//3rd party imports
import 'rxjs/add/operator/switchMap';

//app imports
import { BacklogService, AuthenticationService } from '../../services';
import { ItemTypeEnum } from '../../shared/static-data';
import { PTDomain } from '../../typings/domain';
import IPTItem = PTDomain.IPTItem;


@Component({
    moduleId: module.id,
    selector: 'pt-item',
    templateUrl: 'pt-item.component.html',
    styleUrls: ['pt-item.component.css']
})
export class PTItemComponent implements OnInit {

    private _itemDetailScreens = [
        { title: 'Details', routePath: 'pt-item-details' },
        { title: 'Tasks', routePath: 'pt-item-tasks' },
        { title: 'Chitchat', routePath: 'pt-item-chitchat' }
    ];
    public myNavItems: Array<SegmentedBarItem> = [];
    private _selectedItemDetailScreenIndex: number = 0;
    public item: IPTItem;

    public get itemTitle() {
        return this.item ? this.item.title : '';
    }

    public get typeImg() {
        return this.item ? ItemTypeEnum.getImage(this.item.type) : '';
    }



    private _selectedIndex;
    public set selectedIndex(val) {
        this._selectedIndex = val;
    }
    public get selectedIndex() {
        return this._selectedIndex;
    }

    constructor(private route: ActivatedRoute,
        private router: Router,
        private routerExtensions: RouterExtensions,
        private backlogService: BacklogService) {
        for (let i = 0; i < this._itemDetailScreens.length; i++) {
            let tmpSegmentedBarItem: SegmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
            tmpSegmentedBarItem.title = this._itemDetailScreens[i].title;
            this.myNavItems.push(tmpSegmentedBarItem);
        }
    }

    public ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.backlogService.getItem(params['id']))
            .subscribe((item: IPTItem) => this.item = item);
    }

    public onNavBackTap() {
        //TODO check to see if this is redundant on iOS
        this.routerExtensions.backToPreviousPage();
    }

    public onActionMenuTap() {
        var options: ActionOptions = {
            title: 'Item Actions',
            cancelButtonText: 'Cancel',
            actions: ['Delete']
        };

        action(options).then((result) => {
            if (result === 'Delete') {
                this.onDelete();
            }
        });
    }

    public onDelete() {
        //Simple approach
        //if (confirm('Are you sure you want to delete this item?')) {

        //}

        //Better approach with promise
        var options: ConfirmOptions = {
            title: "Delete Item",
            message: "Are you sure you want to delete this item?",
            okButtonText: "Yes",
            cancelButtonText: "Cancel"
        };
        //confirm without options, with promise
        confirm('Are you sure you want to delete this item?')
            //confirm with options, with promise
            //confirm(options)
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

    public selectedItemDetailScreenIndexChanged(segBar: SegmentedBar) {
        let newIndex = segBar.selectedIndex;
        if (this._selectedItemDetailScreenIndex !== newIndex && newIndex >= 0 && newIndex < this._itemDetailScreens.length) {
            this._selectedItemDetailScreenIndex = newIndex;
            let path = this._itemDetailScreens[this._selectedItemDetailScreenIndex].routePath;
            // Navigate with relative link
            this.routerExtensions.navigate([path], { relativeTo: this.route });
        }


    }


}

