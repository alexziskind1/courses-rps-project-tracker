import { NgModule } from '@angular/core';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { LoginRoutingModule } from './pt-login.routing';
import { LoginComponent } from './pt-login.component';

@NgModule({
    imports: [
        NativeScriptFormsModule,
        LoginRoutingModule
    ],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }
