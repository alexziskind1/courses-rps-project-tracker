//angular imports
import { Injectable, OnInit, NgZone } from '@angular/core';
import { Observable, Observer, BehaviorSubject } from "rxjs/Rx";

//3rd party imports
import * as _ from 'lodash';

//app imports
import { AuthenticationService, UserService } from './';
import { MockDataService } from './mock-data.service';
import { FilterState } from '../shared/filter-state.model';
import { PTDomain } from '../typings/domain';
import { ItemTypeEnum, PriorityEnum, StatusEnum } from '../shared/static-data';
import IUser = PTDomain.IUser;
import IPTItem = PTDomain.IPTItem;
import ITask = PTDomain.ITask;
import IComment = PTDomain.IComment;
import INewItem = PTDomain.INewItem;
import INewTask = PTDomain.INewTask;
import INewComment = PTDomain.INewComment;


@Injectable()
export class BacklogService {

    private _genetatedItems: Array<IPTItem> = [];
    private _itemsObs: Observable<Array<IPTItem>>;
    private _itemsSubj: BehaviorSubject<Array<IPTItem>>;
    private _observer: Observer<Array<IPTItem>>;
    private _filterState: FilterState;
    private _allItems: Array<IPTItem> = [];
    private _filteredItems: Array<IPTItem> = [];

    public get itemsSubj(): BehaviorSubject<Array<IPTItem>> {
        return this._itemsSubj;
    }

    public get items(): Array<IPTItem> {
        return this._genetatedItems;
    }

    public get ptItemsObs(): Observable<Array<IPTItem>> {
        return this._itemsObs;
    }

    constructor(private mockDataService: MockDataService,
        private userService: UserService,
        private authService: AuthenticationService,
        private zone: NgZone) {
        this._genetatedItems = this.mockDataService.generatePTItems(this.userService.users);

        this._itemsSubj = new BehaviorSubject([]);
        _.forEach(this._genetatedItems, (item) => {
            this._allItems.push(item);
        });

        this._filterState = { filterViewIndex: 0 };

        this.publishUpdates();


        this._itemsObs = Observable.create((observer: Observer<Array<IPTItem>>) => {
            this._observer = observer;
            observer.next(this._allItems);
        });
    }


    public getItem(id: string) {
        let selectedItem = _.find(this._allItems, i => i.id == id);
        return Promise.resolve(selectedItem);
    }

    public addNewPTItem(newItem: INewItem, assignee: IUser) {
        let item: IPTItem = {
            id: _.uniqueId(),
            title: newItem.title,
            description: newItem.description,
            type: newItem.type,
            estimate: 0,
            priority: PriorityEnum.Medium,
            status: StatusEnum.Open,
            assignee: assignee,
            tasks: [],
            comments: [],
            dateCreated: new Date(),
            dateModified: new Date()
        };
        this.addItem(item);
    }

    public addItem(item: IPTItem) {
        this._allItems.unshift(item);
        this._observer.next(this._allItems);
        this.publishUpdates();
    }

    public deleteItem(item: IPTItem) {
        _.remove(this._allItems, (ptitem) => ptitem.id === item.id);
        this.publishUpdates();
    }

    public toggleTask(item: IPTItem, task: ITask) {
        var index = _.indexOf(item.tasks, task);
        task.completed = !task.completed;
        item.tasks.splice(index, 1, task);
    }

    public updateTask(item: IPTItem, task: ITask, newTitle: string) {
        var index = _.indexOf(item.tasks, task);
        task.title = newTitle;
        item.tasks.splice(index, 1, task);
    }

    public addTask(item: IPTItem, newTask: INewTask) {
        var task: ITask = {
            id: _.uniqueId(),
            title: newTask.title,
            completed: newTask.completed,
            dateCreated: new Date(),
            dateModified: new Date()
        };
        item.tasks.unshift(task);
    }

    public addComment(item: IPTItem, newComment: INewComment) {
        var comment: IComment = {
            id: _.uniqueId(),
            title: newComment.title,
            user: _.find(this.userService.users, (user) => user.id === newComment.userId),
            dateCreated: new Date(),
            dateModified: new Date()
        };
        item.comments.unshift(comment);
    }

    public updatePtItem(item: IPTItem) {
        this.publishUpdates();
    }

    public updatePtItemEstimate(item: IPTItem, incdec: boolean) {
        if (item.estimate === 0 && !incdec) return;
        item.estimate = incdec ? item.estimate + 1 : item.estimate - 1;
        this.publishUpdates();
    }

    public updatePtItemPriority(item: IPTItem, incdec: boolean) {
        if (PriorityEnum.isMax(item.priority) && incdec) return;
        if (PriorityEnum.isMin(item.priority) && !incdec) return;

        if (incdec) {
            item.priority = PriorityEnum.nextPriority(item.priority);
        } else {
            item.priority = PriorityEnum.previousPriority(item.priority);
        }
        this.publishUpdates();
    }

    public updatePtItemType(item: IPTItem, newType: ItemTypeEnum) {
        item.type = newType;
        this.publishUpdates();
    }

    public updatePtItemAssignee(item: IPTItem, user: IUser) {
        item.assignee = user;
        this.publishUpdates();
    }

    public updatePtItemStatus(item: IPTItem, newStatusStr: string) {
        let newStatus = StatusEnum[newStatusStr];
        if (item.status != newStatus) {
            item.status = newStatus;
            this.publishUpdates();
        }
    }

    public switchAssignee(item: IPTItem) {
        let ranUser = _.sample<IUser>(this.userService.users);
        item.assignee = ranUser;
        this.publishUpdates();
    }

    public filter(filterState: FilterState) {
        this._filterState = filterState;
        this.publishUpdates();
    }

    private publishUpdates() {
        var filteredItems = [];
        switch (this._filterState.filterViewIndex) {
            case 0:
                filteredItems = this._allItems.filter(i => i.assignee.id === this.authService.currentUser.id);
                break;
            case 1:
                filteredItems = this._allItems.filter(i => i.status === StatusEnum.Open || i.status === StatusEnum.ReOpened);
                break;
            case 2:
                filteredItems = this._allItems.filter(i => i.status === StatusEnum.Closed);
                break;
            default:
                filteredItems = this._allItems;
        }

        // Make sure all updates are published inside NgZone so that change detection is triggered if needed
        this.zone.run(() => {
            // must emit a *new* value (immutability!)
            this.itemsSubj.next([...filteredItems]);
        });
    }
}