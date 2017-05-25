"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var auth_guard_service_1 = require("./services/auth-guard.service");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var user_service_1 = require("./services/user.service");
var auth_service_1 = require("./services/auth.service");
var pt_backlog_module_1 = require("./pt-backlog/pt-backlog.module");
var pt_login_module_1 = require("./pt-login/pt-login.module");
var status_bar_util_1 = require("./shared/status-bar-util");
status_bar_util_1.setStatusBarColors();
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
            pt_backlog_module_1.PtBacklogModule,
            pt_login_module_1.LoginModule
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        providers: [
            user_service_1.UserService,
            auth_service_1.AuthenticationService,
            [auth_guard_service_1.AuthGuard]
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFFOUUsb0VBQTBEO0FBQzFELDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msd0RBQXNEO0FBQ3RELHdEQUFnRTtBQUNoRSxvRUFBaUU7QUFDakUsOERBQXlEO0FBRXpELDREQUE4RDtBQUU5RCxvQ0FBa0IsRUFBRSxDQUFDO0FBd0JyQixJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUF0QnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1lBQ2hCLG1DQUFlO1lBQ2YsNkJBQVc7U0FDZDtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDUCwwQkFBVztZQUNYLG9DQUFxQjtZQUNyQixDQUFDLDhCQUFTLENBQUM7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vc2VydmljZXMvYXV0aC1ndWFyZC5zZXJ2aWNlJztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFB0QmFja2xvZ01vZHVsZSB9IGZyb20gJy4vcHQtYmFja2xvZy9wdC1iYWNrbG9nLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dpbk1vZHVsZSB9IGZyb20gJy4vcHQtbG9naW4vcHQtbG9naW4ubW9kdWxlJztcblxuaW1wb3J0IHsgc2V0U3RhdHVzQmFyQ29sb3JzIH0gZnJvbSBcIi4vc2hhcmVkL3N0YXR1cy1iYXItdXRpbFwiO1xuXG5zZXRTdGF0dXNCYXJDb2xvcnMoKTtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgUHRCYWNrbG9nTW9kdWxlLFxuICAgICAgICBMb2dpbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFVzZXJTZXJ2aWNlLFxuICAgICAgICBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgIFtBdXRoR3VhcmRdXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==