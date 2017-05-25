import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PTBacklogComponent } from './pt-backlog.component';
import { PTItemComponent } from './pt-item/pt-item.component';
import { AuthGuard } from '../services/auth-guard.service';

const backlogRoutes: Routes = [
    {
        path: 'pt-backlog',
        component: PTBacklogComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'pt-item/:id',
        component: PTItemComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(backlogRoutes)],
    exports: [RouterModule]
})
export class BacklogRoutingModule { }
