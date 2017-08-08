//angular imports
import { NgModule } from "@angular/core";

//nativescript imports
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

//app imports
import {
    TypeDisplayPipe,
    EstimateDisplayPipe,
    PriorityClassPipe,
    PriorityDisplayPipe,
    TypeImagePipe,
    StatusDisplayPipe
} from './';


@NgModule({
    imports: [
        NativeScriptModule
    ],
    declarations: [
        TypeDisplayPipe,
        TypeImagePipe,
        PriorityDisplayPipe,
        StatusDisplayPipe,
        PriorityClassPipe,
        EstimateDisplayPipe
    ],
    exports: [
        TypeDisplayPipe,
        TypeImagePipe,
        PriorityDisplayPipe,
        StatusDisplayPipe,
        PriorityClassPipe,
        EstimateDisplayPipe
    ]
})
export class PipesModule { }
