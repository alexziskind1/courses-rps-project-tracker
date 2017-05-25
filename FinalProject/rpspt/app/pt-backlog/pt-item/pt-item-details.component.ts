//angular imports
import { Component, OnInit, HostBinding, ViewChild, ElementRef, ViewContainerRef } from "@angular/core";
import { Router, ActivatedRoute, Params, UrlSegment } from '@angular/router';

//nativescript imports
import { RouterExtensions } from 'nativescript-angular/router';
import { SegmentedBar } from 'ui/segmented-bar';
import { View } from 'ui/core/view';
import { Color } from 'color';
import { confirm, action, ActionOptions, ConfirmOptions } from 'ui/dialogs';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';

//3rd party imports
import 'rxjs/add/operator/switchMap';

//app imports
import { ItemTypePickerModalComponent } from "../shared/item-type-picker-modal.component";
import { UserPickerModalComponent } from "../shared/user-picker-modal.component";
import { slideInDownAnimation, slideInAnimations } from '../../shared/animations';
import { BacklogService, AuthenticationService } from '../../services';
import { ItemTypeEnum, PriorityEnum, StatusEnum } from '../../shared/static-data';
import { PTDomain } from '../../typings/domain';
import IPTItem = PTDomain.IPTItem;
import IUser = PTDomain.IUser;


@Component({
    moduleId: module.id,
    selector: 'pt-item-details',
    templateUrl: 'pt-item-details.component.html',
    animations: slideInAnimations
})
export class PTItemDetailsComponent {

    @ViewChild('itemTypeRow') itemTypeRow: ElementRef;
    @ViewChild('itemTypeName') itemTypeName: ElementRef;

    @ViewChild('itemAssigneeRow') itemAssigneeRow: ElementRef;
    @ViewChild('itemAssigneeName') itemAssigneeName: ElementRef;

    public item: IPTItem;
    private selectedViewIndex = 0;

    public get animationState() {
        return this.selectedViewIndex === 2 ? 'off' : 'on';
    }

    public formFieldGridCols = '90, *, 90';



    public get priorityDecEnabled() {
        return !PriorityEnum.isMin(this.item.priority);
    }

    public get priorityIncEnabled() {
        return !PriorityEnum.isMax(this.item.priority);
    }

    constructor(private route: ActivatedRoute,
        private router: Router,
        private routerExtensions: RouterExtensions,
        private backlogService: BacklogService,
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef) { }


    public ngOnInit() {
        this.route.parent.params
            .switchMap((params: Params) => this.backlogService.getItem(params['id']))
            .subscribe((item: IPTItem) => {
                this.item = item;
            });
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
        this.backlogService.updatePtItemEstimate(this.item, incdec);
    }

    public priorityIncDecTapped(incdec: boolean) {
        this.backlogService.updatePtItemPriority(this.item, incdec);
    }

    public showTypeModal() {
        const options: ModalDialogOptions = {
            context: { itemTitle: this.item.title, promptMsg: "Select item type" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modalService.showModal(ItemTypePickerModalComponent, options).then((res: ItemTypeEnum) => {
            if (res) {
                this.backlogService.updatePtItemType(this.item, res);
            }
        });
    }

    public showStatusOptions() {
        let statusKeys = [];
        let statuses = [];
        for (var enumMember in StatusEnum) {
            var isValueProperty = parseInt(enumMember, 10) >= 0;
            if (isValueProperty) {
                statuses.push(StatusEnum[enumMember]);
                statusKeys.push({ key: enumMember, value: StatusEnum[enumMember] });
            }
        }

        var options: ActionOptions = {
            title: 'Select Status',
            cancelButtonText: 'Cancel',
            actions: statuses
        };

        action(options).then((result) => {
            if (result != 'Cancel') {
                this.backlogService.updatePtItemStatus(this.item, result);
            }
        });
    }

    public showAssigneeModal() {
        const options: ModalDialogOptions = {
            context: { itemTitle: this.item.title, promptMsg: "Select assignee" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modalService.showModal(UserPickerModalComponent, options).then((res: IUser) => {
            if (res) {
                this.backlogService.updatePtItemAssignee(this.item, res);
            }
        });
    }
}