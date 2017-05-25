"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var pt_login_routing_1 = require("./pt-login.routing");
var pt_login_component_1 = require("./pt-login.component");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.NativeScriptFormsModule,
            pt_login_routing_1.LoginRoutingModule
        ],
        exports: [pt_login_component_1.LoginComponent],
        declarations: [pt_login_component_1.LoginComponent],
        providers: [],
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtbG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHQtbG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUM7QUFFekMsb0RBQXFFO0FBRXJFLHVEQUF3RDtBQUN4RCwyREFBc0Q7QUFXdEQsSUFBYSxXQUFXO0lBQXhCO0lBQTJCLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFBNUIsSUFBNEI7QUFBZixXQUFXO0lBVHZCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLCtCQUF1QjtZQUN2QixxQ0FBa0I7U0FDckI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxtQ0FBYyxDQUFDO1FBQ3pCLFlBQVksRUFBRSxDQUFDLG1DQUFjLENBQUM7UUFDOUIsU0FBUyxFQUFFLEVBQUU7S0FDaEIsQ0FBQztHQUNXLFdBQVcsQ0FBSTtBQUFmLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IExvZ2luUm91dGluZ01vZHVsZSB9IGZyb20gJy4vcHQtbG9naW4ucm91dGluZyc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vcHQtbG9naW4uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBMb2dpblJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtMb2dpbkNvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbTG9naW5Db21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luTW9kdWxlIHsgfVxuIl19