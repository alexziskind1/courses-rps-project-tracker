"use strict";
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var PtBacklogComponent = (function () {
    function PtBacklogComponent() {
        this.selectedViewIndex = 1;
    }
    PtBacklogComponent.prototype.ngOnInit = function () { };
    PtBacklogComponent.prototype.ngAfterViewInit = function () {
        this._drawer = this.drawerComponent.sideDrawer;
        this._drawer.drawerLocation = sidedrawer_1.SideDrawerLocation.Right;
    };
    PtBacklogComponent.prototype.showSlideout = function () {
        this._drawer.showDrawer();
    };
    PtBacklogComponent.prototype.selectFilteredView = function (itemFilterIndex, pageTitle) {
        this.selectedViewIndex = itemFilterIndex;
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
        templateUrl: 'pt-backlog.component.html',
        styleUrls: ['pt-backlog.component.css']
    }),
    __metadata("design:paramtypes", [])
], PtBacklogComponent);
exports.PtBacklogComponent = PtBacklogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTRFO0FBRTVFLHNFQUFvRztBQUVwRyxpRUFBd0U7QUFTeEUsSUFBYSxrQkFBa0I7SUFNM0I7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxxQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVQLDRDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRywrQkFBa0IsQ0FBQyxLQUFLLENBQUM7SUFDM0QsQ0FBQztJQUVNLHlDQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sK0NBQWtCLEdBQXpCLFVBQTBCLGVBQXVCLEVBQUUsU0FBaUI7UUFDaEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGVBQWUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sc0NBQVMsR0FBaEI7UUFDSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQTFCc0M7SUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFBeUIsZ0NBQXNCOzJEQUFDO0FBRnpFLGtCQUFrQjtJQVA5QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7S0FDMUMsQ0FBQzs7R0FFVyxrQkFBa0IsQ0E0QjlCO0FBNUJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBTaWRlRHJhd2VyTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3B0LWJhY2tsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAncHQtYmFja2xvZy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3B0LWJhY2tsb2cuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUHRCYWNrbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kcmF3ZXI6IFNpZGVEcmF3ZXJUeXBlO1xuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIHB1YmxpYyBzZWxlY3RlZFZpZXdJbmRleDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWaWV3SW5kZXggPSAxO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLl9kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgICAgICB0aGlzLl9kcmF3ZXIuZHJhd2VyTG9jYXRpb24gPSBTaWRlRHJhd2VyTG9jYXRpb24uUmlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dTbGlkZW91dCgpIHtcbiAgICAgICAgdGhpcy5fZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0RmlsdGVyZWRWaWV3KGl0ZW1GaWx0ZXJJbmRleDogbnVtYmVyLCBwYWdlVGl0bGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmlld0luZGV4ID0gaXRlbUZpbHRlckluZGV4O1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dvdXRUYXAoKSB7XG4gICAgICAgIGFsZXJ0KCdMT0dPVVQnKTtcbiAgICB9XG59Il19