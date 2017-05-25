import { NgModule } from '@angular/core';

import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { PTItemComponent } from './pt-item.component';
import { PTItemDetailsComponent } from './pt-item-details.component';
import { ItemTypePickerModalComponent } from '../shared/item-type-picker-modal.component';
import { IncDecComponent } from '../shared/inc-dec.component';


@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule
    ],
    exports: [PTItemComponent],
    declarations: [
        PTItemComponent,
        PTItemDetailsComponent,
        ItemTypePickerModalComponent,
        IncDecComponent
    ],
    providers: [],
    entryComponents: [
        ItemTypePickerModalComponent
    ]
})
export class PTItemModule { }
