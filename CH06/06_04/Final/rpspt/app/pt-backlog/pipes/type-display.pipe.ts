import { Pipe, PipeTransform } from '@angular/core';

import { ItemTypeEnum } from '../../shared/static-data';

@Pipe({
    name: 'typeDisplay'
})

export class TypeDisplayPipe implements PipeTransform {
    transform(value: number): any {
        return ItemTypeEnum[value];
    }
}