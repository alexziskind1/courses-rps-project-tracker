import { NgModule } from '@angular/core';

import {
    EstimateDisplayPipe,
    PriorityClassPipe,
    PriorityDisplayPipe,
    StatusDisplayPipe,
    TypeDisplayPipe,
    TypeImagePipe
} from './';

@NgModule({
    imports: [],
    declarations: [
        EstimateDisplayPipe,
        PriorityClassPipe,
        PriorityDisplayPipe,
        StatusDisplayPipe,
        TypeDisplayPipe,
        TypeImagePipe
    ],
    exports: [
        EstimateDisplayPipe,
        PriorityClassPipe,
        PriorityDisplayPipe,
        StatusDisplayPipe,
        TypeDisplayPipe,
        TypeImagePipe
    ]
})
export class PipesModule { }
