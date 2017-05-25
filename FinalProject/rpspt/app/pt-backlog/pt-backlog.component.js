"use strict";
//angular imports
var core_1 = require("@angular/core");
//nativescript imports
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var router_1 = require("nativescript-angular/router");
//app imports
var services_1 = require("../services");
var add_item_modal_component_1 = require("./shared/add-item-modal.component");
var PTBacklogComponent = (function () {
    function PTBacklogComponent(router, backlogService, authService, modalService, vcRef) {
        this.router = router;
        this.backlogService = backlogService;
        this.authService = authService;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.selectedViewIndex = 1;
    }
    Object.defineProperty(PTBacklogComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    PTBacklogComponent.prototype.ngAfterViewInit = function () {
        this._drawer = this.drawerComponent.sideDrawer;
        this._drawer.drawerLocation = sidedrawer_1.SideDrawerLocation.Right;
    };
    PTBacklogComponent.prototype.showSlideout = function () {
        this._drawer.showDrawer();
    };
    PTBacklogComponent.prototype.selectFilteredView = function (itemFilterIndex, pageTitle) {
        this.selectedViewIndex = itemFilterIndex;
        this._drawer.closeDrawer();
    };
    PTBacklogComponent.prototype.showAddItemModal = function () {
        var _this = this;
        var options = {
            context: { promptMsg: "Add item" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modalService.showModal(add_item_modal_component_1.AddItemModalComponent, options).then(function (newItem) {
            if (newItem != null) {
                _this.backlogService.addNewPTItem(newItem, _this.authService.currentUser);
            }
        });
    };
    PTBacklogComponent.prototype.logoutTap = function () {
        this.authService.logout();
        this.router.navigate(["/login"], { clearHistory: true });
    };
    return PTBacklogComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], PTBacklogComponent.prototype, "drawerComponent", void 0);
PTBacklogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pt-backlog',
        templateUrl: 'pt-backlog.component.html',
        styleUrls: ['pt-backlog.component.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions,
        services_1.BacklogService,
        services_1.AuthenticationService,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], PTBacklogComponent);
exports.PTBacklogComponent = PTBacklogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBQWlCO0FBQ2pCLHNDQUErRztBQUUvRyxzQkFBc0I7QUFDdEIsa0VBQTJGO0FBQzNGLHNFQUFvRztBQUNwRyxpRUFBc0g7QUFDdEgsc0RBQStEO0FBRS9ELGFBQWE7QUFDYix3Q0FBb0U7QUFDcEUsOEVBQTBFO0FBWTFFLElBQWEsa0JBQWtCO0lBYTNCLDRCQUFvQixNQUF3QixFQUNoQyxjQUE4QixFQUM5QixXQUFrQyxFQUNsQyxZQUFnQyxFQUNoQyxLQUF1QjtRQUpmLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFDbEMsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBZjNCLDBCQUFxQixHQUF5QixJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFnQi9FLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQVZELHNCQUFXLG9EQUFvQjthQUEvQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFVTSw0Q0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsK0JBQWtCLENBQUMsS0FBSyxDQUFDO0lBQzNELENBQUM7SUFFTSx5Q0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLCtDQUFrQixHQUF6QixVQUEwQixlQUF1QixFQUFFLFNBQWlCO1FBQ2hFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxlQUFlLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU0sNkNBQWdCLEdBQXZCO1FBQUEsaUJBWUM7UUFYRyxJQUFNLE9BQU8sR0FBdUI7WUFDaEMsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRTtZQUNsQyxVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUMvQixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsZ0RBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBaUI7WUFDL0UsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVFLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxzQ0FBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFyREQsSUFxREM7QUFoRHNDO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQXlCLGdDQUFzQjsyREFBQztBQUx6RSxrQkFBa0I7SUFQOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsMkJBQTJCO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1FBQ3ZDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2xELENBQUM7cUNBYzhCLHlCQUFnQjtRQUNoQix5QkFBYztRQUNqQixnQ0FBcUI7UUFDcEIsaUNBQWtCO1FBQ3pCLHVCQUFnQjtHQWpCMUIsa0JBQWtCLENBcUQ5QjtBQXJEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FuZ3VsYXIgaW1wb3J0c1xuaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLy9uYXRpdmVzY3JpcHQgaW1wb3J0c1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNpZGVEcmF3ZXJMb2NhdGlvbiwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbi8vYXBwIGltcG9ydHNcbmltcG9ydCB7IEJhY2tsb2dTZXJ2aWNlLCBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBBZGRJdGVtTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9zaGFyZWQvYWRkLWl0ZW0tbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uL3R5cGluZ3MvZG9tYWluJztcbmltcG9ydCBJTmV3SXRlbSA9IFBURG9tYWluLklOZXdJdGVtO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1iYWNrbG9nJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWJhY2tsb2cuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydwdC1iYWNrbG9nLmNvbXBvbmVudC5jc3MnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBQVEJhY2tsb2dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgcHJpdmF0ZSBfZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcblxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIHB1YmxpYyBzZWxlY3RlZFZpZXdJbmRleDogbnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBiYWNrbG9nU2VydmljZTogQmFja2xvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmlld0luZGV4ID0gMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLl9kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgICAgICB0aGlzLl9kcmF3ZXIuZHJhd2VyTG9jYXRpb24gPSBTaWRlRHJhd2VyTG9jYXRpb24uUmlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dTbGlkZW91dCgpIHtcbiAgICAgICAgdGhpcy5fZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0RmlsdGVyZWRWaWV3KGl0ZW1GaWx0ZXJJbmRleDogbnVtYmVyLCBwYWdlVGl0bGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmlld0luZGV4ID0gaXRlbUZpbHRlckluZGV4O1xuICAgICAgICB0aGlzLl9kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0FkZEl0ZW1Nb2RhbCgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDogeyBwcm9tcHRNc2c6IFwiQWRkIGl0ZW1cIiB9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoQWRkSXRlbU1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKChuZXdJdGVtOiBJTmV3SXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5ld0l0ZW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UuYWRkTmV3UFRJdGVtKG5ld0l0ZW0sIHRoaXMuYXV0aFNlcnZpY2UuY3VycmVudFVzZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nb3V0VGFwKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbn1cblxuIl19