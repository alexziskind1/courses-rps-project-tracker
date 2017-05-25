//angular imports
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params, UrlSegment } from '@angular/router';

//nativescript imports
import { RouterExtensions } from 'nativescript-angular/router';
import { TextView } from 'ui/text-view';
import { ScrollView } from 'ui/scroll-view';
import { isIOS, isAndroid } from 'platform';

//3rd party imports
import 'rxjs/add/operator/switchMap';

//app imports
import { slideInDownAnimation, slideInAnimations } from '../../shared/animations';
import { BacklogService, AuthenticationService, UserService } from '../../services';
import { PTDomain } from '../../typings/domain';
import IPTItem = PTDomain.IPTItem;
import ITask = PTDomain.ITask;
import INewComment = PTDomain.INewComment;


@Component({
    moduleId: module.id,
    selector: 'pt-item-chitchat',
    templateUrl: 'pt-item-chitchat.component.html',
    styleUrls: ['pt-item-chitchat.component.css'],
    animations: slideInAnimations
})
export class PTItemChitchatComponent implements OnInit {

    private selectedViewIndex = 0;
    public item: IPTItem;
    public newCommentText: string = '';

    public get comments() {
        return this.item.comments;
    }

    public get animationState() {
        return this.selectedViewIndex === 2 ? 'off' : 'on';
    }

    public get currentUserAvatar() {
        return this.authService.currentUser.avatar;
    }

    constructor(private route: ActivatedRoute,
        private router: Router,
        private routerExtensions: RouterExtensions,
        private backlogService: BacklogService,
        private authService: AuthenticationService,
        private userService: UserService) { }


    public ngOnInit() {
        this.route.parent.params
            .switchMap((params: Params) => this.backlogService.getItem(params['id']))
            .subscribe((item: IPTItem) => this.item = item);
    }

    public addTapped(newCommentTV: TextView) {
        let newTitle = this.newCommentText.trim();
        if (newTitle.length === 0)
            return;
        let newComment: INewComment = {
            title: newTitle,
            userId: this.authService.currentUser.id
        };
        this.backlogService.addComment(this.item, newComment);
        this.newCommentText = '';
        newCommentTV.dismissSoftInput();
    }

    public mathCeil(num: number) {
        return Math.ceil(num);
    }

    public commentHeight(commentTitle: string) {
        let lineHeight = isIOS ? 20 : 30;
        let numlines = Math.ceil(commentTitle.length / 22);
        return ((numlines < 2 ? 2 : numlines) * lineHeight) + 10;
    }

}
