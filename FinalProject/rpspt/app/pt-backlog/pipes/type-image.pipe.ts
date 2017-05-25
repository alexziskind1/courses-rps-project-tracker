//angular imports
import { Pipe, PipeTransform } from '@angular/core';


//app imports
import { ItemTypeEnum } from '../../shared/static-data';

@Pipe({
    name: 'typeImage'
})
export class TypeImagePipe implements PipeTransform {
    transform(value: number): string {
        return ItemTypeEnum.getImage(value);
    }
}