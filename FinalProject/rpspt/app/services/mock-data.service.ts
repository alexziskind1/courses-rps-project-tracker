//angular imports
import { Injectable } from '@angular/core';

//nativescript imports
import * as fileSystemModule from 'file-system';

//3rd party imports
import * as faker from 'faker';
import * as _ from 'lodash';

//app imports
import * as constModule from '../shared/constants';
import { ItemTypeEnum, PriorityEnum, StatusEnum } from '../shared/static-data';

import { PTDomain } from '../typings/domain';
import IUser = PTDomain.IUser;
import IPTItem = PTDomain.IPTItem;
import ITask = PTDomain.ITask;
import IComment = PTDomain.IComment;

@Injectable()
export class MockDataService {

    public generatePTItems(users: Array<IUser>): Array<IPTItem> {
        let items = _.times(constModule.NUM_PT_ITEMS, () => {
            return this.generatePTItem(users);
        });
        return items;
    }

    public generatePTItem(users: Array<IUser>): IPTItem {
        let date = faker.date.past(1);
        let title = this.toTitleCase(faker.company.bs());

        let typeStr = ItemTypeEnum[_.random(1, 4)];
        let type = ItemTypeEnum[typeStr];

        let priorityStr = PriorityEnum[_.random(1, 4)];
        let priority = PriorityEnum[priorityStr];

        let statusStr = StatusEnum[_.random(1, 4)];
        let status = StatusEnum[statusStr];

        let ptItem: IPTItem = {
            id: faker.random.uuid(),
            title: title,
            dateCreated: date,
            dateModified: date,
            type: type,
            estimate: _.random(1, 24),
            priority: priority,
            status: status,
            assignee: _.sample(users),
            tasks: this.generateTasks(),
            comments: this.generateComments(users)
        };

        return ptItem;
    }

    public generateTasks(): Array<ITask> {
        let numTasks = _.random(5, 20);
        let tasks = _.times(numTasks, () => {
            return this.generateTask();
        });
        return tasks;
    }

    public generateTask(): ITask {
        let date = faker.date.past(1);
        let title = this.toTitleCase(faker.company.bs());
        let task: ITask = {
            id: faker.random.uuid(),
            title: title,
            dateCreated: date,
            dateModified: date,
            completed: faker.random.boolean()
        };
        return task;
    }

    public generateUsers(): Array<IUser> {
        //let avatarsMen = this.getUserAvatars('images/avatars/base64/men.txt');
        //let avatarsWomen = this.getUserAvatars('images/avatars/base64/women.txt');
        let avatarsLi = this.getUserLiUserAvatars('images/avatars/base64/base64.txt');
        let users = _.times(constModule.NUM_USERS, () => {
            //return this.generateUser(avatarsMen, avatarsWomen);
            return this.generateUser(avatarsLi);
        });
        let userMe = this.getMeUser();
        users.unshift(userMe);
        return users;
    }

    public getMeUser(): IUser {
        let avatarMe = this.getUserAvatars('images/avatars/base64/me.txt')[0];

        let userMe: IUser = {
            id: faker.random.uuid(),
            fullName: 'Alex Ziskind',
            avatar: avatarMe
        };
        return userMe;
    }

    public generateUser(avatarsMen: string[], avatarsWomen?: string[]): IUser {
        let genderBool = faker.random.boolean();
        let genderInt = parseInt(genderBool + '');
        let firstName = faker.name.firstName(genderInt);
        let lastName = faker.name.lastName(genderInt);
        var avatar;
        if (avatarsWomen) {
            avatar = genderBool ? _.sample(avatarsMen) : _.sample(avatarsWomen);
        } else {
            avatar = _.sample(avatarsMen);
        }

        let user: IUser = {
            id: faker.random.uuid(),
            fullName: firstName + ' ' + lastName,
            avatar: avatar
        };
        return user;
    }

    public generateComments(users: Array<IUser>): Array<IComment> {
        let numComments = _.random(0, 5);
        let comments = _.times(numComments, () => {
            return this.generateComment(users);
        });
        return comments;
    }

    public generateComment(users: Array<IUser>): IComment {
        let date = faker.date.past(1);
        let commentText = this.toTitleCase(faker.lorem.sentence(20, 40));
        //let commentText = this.toTitleCase(faker.company.bs());

        let comment: IComment = {
            id: faker.random.uuid(),
            title: commentText,
            dateCreated: date,
            dateModified: date,
            user: _.sample(users)
        };
        return comment;
    }

    private getUserAvatars(path) {
        var avatarList: Array<string> = [];
        var currentAppFolder = fileSystemModule.knownFolders.currentApp();
        var menAvatarsFile = currentAppFolder.getFile(path);
        var fileText = menAvatarsFile.readTextSync();

        var lines = fileText.split('\n');
        for (var i = 0; i < lines.length; i++) {
            avatarList.push('data:image/png;base64,' + lines[i]);
        }
        return avatarList;
    }

    private getUserLiUserAvatars(path) {
        var avatarList: Array<string> = [];
        var currentAppFolder = fileSystemModule.knownFolders.currentApp();
        var menAvatarsFile = currentAppFolder.getFile(path);
        var fileText = menAvatarsFile.readTextSync();

        var lines = fileText.split('\n');
        for (var i = 0; i < lines.length; i++) {
            avatarList.push(lines[i]);
        }
        return avatarList;
    }

    private toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    }

    private pickRandomProperty(obj) {
        var result;
        var count = 0;
        for (var prop in obj)
            if (Math.random() < 1 / ++count)
                result = prop;
        return result;
    }
}