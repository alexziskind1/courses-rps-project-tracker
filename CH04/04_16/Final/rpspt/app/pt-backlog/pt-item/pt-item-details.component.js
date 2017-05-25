"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var backlog_service_1 = require("../../services/backlog.service");
var item_type_picker_modal_component_1 = require("../shared/item-type-picker-modal.component");
var PTItemDetailsComponent = (function () {
    function PTItemDetailsComponent(backlogService, modalService, vcRef) {
        this.backlogService = backlogService;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.formFieldGridCols = '90, *, 90 ';
    }
    PTItemDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backlogService.getItem('2')
            .then(function (item) {
            _this.item = item;
        });
    };
    PTItemDetailsComponent.prototype.showTypeModal = function () {
        var _this = this;
        var options = {
            context: { itemTitle: this.item.title, promptMsg: "Select item type" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modalService.showModal(item_type_picker_modal_component_1.ItemTypePickerModalComponent, options).then(function (res) {
            if (res) {
                console.log(res);
                _this.item.type = res;
            }
        });
    };
    return PTItemDetailsComponent;
}());
PTItemDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pt-item-details',
        templateUrl: 'pt-item-details.component.html'
    }),
    __metadata("design:paramtypes", [backlog_service_1.BacklogService,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], PTItemDetailsComponent);
exports.PTItemDetailsComponent = PTItemDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB0LWl0ZW0tZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFvRTtBQUVwRSxrRUFBMkY7QUFFM0Ysa0VBQWdFO0FBS2hFLCtGQUEwRjtBQU8xRixJQUFhLHNCQUFzQjtJQUsvQixnQ0FDWSxjQUE4QixFQUM5QixZQUFnQyxFQUNoQyxLQUF1QjtRQUZ2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBTDVCLHNCQUFpQixHQUFHLFlBQVksQ0FBQztJQU1wQyxDQUFDO0lBRUwseUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQzNCLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDUCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSw4Q0FBYSxHQUFwQjtRQUFBLGlCQWFDO1FBWkcsSUFBTSxPQUFPLEdBQXVCO1lBQ2hDLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUU7WUFDdEUsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLCtEQUE0QixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWlCO1lBQ3RGLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCw2QkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksc0JBQXNCO0lBTGxDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsZ0NBQWdDO0tBQ2hELENBQUM7cUNBTzhCLGdDQUFjO1FBQ2hCLGlDQUFrQjtRQUN6Qix1QkFBZ0I7R0FSMUIsc0JBQXNCLENBZ0NsQztBQWhDWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5cbmltcG9ydCB7IEJhY2tsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYmFja2xvZy5zZXJ2aWNlJztcbmltcG9ydCB7IEl0ZW1UeXBlRW51bSwgUHJpb3JpdHlFbnVtLCBTdGF0dXNFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElQVEl0ZW0gPSBQVERvbWFpbi5JUFRJdGVtO1xuXG5pbXBvcnQgeyBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NoYXJlZC9pdGVtLXR5cGUtcGlja2VyLW1vZGFsLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAncHQtaXRlbS1kZXRhaWxzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWl0ZW0tZGV0YWlscy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUFRJdGVtRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGl0ZW06IElQVEl0ZW07XG5cbiAgICBwdWJsaWMgZm9ybUZpZWxkR3JpZENvbHMgPSAnOTAsICosIDkwICc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBiYWNrbG9nU2VydmljZTogQmFja2xvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UuZ2V0SXRlbSgnMicpXG4gICAgICAgICAgICAudGhlbigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1R5cGVNb2RhbCgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDogeyBpdGVtVGl0bGU6IHRoaXMuaXRlbS50aXRsZSwgcHJvbXB0TXNnOiBcIlNlbGVjdCBpdGVtIHR5cGVcIiB9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbigocmVzOiBJdGVtVHlwZUVudW0pID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbS50eXBlID0gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59Il19