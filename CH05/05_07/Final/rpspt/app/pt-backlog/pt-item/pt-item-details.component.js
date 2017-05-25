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
        this.item = this.backlogService.items[0];
    };
    PTItemDetailsComponent.prototype.textViewFieldHeight = function (value) {
        if (value) {
            var lineHeight = 20;
            var numlines = Math.ceil(value.length / 36);
            var newHeight = ((numlines < 2 ? 2 : numlines) * lineHeight) + 10;
            return newHeight < 150 ? newHeight : 150;
        }
        else {
            return 40;
        }
    };
    PTItemDetailsComponent.prototype.titleChange = function (newVal) {
        this.item.title = newVal;
        this.backlogService.updatePtItem(this.item);
    };
    PTItemDetailsComponent.prototype.descriptionChange = function (newVal) {
        this.item.description = newVal;
        this.backlogService.updatePtItem(this.item);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB0LWl0ZW0tZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFvRTtBQUVwRSxrRUFBMkY7QUFFM0Ysa0VBQWdFO0FBS2hFLCtGQUEwRjtBQU8xRixJQUFhLHNCQUFzQjtJQUsvQixnQ0FDWSxjQUE4QixFQUM5QixZQUFnQyxFQUNoQyxLQUF1QjtRQUZ2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBTDVCLHNCQUFpQixHQUFHLFlBQVksQ0FBQztJQU1wQyxDQUFDO0lBRUwseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLG9EQUFtQixHQUExQixVQUEyQixLQUFhO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDcEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzVDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbEUsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNMLENBQUM7SUFFTSw0Q0FBVyxHQUFsQixVQUFtQixNQUFjO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLGtEQUFpQixHQUF4QixVQUF5QixNQUFjO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLDhDQUFhLEdBQXBCO1FBQUEsaUJBYUM7UUFaRyxJQUFNLE9BQU8sR0FBdUI7WUFDaEMsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRTtZQUN0RSxVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUMvQixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsK0RBQTRCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBaUI7WUFDdEYsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDekIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLDZCQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQztBQW5EWSxzQkFBc0I7SUFMbEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRSxnQ0FBZ0M7S0FDaEQsQ0FBQztxQ0FPOEIsZ0NBQWM7UUFDaEIsaUNBQWtCO1FBQ3pCLHVCQUFnQjtHQVIxQixzQkFBc0IsQ0FtRGxDO0FBbkRZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcblxuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9iYWNrbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSXRlbVR5cGVFbnVtLCBQcmlvcml0eUVudW0sIFN0YXR1c0VudW0gfSBmcm9tICcuLi8uLi9zaGFyZWQvc3RhdGljLWRhdGEnO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi8uLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSVBUSXRlbSA9IFBURG9tYWluLklQVEl0ZW07XG5cbmltcG9ydCB7IEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vc2hhcmVkL2l0ZW0tdHlwZS1waWNrZXItbW9kYWwuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1pdGVtLWRldGFpbHMnLFxuICAgIHRlbXBsYXRlVXJsOiAncHQtaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQVEl0ZW1EZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaXRlbTogSVBUSXRlbTtcblxuICAgIHB1YmxpYyBmb3JtRmllbGRHcmlkQ29scyA9ICc5MCwgKiwgOTAgJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGJhY2tsb2dTZXJ2aWNlOiBCYWNrbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZlxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5iYWNrbG9nU2VydmljZS5pdGVtc1swXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGV4dFZpZXdGaWVsZEhlaWdodCh2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbGluZUhlaWdodCA9IDIwO1xuICAgICAgICAgICAgbGV0IG51bWxpbmVzID0gTWF0aC5jZWlsKHZhbHVlLmxlbmd0aCAvIDM2KTtcbiAgICAgICAgICAgIGxldCBuZXdIZWlnaHQgPSAoKG51bWxpbmVzIDwgMiA/IDIgOiBudW1saW5lcykgKiBsaW5lSGVpZ2h0KSArIDEwO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0hlaWdodCA8IDE1MCA/IG5ld0hlaWdodCA6IDE1MDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA0MDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0aXRsZUNoYW5nZShuZXdWYWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLml0ZW0udGl0bGUgPSBuZXdWYWw7XG4gICAgICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UudXBkYXRlUHRJdGVtKHRoaXMuaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc2NyaXB0aW9uQ2hhbmdlKG5ld1ZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaXRlbS5kZXNjcmlwdGlvbiA9IG5ld1ZhbDtcbiAgICAgICAgdGhpcy5iYWNrbG9nU2VydmljZS51cGRhdGVQdEl0ZW0odGhpcy5pdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1R5cGVNb2RhbCgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDogeyBpdGVtVGl0bGU6IHRoaXMuaXRlbS50aXRsZSwgcHJvbXB0TXNnOiBcIlNlbGVjdCBpdGVtIHR5cGVcIiB9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbigocmVzOiBJdGVtVHlwZUVudW0pID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbS50eXBlID0gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59Il19