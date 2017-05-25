"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var static_data_1 = require("../../shared/static-data");
var item_type_picker_modal_component_1 = require("../shared/item-type-picker-modal.component");
var PTItemComponent = (function () {
    function PTItemComponent(modalService, vcRef) {
        this.modalService = modalService;
        this.vcRef = vcRef;
    }
    PTItemComponent.prototype.ngOnInit = function () {
        //setTimeout(() => {
        this.item = ITEM;
        //}, 2000);
    };
    PTItemComponent.prototype.showTypeModal = function () {
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
    return PTItemComponent;
}());
PTItemComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pt-item',
        templateUrl: 'pt-item.component.html',
        styleUrls: ['pt-item.component.css']
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], PTItemComponent);
exports.PTItemComponent = PTItemComponent;
var ITEM = { id: '1', title: 'item 1', description: 'item 1 desc', estimate: 5, priority: static_data_1.PriorityEnum.Low, status: static_data_1.StatusEnum.Open, tasks: [], type: static_data_1.ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW9FO0FBRXBFLGtFQUEyRjtBQUUzRix3REFBa0Y7QUFJbEYsK0ZBQTBGO0FBUzFGLElBQWEsZUFBZTtJQUl4Qix5QkFDWSxZQUFnQyxFQUNoQyxLQUF1QjtRQUR2QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7SUFDL0IsQ0FBQztJQUVMLGtDQUFRLEdBQVI7UUFDSSxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsV0FBVztJQUNmLENBQUM7SUFFTSx1Q0FBYSxHQUFwQjtRQUFBLGlCQWFDO1FBWkcsSUFBTSxPQUFPLEdBQXVCO1lBQ2hDLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUU7WUFDdEUsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLCtEQUE0QixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWlCO1lBQ3RGLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE3QlksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDdkMsQ0FBQztxQ0FNNEIsaUNBQWtCO1FBQ3pCLHVCQUFnQjtHQU4xQixlQUFlLENBNkIzQjtBQTdCWSwwQ0FBZTtBQStCNUIsSUFBTSxJQUFJLEdBQ04sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSwwQkFBWSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsd0JBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsMEJBQVksQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5cbmltcG9ydCB7IEl0ZW1UeXBlRW51bSwgUHJpb3JpdHlFbnVtLCBTdGF0dXNFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElQVEl0ZW0gPSBQVERvbWFpbi5JUFRJdGVtO1xuXG5pbXBvcnQgeyBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NoYXJlZC9pdGVtLXR5cGUtcGlja2VyLW1vZGFsLmNvbXBvbmVudFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1pdGVtJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydwdC1pdGVtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQVEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGl0ZW06IElQVEl0ZW07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZlxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy9zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pdGVtID0gSVRFTTtcbiAgICAgICAgLy99LCAyMDAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1R5cGVNb2RhbCgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDogeyBpdGVtVGl0bGU6IHRoaXMuaXRlbS50aXRsZSwgcHJvbXB0TXNnOiBcIlNlbGVjdCBpdGVtIHR5cGVcIiB9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbigocmVzOiBJdGVtVHlwZUVudW0pID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbS50eXBlID0gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNvbnN0IElURU06IElQVEl0ZW0gPVxuICAgIHsgaWQ6ICcxJywgdGl0bGU6ICdpdGVtIDEnLCBkZXNjcmlwdGlvbjogJ2l0ZW0gMSBkZXNjJywgZXN0aW1hdGU6IDUsIHByaW9yaXR5OiBQcmlvcml0eUVudW0uTG93LCBzdGF0dXM6IFN0YXR1c0VudW0uT3BlbiwgdGFza3M6IFtdLCB0eXBlOiBJdGVtVHlwZUVudW0uQnVnLCBkYXRlQ3JlYXRlZDogbmV3IERhdGUoKSwgZGF0ZU1vZGlmaWVkOiBuZXcgRGF0ZSgpLCBjb21tZW50czogW10sIGFzc2lnbmVlOiBudWxsIH07Il19