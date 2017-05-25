import { Injectable } from '@angular/core';

import * as faker from 'faker';
import * as _ from 'lodash';

import * as constModule from '../shared/constants';
import { ItemTypeEnum, PriorityEnum, StatusEnum } from '../shared/static-data';

import { PTDomain } from '../typings/domain';
import IUser = PTDomain.IUser;
import IPTItem = PTDomain.IPTItem;
import ITask = PTDomain.ITask;
import IComment = PTDomain.IComment;

@Injectable()
export class MockDataService {


    constructor() { }
}