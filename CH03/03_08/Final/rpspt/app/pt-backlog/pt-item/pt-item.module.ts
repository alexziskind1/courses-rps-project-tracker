import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/platform';

import { PTItemComponent } from './pt-item.component';

@NgModule({
    imports: [
        NativeScriptModule
    ],
    exports: [
        PTItemComponent
    ],
    declarations: [
        PTItemComponent
    ],
    providers: [],
})
export class PTItemModule { }
