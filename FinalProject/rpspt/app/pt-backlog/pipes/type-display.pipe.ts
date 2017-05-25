//angular imports
import { Pipe, PipeTransform } from '@angular/core';


//app imports
import { ItemTypeEnum } from '../../shared/static-data';

@Pipe({
    name: 'typeDisplay'
})
export class TypeDisplayPipe implements PipeTransform {
    transform(value: number): string {
        return ItemTypeEnum[value];
    }
}