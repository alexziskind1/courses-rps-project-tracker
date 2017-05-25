//angular imports
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'estimateDisplay'
})
export class EstimateDisplayPipe implements PipeTransform {
    transform(value: number): string {
        if (value === 1) {
            return '1 point';
        } else {
            return value + ' points';
        }
    }
}