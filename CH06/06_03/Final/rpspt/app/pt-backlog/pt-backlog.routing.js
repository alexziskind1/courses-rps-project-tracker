"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pt_backlog_component_1 = require("./pt-backlog.component");
var pt_item_component_1 = require("./pt-item/pt-item.component");
var auth_guard_service_1 = require("../services/auth-guard.service");
var backlogRoutes = [
    {
        path: 'pt-backlog',
        component: pt_backlog_component_1.PTBacklogComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    },
    {
        path: 'pt-item/:id',
        component: pt_item_component_1.PTItemComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHQtYmFja2xvZy5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUM7QUFDekMsMENBQXVEO0FBRXZELCtEQUE0RDtBQUM1RCxpRUFBOEQ7QUFDOUQscUVBQTJEO0FBRTNELElBQU0sYUFBYSxHQUFXO0lBQzFCO1FBQ0ksSUFBSSxFQUFFLFlBQVk7UUFDbEIsU0FBUyxFQUFFLHlDQUFrQjtRQUM3QixXQUFXLEVBQUUsQ0FBQyw4QkFBUyxDQUFDO0tBQzNCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsYUFBYTtRQUNuQixTQUFTLEVBQUUsbUNBQWU7S0FDN0I7Q0FDSixDQUFDO0FBTUYsSUFBYSxvQkFBb0I7SUFBakM7SUFBb0MsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FBQyxBQUFyQyxJQUFxQztBQUF4QixvQkFBb0I7SUFKaEMsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0MsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csb0JBQW9CLENBQUk7QUFBeEIsb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUFRCYWNrbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wdC1iYWNrbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQVEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3B0LWl0ZW0vcHQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aC1ndWFyZC5zZXJ2aWNlJztcblxuY29uc3QgYmFja2xvZ1JvdXRlczogUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJ3B0LWJhY2tsb2cnLFxuICAgICAgICBjb21wb25lbnQ6IFBUQmFja2xvZ0NvbXBvbmVudCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICdwdC1pdGVtLzppZCcsXG4gICAgICAgIGNvbXBvbmVudDogUFRJdGVtQ29tcG9uZW50XG4gICAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKGJhY2tsb2dSb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBCYWNrbG9nUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==