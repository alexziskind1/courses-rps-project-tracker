//angular imports
import { Component, OnInit } from "@angular/core";

//nativescript imports
import { Page } from 'ui/page';
import { ModalDialogParams, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
import { ItemEventData, ListView } from 'ui/list-view';

//app imports
import { UserService } from '../../services';
import { PTDomain } from '../../typings/domain';
import IUser = PTDomain.IUser;

@Component({
    moduleId: module.id,
    selector: 'user-picker-modal',
    templateUrl: 'user-picker-modal.component.html'
})
export class UserPickerModalComponent implements OnInit {
    public prompt: string;
    public itemTitle: string;

    constructor(private params: ModalDialogParams, private userService: UserService) { }

    public close(res: string) {
        this.params.closeCallback(res);
    }

    ngOnInit() {
        this.prompt = this.params.context.promptMsg;
        this.itemTitle = this.params.context.itemTitle;
    }


    public listItemTap(args: ItemEventData) {
        let lv = <ListView>args.object;
        let user = <IUser>lv.items[args.index];
        this.params.closeCallback(user);
    }
}