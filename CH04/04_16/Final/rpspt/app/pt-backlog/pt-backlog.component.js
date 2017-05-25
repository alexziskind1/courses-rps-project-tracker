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
    PTBacklogComponent.prototype.onDoubleTap = function () {
        alert('double tap');
    };
    PTBacklogComponent.prototype.onLongPress = function () {
        alert('long press');
    };
    PTBacklogComponent.prototype.onPan = function () {
        alert('pan');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQThGO0FBRTlGLHNFQUFvRztBQUNwRyxpRUFBd0U7QUFDeEUsa0VBQTJGO0FBRTNGLHdDQUE2QztBQUM3Qyw4RUFBMEU7QUFXMUUsSUFBYSxrQkFBa0I7SUFNM0IsNEJBQW9CLGNBQThCLEVBQ3RDLFlBQWdDLEVBQ2hDLEtBQXVCO1FBRmYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxxQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVQLDRDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRywrQkFBa0IsQ0FBQyxLQUFLLENBQUM7SUFDM0QsQ0FBQztJQUVNLHlDQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sK0NBQWtCLEdBQXpCLFVBQTBCLGVBQXVCLEVBQUUsU0FBaUI7UUFDaEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGVBQWUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sNkNBQWdCLEdBQXZCO1FBQ0ksSUFBTSxPQUFPLEdBQXVCO1lBQ2hDLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUU7WUFDbEMsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLGdEQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQWlCO1lBQy9FLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRXRCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxzQ0FBUyxHQUFoQjtRQUNJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sd0NBQVcsR0FBbEI7UUFDSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLHdDQUFXLEdBQWxCO1FBQ0ksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxrQ0FBSyxHQUFaO1FBQ0ksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUF4REQsSUF3REM7QUF0RHNDO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQXlCLGdDQUFzQjsyREFBQztBQUZ6RSxrQkFBa0I7SUFOOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsMkJBQTJCO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO0tBQzFDLENBQUM7cUNBT3NDLHlCQUFjO1FBQ3hCLGlDQUFrQjtRQUN6Qix1QkFBZ0I7R0FSMUIsa0JBQWtCLENBd0Q5QjtBQXhEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7IFNpZGVEcmF3ZXJMb2NhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXInO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuXG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IEFkZEl0ZW1Nb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL3NoYXJlZC9hZGQtaXRlbS1tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElOZXdJdGVtID0gUFREb21haW4uSU5ld0l0ZW07XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3B0LWJhY2tsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAncHQtYmFja2xvZy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3B0LWJhY2tsb2cuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBUQmFja2xvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgICBwdWJsaWMgc2VsZWN0ZWRWaWV3SW5kZXg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFja2xvZ1NlcnZpY2U6IEJhY2tsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWaWV3SW5kZXggPSAxO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLl9kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgICAgICB0aGlzLl9kcmF3ZXIuZHJhd2VyTG9jYXRpb24gPSBTaWRlRHJhd2VyTG9jYXRpb24uUmlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dTbGlkZW91dCgpIHtcbiAgICAgICAgdGhpcy5fZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0RmlsdGVyZWRWaWV3KGl0ZW1GaWx0ZXJJbmRleDogbnVtYmVyLCBwYWdlVGl0bGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmlld0luZGV4ID0gaXRlbUZpbHRlckluZGV4O1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93QWRkSXRlbU1vZGFsKCkge1xuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiB7IHByb21wdE1zZzogXCJBZGQgaXRlbVwiIH0sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChBZGRJdGVtTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKG5ld0l0ZW06IElOZXdJdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAobmV3SXRlbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy90aGlzLmJhY2tsb2dTZXJ2aWNlLmFkZE5ld1BUSXRlbShuZXdJdGVtLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dFRhcCgpIHtcbiAgICAgICAgYWxlcnQoJ0xPR09VVCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRvdWJsZVRhcCgpIHtcbiAgICAgICAgYWxlcnQoJ2RvdWJsZSB0YXAnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb25nUHJlc3MoKSB7XG4gICAgICAgIGFsZXJ0KCdsb25nIHByZXNzJyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUGFuKCkge1xuICAgICAgICBhbGVydCgncGFuJyk7XG4gICAgfVxufSJdfQ==