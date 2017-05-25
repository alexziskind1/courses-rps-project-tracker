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
        templateUrl: 'pt-backlog.component.html',
        styles: [
            "\n            .side-drawer-panel {\n                background-color: #333333;\n            }\n            .slide-out-btn {\n                color: red;\n            }\n        "
        ]
    }),
    __metadata("design:paramtypes", [])
], PtBacklogComponent);
exports.PtBacklogComponent = PtBacklogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTRFO0FBRTVFLHNFQUFvRztBQUVwRyxpRUFBd0U7QUFrQnhFLElBQWEsa0JBQWtCO0lBSTNCO0lBQWdCLENBQUM7SUFFakIscUNBQVEsR0FBUixjQUFhLENBQUM7SUFFUCw0Q0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsK0JBQWtCLENBQUMsS0FBSyxDQUFDO0lBQzNELENBQUM7SUFFTSx5Q0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLHNDQUFTLEdBQWhCO1FBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFsQnNDO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQXlCLGdDQUFzQjsyREFBQztBQUZ6RSxrQkFBa0I7SUFoQjlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLDJCQUEyQjtRQUN4QyxNQUFNLEVBQUU7WUFDSixtTEFPQztTQUNKO0tBQ0osQ0FBQzs7R0FFVyxrQkFBa0IsQ0FvQjlCO0FBcEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBTaWRlRHJhd2VyTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3B0LWJhY2tsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAncHQtYmFja2xvZy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXG4gICAgICAgIGBcbiAgICAgICAgICAgIC5zaWRlLWRyYXdlci1wYW5lbCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbGlkZS1vdXQtYnRuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICBgXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFB0QmFja2xvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuX2RyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgIHRoaXMuX2RyYXdlci5kcmF3ZXJMb2NhdGlvbiA9IFNpZGVEcmF3ZXJMb2NhdGlvbi5SaWdodDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1NsaWRlb3V0KCkge1xuICAgICAgICB0aGlzLl9kcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dvdXRUYXAoKSB7XG4gICAgICAgIGFsZXJ0KCdMT0dPVVQnKTtcbiAgICB9XG59Il19