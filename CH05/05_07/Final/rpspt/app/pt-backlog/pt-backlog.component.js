"use strict";
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var services_1 = require("../services");
var add_item_modal_component_1 = require("./shared/add-item-modal.component");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQThGO0FBRTlGLHNFQUFvRztBQUNwRyxpRUFBd0U7QUFDeEUsa0VBQTJGO0FBRTNGLHdDQUE2QztBQUM3Qyw4RUFBMEU7QUFXMUUsSUFBYSxrQkFBa0I7SUFRM0IsNEJBQW9CLGNBQThCLEVBQ3RDLFlBQWdDLEVBQ2hDLEtBQXVCO1FBRmYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUo1QixvQkFBZSxHQUFXLFlBQVksQ0FBQztRQUsxQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxxQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVQLDRDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRywrQkFBa0IsQ0FBQyxLQUFLLENBQUM7SUFDM0QsQ0FBQztJQUVNLHlDQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sK0NBQWtCLEdBQXpCLFVBQTBCLGVBQXVCLEVBQUUsU0FBaUI7UUFDaEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGVBQWUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sNkNBQWdCLEdBQXZCO1FBRUksSUFBTSxPQUFPLEdBQXVCO1lBQ2hDLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUU7WUFDbEMsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLGdEQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQWlCO1lBQy9FLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRXRCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxzQ0FBUyxHQUFoQjtRQUNJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDO0FBN0NzQztJQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzhCQUF5QixnQ0FBc0I7MkRBQUM7QUFGekUsa0JBQWtCO0lBTjlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLDJCQUEyQjtRQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztLQUMxQyxDQUFDO3FDQVNzQyx5QkFBYztRQUN4QixpQ0FBa0I7UUFDekIsdUJBQWdCO0dBVjFCLGtCQUFrQixDQStDOUI7QUEvQ1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQgeyBTaWRlRHJhd2VyTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcblxuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBBZGRJdGVtTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9zaGFyZWQvYWRkLWl0ZW0tbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uL3R5cGluZ3MvZG9tYWluJztcbmltcG9ydCBJTmV3SXRlbSA9IFBURG9tYWluLklOZXdJdGVtO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1iYWNrbG9nJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWJhY2tsb2cuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydwdC1iYWNrbG9nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQVEJhY2tsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2RyYXdlcjogU2lkZURyYXdlclR5cGU7XG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgcHVibGljIHNlbGVjdGVkVmlld0luZGV4OiBudW1iZXI7XG5cbiAgICBwdWJsaWMgbXlUaXRsZVByb3BlcnR5OiBzdHJpbmcgPSAnTXkgQmFja2xvZyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tsb2dTZXJ2aWNlOiBCYWNrbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmlld0luZGV4ID0gMTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgdGhpcy5fZHJhd2VyLmRyYXdlckxvY2F0aW9uID0gU2lkZURyYXdlckxvY2F0aW9uLlJpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93U2xpZGVvdXQoKSB7XG4gICAgICAgIHRoaXMuX2RyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdEZpbHRlcmVkVmlldyhpdGVtRmlsdGVySW5kZXg6IG51bWJlciwgcGFnZVRpdGxlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZpZXdJbmRleCA9IGl0ZW1GaWx0ZXJJbmRleDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0FkZEl0ZW1Nb2RhbCgpIHtcblxuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiB7IHByb21wdE1zZzogXCJBZGQgaXRlbVwiIH0sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChBZGRJdGVtTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKG5ld0l0ZW06IElOZXdJdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAobmV3SXRlbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy90aGlzLmJhY2tsb2dTZXJ2aWNlLmFkZE5ld1BUSXRlbShuZXdJdGVtLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dFRhcCgpIHtcbiAgICAgICAgYWxlcnQoJ0xPR09VVCcpO1xuICAgIH1cbn0iXX0=