import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { PTBacklogComponent } from "./pt-backlog.component";
import { PTItemComponent } from "./pt-item/pt-item.component";

import { PTItemDetailsComponent } from "./pt-item/pt-item-details.component";
import { PTItemTasksComponent } from "./pt-item/pt-item-tasks.component";
import { PTItemChitchatComponent } from "./pt-item/pt-item-chitchat.component";

import { AuthGuard } from '../services/auth-guard.service';

const backlogRoutes: Routes = [
    {
        path: "pt-backlog",
        component: PTBacklogComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "pt-item/:id",
        component: PTItemComponent,
        children: [
            {
                path: "",
                redirectTo: "pt-item-details",
                pathMatch: "full"
            },
            {
                path: "pt-item-details",
                component: PTItemDetailsComponent
            },
            {
                path: "pt-item-tasks",
                component: PTItemTasksComponent
            },
            {
                path: "pt-item-chitchat",
                component: PTItemChitchatComponent
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(backlogRoutes)],
    exports: [RouterModule]
})
export class BacklogRoutingModule { }
