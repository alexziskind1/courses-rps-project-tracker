import * as enums from '../shared/static-data';

declare namespace PTDomain {

    interface ILoginModel {
        username: string;
        password: string;
    }

    interface IUser {
        id: string;
        fullName: string;
        avatar: string;
    }

    interface IPTObjectBase {
        id: string;
        title: string;
        dateCreated: Date;
        dateModified: Date;
    }

    interface IPTItem extends IPTObjectBase {
        description?: string;
        type: enums.ItemTypeEnum;
        estimate: number;
        priority: enums.PriorityEnum;
        status: enums.StatusEnum;
        assignee: IUser;
        tasks: Array<ITask>;
        comments: Array<IComment>;
    }

    interface ITask extends IPTObjectBase {
        completed: boolean;
    }

    interface IComment extends IPTObjectBase {
        //userId: string;
        user: IUser;
    }

    interface INewTask {
        title: string;
        completed: boolean;
    }

    interface INewComment {
        title: string;
        userId: string;
    }

    interface INewItem {
        title: string;
        description?: string;
        type: enums.ItemTypeEnum;
    }

}