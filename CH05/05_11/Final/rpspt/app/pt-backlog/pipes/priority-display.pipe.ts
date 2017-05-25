//angular imports
import { Pipe, PipeTransform } from '@angular/core';


//app imports
import { PriorityEnum } from '../../shared/static-data';

@Pipe({
    name: 'priorityDisplay'
})
export class PriorityDisplayPipe implements PipeTransform {
    transform(value: PriorityEnum): string {
        return PriorityEnum[value];
    }
}