import { NgModule } from '@angular/core';

import { NativeScriptModule } from "nativescript-angular/platform";

import { PTItemComponent } from './pt-item.component';
import { ItemTypePickerModalComponent } from '../shared/item-type-picker-modal.component';

@NgModule({
    imports: [NativeScriptModule],
    exports: [PTItemComponent],
    declarations: [
        PTItemComponent,
        ItemTypePickerModalComponent
    ],
    providers: [],
    entryComponents: [
        ItemTypePickerModalComponent
    ]
})
export class PTItemModule { }
