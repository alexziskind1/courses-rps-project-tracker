"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pt_login_component_1 = require("./pt-login.component");
var loginRoutes = [
    {
        path: 'login',
        component: pt_login_component_1.LoginComponent
    }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(loginRoutes)],
        exports: [router_1.RouterModule]
    })
], LoginRoutingModule);
exports.LoginRoutingModule = LoginRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtbG9naW4ucm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB0LWxvZ2luLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QywwQ0FBdUQ7QUFFdkQsMkRBQXNEO0FBRXRELElBQU0sV0FBVyxHQUFXO0lBQ3hCO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixTQUFTLEVBQUUsbUNBQWM7S0FDNUI7Q0FDSixDQUFDO0FBTUYsSUFBYSxrQkFBa0I7SUFBL0I7SUFBa0MsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQUFuQyxJQUFtQztBQUF0QixrQkFBa0I7SUFKOUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csa0JBQWtCLENBQUk7QUFBdEIsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL3B0LWxvZ2luLmNvbXBvbmVudCc7XG5cbmNvbnN0IGxvZ2luUm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnbG9naW4nLFxuICAgICAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50XG4gICAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKGxvZ2luUm91dGVzKV0sXG4gICAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Sb3V0aW5nTW9kdWxlIHsgfVxuIl19