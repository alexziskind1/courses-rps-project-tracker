"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pt_backlog_component_1 = require("./pt-backlog.component");
var pt_item_component_1 = require("./pt-item/pt-item.component");
var backlogRoutes = [
    {
        path: 'pt-backlog',
        component: pt_backlog_component_1.PTBacklogComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHQtYmFja2xvZy5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUM7QUFDekMsMENBQXVEO0FBRXZELCtEQUE0RDtBQUM1RCxpRUFBOEQ7QUFFOUQsSUFBTSxhQUFhLEdBQVc7SUFDMUI7UUFDSSxJQUFJLEVBQUUsWUFBWTtRQUNsQixTQUFTLEVBQUUseUNBQWtCO0tBQ2hDO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsYUFBYTtRQUNuQixTQUFTLEVBQUUsbUNBQWU7S0FDN0I7Q0FDSixDQUFDO0FBTUYsSUFBYSxvQkFBb0I7SUFBakM7SUFBb0MsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FBQyxBQUFyQyxJQUFxQztBQUF4QixvQkFBb0I7SUFKaEMsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0MsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csb0JBQW9CLENBQUk7QUFBeEIsb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUFRCYWNrbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wdC1iYWNrbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQVEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3B0LWl0ZW0vcHQtaXRlbS5jb21wb25lbnQnO1xuXG5jb25zdCBiYWNrbG9nUm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAncHQtYmFja2xvZycsXG4gICAgICAgIGNvbXBvbmVudDogUFRCYWNrbG9nQ29tcG9uZW50XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICdwdC1pdGVtLzppZCcsXG4gICAgICAgIGNvbXBvbmVudDogUFRJdGVtQ29tcG9uZW50XG4gICAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKGJhY2tsb2dSb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBCYWNrbG9nUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==