"use strict";
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var pt_login_routing_module_1 = require("./pt-login-routing.module");
var pt_login_component_1 = require("./pt-login.component");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            pt_login_routing_module_1.loginRouting
        ],
        declarations: [
            pt_login_component_1.LoginComponent
        ]
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtbG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHQtbG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwREFBbUU7QUFDbkUsb0RBQXFFO0FBQ3JFLHNDQUF5QztBQUV6QyxxRUFBeUQ7QUFDekQsMkRBQXNEO0FBWXRELElBQWEsV0FBVztJQUF4QjtJQUEyQixDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBQTVCLElBQTRCO0FBQWYsV0FBVztJQVZ2QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCw2QkFBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLHNDQUFZO1NBQ2Y7UUFDRCxZQUFZLEVBQUU7WUFDVixtQ0FBYztTQUNqQjtLQUNKLENBQUM7R0FDVyxXQUFXLENBQUk7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgbG9naW5Sb3V0aW5nIH0gZnJvbSBcIi4vcHQtbG9naW4tcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vcHQtbG9naW4uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBsb2dpblJvdXRpbmdcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBMb2dpbkNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGUgeyB9Il19