import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pt-login.component';

const loginRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(loginRoutes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
