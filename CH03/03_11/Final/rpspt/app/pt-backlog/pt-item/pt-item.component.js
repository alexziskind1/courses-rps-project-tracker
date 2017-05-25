"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var backlog_service_1 = require("../../services/backlog.service");
var item_type_picker_modal_component_1 = require("../shared/item-type-picker-modal.component");
var PTItemComponent = (function () {
    function PTItemComponent(backlogService, modalService, vcRef) {
        this.backlogService = backlogService;
        this.modalService = modalService;
        this.vcRef = vcRef;
    }
    PTItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backlogService.getItem('2')
            .then(function (item) {
            _this.item = item;
        });
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
    __metadata("design:paramtypes", [backlog_service_1.BacklogService,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], PTItemComponent);
exports.PTItemComponent = PTItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW9FO0FBRXBFLGtFQUEyRjtBQUUzRixrRUFBZ0U7QUFNaEUsK0ZBQTBGO0FBUzFGLElBQWEsZUFBZTtJQUl4Qix5QkFDWSxjQUE4QixFQUM5QixZQUFnQyxFQUNoQyxLQUF1QjtRQUZ2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO0lBQy9CLENBQUM7SUFFTCxrQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7YUFDM0IsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLHVDQUFhLEdBQXBCO1FBQUEsaUJBYUM7UUFaRyxJQUFNLE9BQU8sR0FBdUI7WUFDaEMsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRTtZQUN0RSxVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUMvQixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsK0RBQTRCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBaUI7WUFDdEYsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDekIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztLQUN2QyxDQUFDO3FDQU04QixnQ0FBYztRQUNoQixpQ0FBa0I7UUFDekIsdUJBQWdCO0dBUDFCLGVBQWUsQ0ErQjNCO0FBL0JZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuXG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2JhY2tsb2cuc2VydmljZSc7XG5cbmltcG9ydCB7IEl0ZW1UeXBlRW51bSwgUHJpb3JpdHlFbnVtLCBTdGF0dXNFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElQVEl0ZW0gPSBQVERvbWFpbi5JUFRJdGVtO1xuXG5pbXBvcnQgeyBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NoYXJlZC9pdGVtLXR5cGUtcGlja2VyLW1vZGFsLmNvbXBvbmVudFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1pdGVtJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydwdC1pdGVtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQVEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGl0ZW06IElQVEl0ZW07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBiYWNrbG9nU2VydmljZTogQmFja2xvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UuZ2V0SXRlbSgnMicpXG4gICAgICAgICAgICAudGhlbihpdGVtID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dUeXBlTW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHsgaXRlbVRpdGxlOiB0aGlzLml0ZW0udGl0bGUsIHByb21wdE1zZzogXCJTZWxlY3QgaXRlbSB0eXBlXCIgfSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKHJlczogSXRlbVR5cGVFbnVtKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0udHlwZSA9IHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19