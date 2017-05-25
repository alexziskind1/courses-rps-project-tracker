import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { UserService } from './services/user.service';
import { AuthenticationService } from './services/auth.service';
import { PtBacklogModule } from './pt-backlog/pt-backlog.module';
import { LoginModule } from './pt-login/pt-login.module';

import { setStatusBarColors } from "./shared/status-bar-util";

setStatusBarColors();

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        PtBacklogModule,
        LoginModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        UserService,
        AuthenticationService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
