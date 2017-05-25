"use strict";
var core_1 = require("@angular/core");
var LoginComponent = (function () {
    function LoginComponent() {
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        this.isLoading = true;
        console.log('login tapped');
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pt-login',
        templateUrl: 'pt-login.component.html'
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHQtbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFPbEQsSUFBYSxjQUFjO0lBR3ZCO1FBRk8sY0FBUyxHQUFZLEtBQUssQ0FBQztJQUVsQixDQUFDO0lBRWpCLGlDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRVAsOEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHlCQUF5QjtLQUN6QyxDQUFDOztHQUNXLGNBQWMsQ0FXMUI7QUFYWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1sb2dpbicsXG4gICAgdGVtcGxhdGVVcmw6ICdwdC1sb2dpbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG4gICAgcHVibGljIGxvZ2luKCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiB0YXBwZWQnKTtcbiAgICB9XG59Il19