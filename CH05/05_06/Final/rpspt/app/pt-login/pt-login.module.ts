import { NgModule } from '@angular/core';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { LoginComponent } from './pt-login.component';

@NgModule({
    imports: [
        NativeScriptFormsModule
    ],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }
