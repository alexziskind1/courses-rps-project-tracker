"use strict";
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var PtBacklogComponent = (function () {
    function PtBacklogComponent() {
    }
    PtBacklogComponent.prototype.ngOnInit = function () { };
    PtBacklogComponent.prototype.ngAfterViewInit = function () {
        this._drawer = this.drawerComponent.sideDrawer;
        this._drawer.drawerLocation = sidedrawer_1.SideDrawerLocation.Right;
    };
    PtBacklogComponent.prototype.showSlideout = function () {
        this._drawer.showDrawer();
    };
    PtBacklogComponent.prototype.logoutTap = function () {
        alert('LOGOUT');
    };
    return PtBacklogComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], PtBacklogComponent.prototype, "drawerComponent", void 0);
PtBacklogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pt-backlog',
        templateUrl: 'pt-backlog.component.html'
    }),
    __metadata("design:paramtypes", [])
], PtBacklogComponent);
exports.PtBacklogComponent = PtBacklogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTRFO0FBRTVFLHNFQUFvRztBQUVwRyxpRUFBd0U7QUFReEUsSUFBYSxrQkFBa0I7SUFJM0I7SUFBZ0IsQ0FBQztJQUVqQixxQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVQLDRDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRywrQkFBa0IsQ0FBQyxLQUFLLENBQUM7SUFDM0QsQ0FBQztJQUVNLHlDQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sc0NBQVMsR0FBaEI7UUFDSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQWxCc0M7SUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFBeUIsZ0NBQXNCOzJEQUFDO0FBRnpFLGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSwyQkFBMkI7S0FDM0MsQ0FBQzs7R0FFVyxrQkFBa0IsQ0FvQjlCO0FBcEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBTaWRlRHJhd2VyTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3B0LWJhY2tsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAncHQtYmFja2xvZy5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQdEJhY2tsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2RyYXdlcjogU2lkZURyYXdlclR5cGU7XG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLl9kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgICAgICB0aGlzLl9kcmF3ZXIuZHJhd2VyTG9jYXRpb24gPSBTaWRlRHJhd2VyTG9jYXRpb24uUmlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dTbGlkZW91dCgpIHtcbiAgICAgICAgdGhpcy5fZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nb3V0VGFwKCkge1xuICAgICAgICBhbGVydCgnTE9HT1VUJyk7XG4gICAgfVxufSJdfQ==