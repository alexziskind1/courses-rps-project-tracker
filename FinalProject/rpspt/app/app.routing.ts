import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

//app imports
import { AuthGuard } from "./services/auth-guard.service";

export const authProviders = [
    AuthGuard
];

const routes: Routes = [
    { path: '', redirectTo: '/pt-backlog', pathMatch: 'full' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }