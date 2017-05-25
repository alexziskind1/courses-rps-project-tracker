"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var services_1 = require("../services");
var add_item_modal_component_1 = require("./shared/add-item-modal.component");
var PTBacklogComponent = (function () {
    function PTBacklogComponent(router, authService, backlogService, modalService, vcRef) {
        this.router = router;
        this.authService = authService;
        this.backlogService = backlogService;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.myTitleProperty = 'My Backlog';
        this.selectedViewIndex = 1;
    }
    PTBacklogComponent.prototype.ngOnInit = function () { };
    PTBacklogComponent.prototype.ngAfterViewInit = function () {
        this._drawer = this.drawerComponent.sideDrawer;
        this._drawer.drawerLocation = sidedrawer_1.SideDrawerLocation.Right;
    };
    PTBacklogComponent.prototype.showSlideout = function () {
        this._drawer.showDrawer();
    };
    PTBacklogComponent.prototype.selectFilteredView = function (itemFilterIndex, pageTitle) {
        this.selectedViewIndex = itemFilterIndex;
    };
    PTBacklogComponent.prototype.showAddItemModal = function () {
        var options = {
            context: { promptMsg: "Add item" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modalService.showModal(add_item_modal_component_1.AddItemModalComponent, options).then(function (newItem) {
            if (newItem != null) {
            }
        });
    };
    PTBacklogComponent.prototype.logoutTap = function () {
        this.authService.logout();
        this.router.navigate(['/login'], { clearHistory: true });
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
        styleUrls: ['pt-backlog.component.css']
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions,
        services_1.AuthenticationService,
        services_1.BacklogService,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], PTBacklogComponent);
exports.PTBacklogComponent = PTBacklogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQThGO0FBQzlGLHNEQUErRDtBQUUvRCxzRUFBb0c7QUFDcEcsaUVBQXdFO0FBQ3hFLGtFQUEyRjtBQUUzRix3Q0FBb0U7QUFDcEUsOEVBQTBFO0FBVzFFLElBQWEsa0JBQWtCO0lBUTNCLDRCQUNZLE1BQXdCLEVBQ3hCLFdBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLFlBQWdDLEVBQ2hDLEtBQXVCO1FBSnZCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBUDVCLG9CQUFlLEdBQVcsWUFBWSxDQUFDO1FBUTFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHFDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRVAsNENBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLCtCQUFrQixDQUFDLEtBQUssQ0FBQztJQUMzRCxDQUFDO0lBRU0seUNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSwrQ0FBa0IsR0FBekIsVUFBMEIsZUFBdUIsRUFBRSxTQUFpQjtRQUNoRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZUFBZSxDQUFDO0lBQzdDLENBQUM7SUFFTSw2Q0FBZ0IsR0FBdkI7UUFFSSxJQUFNLE9BQU8sR0FBdUI7WUFDaEMsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRTtZQUNsQyxVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUMvQixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsZ0RBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBaUI7WUFDL0UsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFdEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHNDQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQztBQWpEc0M7SUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFBeUIsZ0NBQXNCOzJEQUFDO0FBRnpFLGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7S0FDMUMsQ0FBQztxQ0FVc0IseUJBQWdCO1FBQ1gsZ0NBQXFCO1FBQ2xCLHlCQUFjO1FBQ2hCLGlDQUFrQjtRQUN6Qix1QkFBZ0I7R0FiMUIsa0JBQWtCLENBbUQ5QjtBQW5EWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgU2lkZURyYXdlckxvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlcic7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5cbmltcG9ydCB7IEJhY2tsb2dTZXJ2aWNlLCBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBBZGRJdGVtTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9zaGFyZWQvYWRkLWl0ZW0tbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uL3R5cGluZ3MvZG9tYWluJztcbmltcG9ydCBJTmV3SXRlbSA9IFBURG9tYWluLklOZXdJdGVtO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1iYWNrbG9nJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWJhY2tsb2cuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydwdC1iYWNrbG9nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQVEJhY2tsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2RyYXdlcjogU2lkZURyYXdlclR5cGU7XG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgcHVibGljIHNlbGVjdGVkVmlld0luZGV4OiBudW1iZXI7XG5cbiAgICBwdWJsaWMgbXlUaXRsZVByb3BlcnR5OiBzdHJpbmcgPSAnTXkgQmFja2xvZyc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBiYWNrbG9nU2VydmljZTogQmFja2xvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZpZXdJbmRleCA9IDE7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuX2RyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgIHRoaXMuX2RyYXdlci5kcmF3ZXJMb2NhdGlvbiA9IFNpZGVEcmF3ZXJMb2NhdGlvbi5SaWdodDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1NsaWRlb3V0KCkge1xuICAgICAgICB0aGlzLl9kcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RGaWx0ZXJlZFZpZXcoaXRlbUZpbHRlckluZGV4OiBudW1iZXIsIHBhZ2VUaXRsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWaWV3SW5kZXggPSBpdGVtRmlsdGVySW5kZXg7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dBZGRJdGVtTW9kYWwoKSB7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDogeyBwcm9tcHRNc2c6IFwiQWRkIGl0ZW1cIiB9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoQWRkSXRlbU1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKChuZXdJdGVtOiBJTmV3SXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5ld0l0ZW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vdGhpcy5iYWNrbG9nU2VydmljZS5hZGROZXdQVEl0ZW0obmV3SXRlbSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dvdXRUYXAoKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbn0iXX0=