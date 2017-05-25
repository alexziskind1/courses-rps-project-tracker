import { Pipe, PipeTransform } from '@angular/core';

import { ItemTypeEnum } from '../../shared/static-data';

@Pipe({
    name: 'typeImage'
})

export class TypeImagePipe implements PipeTransform {
    transform(value: number): any {
        return ItemTypeEnum.getImage(value);
    }
}