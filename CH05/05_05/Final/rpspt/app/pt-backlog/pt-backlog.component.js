"use strict";
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var services_1 = require("../services");
var PTBacklogComponent = (function () {
    function PTBacklogComponent(backlogService, modalService, vcRef) {
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
        this.myTitleProperty = 'Adding';
        /*
        const options: ModalDialogOptions = {
            context: { promptMsg: "Add item" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modalService.showModal(AddItemModalComponent, options).then((newItem: INewItem) => {
            if (newItem != null) {
                //this.backlogService.addNewPTItem(newItem, null);
            }
        });*/
    };
    PTBacklogComponent.prototype.logoutTap = function () {
        alert('LOGOUT');
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
    __metadata("design:paramtypes", [services_1.BacklogService,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], PTBacklogComponent);
exports.PTBacklogComponent = PTBacklogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQThGO0FBRTlGLHNFQUFvRztBQUNwRyxpRUFBd0U7QUFDeEUsa0VBQTJGO0FBRTNGLHdDQUE2QztBQVk3QyxJQUFhLGtCQUFrQjtJQVEzQiw0QkFBb0IsY0FBOEIsRUFDdEMsWUFBZ0MsRUFDaEMsS0FBdUI7UUFGZixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDdEMsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBSjVCLG9CQUFlLEdBQVcsWUFBWSxDQUFDO1FBSzFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHFDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRVAsNENBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLCtCQUFrQixDQUFDLEtBQUssQ0FBQztJQUMzRCxDQUFDO0lBRU0seUNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSwrQ0FBa0IsR0FBekIsVUFBMEIsZUFBdUIsRUFBRSxTQUFpQjtRQUNoRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZUFBZSxDQUFDO0lBQzdDLENBQUM7SUFFTSw2Q0FBZ0IsR0FBdkI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztRQUNoQzs7Ozs7Ozs7Ozs7YUFXSztJQUNULENBQUM7SUFFTSxzQ0FBUyxHQUFoQjtRQUNJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBaERELElBZ0RDO0FBOUNzQztJQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzhCQUF5QixnQ0FBc0I7MkRBQUM7QUFGekUsa0JBQWtCO0lBTjlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLDJCQUEyQjtRQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztLQUMxQyxDQUFDO3FDQVNzQyx5QkFBYztRQUN4QixpQ0FBa0I7UUFDekIsdUJBQWdCO0dBVjFCLGtCQUFrQixDQWdEOUI7QUFoRFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQgeyBTaWRlRHJhd2VyTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcblxuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBBZGRJdGVtTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9zaGFyZWQvYWRkLWl0ZW0tbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uL3R5cGluZ3MvZG9tYWluJztcbmltcG9ydCBJTmV3SXRlbSA9IFBURG9tYWluLklOZXdJdGVtO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1iYWNrbG9nJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWJhY2tsb2cuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydwdC1iYWNrbG9nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQVEJhY2tsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2RyYXdlcjogU2lkZURyYXdlclR5cGU7XG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgcHVibGljIHNlbGVjdGVkVmlld0luZGV4OiBudW1iZXI7XG5cbiAgICBwdWJsaWMgbXlUaXRsZVByb3BlcnR5OiBzdHJpbmcgPSAnTXkgQmFja2xvZyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tsb2dTZXJ2aWNlOiBCYWNrbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmlld0luZGV4ID0gMTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgdGhpcy5fZHJhd2VyLmRyYXdlckxvY2F0aW9uID0gU2lkZURyYXdlckxvY2F0aW9uLlJpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93U2xpZGVvdXQoKSB7XG4gICAgICAgIHRoaXMuX2RyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdEZpbHRlcmVkVmlldyhpdGVtRmlsdGVySW5kZXg6IG51bWJlciwgcGFnZVRpdGxlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZpZXdJbmRleCA9IGl0ZW1GaWx0ZXJJbmRleDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0FkZEl0ZW1Nb2RhbCgpIHtcbiAgICAgICAgdGhpcy5teVRpdGxlUHJvcGVydHkgPSAnQWRkaW5nJztcbiAgICAgICAgLypcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDogeyBwcm9tcHRNc2c6IFwiQWRkIGl0ZW1cIiB9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoQWRkSXRlbU1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKChuZXdJdGVtOiBJTmV3SXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5ld0l0ZW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vdGhpcy5iYWNrbG9nU2VydmljZS5hZGROZXdQVEl0ZW0obmV3SXRlbSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pOyovXG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dFRhcCgpIHtcbiAgICAgICAgYWxlcnQoJ0xPR09VVCcpO1xuICAgIH1cbn0iXX0=