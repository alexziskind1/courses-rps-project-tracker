"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pt_backlog_component_1 = require("./pt-backlog.component");
var pt_item_component_1 = require("./pt-item/pt-item.component");
var pt_item_details_component_1 = require("./pt-item/pt-item-details.component");
var pt_item_tasks_component_1 = require("./pt-item/pt-item-tasks.component");
var pt_item_chitchat_component_1 = require("./pt-item/pt-item-chitchat.component");
var auth_guard_service_1 = require("../services/auth-guard.service");
var backlogRoutes = [
    {
        path: "pt-backlog",
        component: pt_backlog_component_1.PTBacklogComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    },
    {
        path: "pt-item/:id",
        component: pt_item_component_1.PTItemComponent,
        children: [
            {
                path: "",
                redirectTo: "pt-item-details",
                pathMatch: "full"
            },
            {
                path: "pt-item-details",
                component: pt_item_details_component_1.PTItemDetailsComponent
            },
            {
                path: "pt-item-tasks",
                component: pt_item_tasks_component_1.PTItemTasksComponent
            },
            {
                path: "pt-item-chitchat",
                component: pt_item_chitchat_component_1.PTItemChitchatComponent
            }
        ]
    }
];
var BacklogRoutingModule = (function () {
    function BacklogRoutingModule() {
    }
    return BacklogRoutingModule;
}());
BacklogRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(backlogRoutes)],
        exports: [router_1.RouterModule]
    })
], BacklogRoutingModule);
exports.BacklogRoutingModule = BacklogRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHQtYmFja2xvZy5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUM7QUFDekMsMENBQXVEO0FBRXZELCtEQUE0RDtBQUM1RCxpRUFBOEQ7QUFFOUQsaUZBQTZFO0FBQzdFLDZFQUF5RTtBQUN6RSxtRkFBK0U7QUFFL0UscUVBQTJEO0FBRTNELElBQU0sYUFBYSxHQUFXO0lBQzFCO1FBQ0ksSUFBSSxFQUFFLFlBQVk7UUFDbEIsU0FBUyxFQUFFLHlDQUFrQjtRQUM3QixXQUFXLEVBQUUsQ0FBQyw4QkFBUyxDQUFDO0tBQzNCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsYUFBYTtRQUNuQixTQUFTLEVBQUUsbUNBQWU7UUFDMUIsUUFBUSxFQUFFO1lBQ047Z0JBQ0ksSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsVUFBVSxFQUFFLGlCQUFpQjtnQkFDN0IsU0FBUyxFQUFFLE1BQU07YUFDcEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixTQUFTLEVBQUUsa0RBQXNCO2FBQ3BDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLFNBQVMsRUFBRSw4Q0FBb0I7YUFDbEM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixTQUFTLEVBQUUsb0RBQXVCO2FBQ3JDO1NBQ0o7S0FDSjtDQUNKLENBQUM7QUFPRixJQUFhLG9CQUFvQjtJQUFqQztJQUFvQyxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQUFDLEFBQXJDLElBQXFDO0FBQXhCLG9CQUFvQjtJQUpoQyxlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvQyxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxvQkFBb0IsQ0FBSTtBQUF4QixvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFBUQmFja2xvZ0NvbXBvbmVudCB9IGZyb20gXCIuL3B0LWJhY2tsb2cuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQVEl0ZW1Db21wb25lbnQgfSBmcm9tIFwiLi9wdC1pdGVtL3B0LWl0ZW0uY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFBUSXRlbURldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi9wdC1pdGVtL3B0LWl0ZW0tZGV0YWlscy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBUSXRlbVRhc2tzQ29tcG9uZW50IH0gZnJvbSBcIi4vcHQtaXRlbS9wdC1pdGVtLXRhc2tzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUFRJdGVtQ2hpdGNoYXRDb21wb25lbnQgfSBmcm9tIFwiLi9wdC1pdGVtL3B0LWl0ZW0tY2hpdGNoYXQuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGgtZ3VhcmQuc2VydmljZSc7XG5cbmNvbnN0IGJhY2tsb2dSb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6IFwicHQtYmFja2xvZ1wiLFxuICAgICAgICBjb21wb25lbnQ6IFBUQmFja2xvZ0NvbXBvbmVudCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwicHQtaXRlbS86aWRcIixcbiAgICAgICAgY29tcG9uZW50OiBQVEl0ZW1Db21wb25lbnQsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogXCJcIixcbiAgICAgICAgICAgICAgICByZWRpcmVjdFRvOiBcInB0LWl0ZW0tZGV0YWlsc1wiLFxuICAgICAgICAgICAgICAgIHBhdGhNYXRjaDogXCJmdWxsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogXCJwdC1pdGVtLWRldGFpbHNcIixcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFBUSXRlbURldGFpbHNDb21wb25lbnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogXCJwdC1pdGVtLXRhc2tzXCIsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBQVEl0ZW1UYXNrc0NvbXBvbmVudFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBcInB0LWl0ZW0tY2hpdGNoYXRcIixcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFBUSXRlbUNoaXRjaGF0Q29tcG9uZW50XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChiYWNrbG9nUm91dGVzKV0sXG4gICAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQmFja2xvZ1JvdXRpbmdNb2R1bGUgeyB9XG4iXX0=