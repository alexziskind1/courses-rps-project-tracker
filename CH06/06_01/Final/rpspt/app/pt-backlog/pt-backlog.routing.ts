import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PTBacklogComponent } from './pt-backlog.component';
import { PTItemComponent } from './pt-item/pt-item.component';

const backlogRoutes: Routes = [
    {
        path: 'pt-backlog',
        component: PTBacklogComponent
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
