"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var backlog_service_1 = require("../../services/backlog.service");
var static_data_1 = require("../../shared/static-data");
var item_type_picker_modal_component_1 = require("../shared/item-type-picker-modal.component");
var PTItemDetailsComponent = (function () {
    function PTItemDetailsComponent(backlogService, modalService, vcRef) {
        this.backlogService = backlogService;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.formFieldGridCols = '90, *, 90 ';
    }
    Object.defineProperty(PTItemDetailsComponent.prototype, "priorityDecEnabled", {
        get: function () {
            return !static_data_1.PriorityEnum.isMin(this.item.priority);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTItemDetailsComponent.prototype, "priorityIncEnabled", {
        get: function () {
            return !static_data_1.PriorityEnum.isMax(this.item.priority);
        },
        enumerable: true,
        configurable: true
    });
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
    PTItemDetailsComponent.prototype.estimateIncDecTapped = function (incdec) {
        this.item.estimate = incdec ? this.item.estimate + 1 : this.item.estimate - 1;
    };
    PTItemDetailsComponent.prototype.priorityIncDecTapped = function (incdec) {
        this.item.priority = incdec ? this.item.priority + 1 : this.item.priority - 1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB0LWl0ZW0tZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFvRTtBQUVwRSxrRUFBMkY7QUFFM0Ysa0VBQWdFO0FBQ2hFLHdEQUFrRjtBQUlsRiwrRkFBMEY7QUFPMUYsSUFBYSxzQkFBc0I7SUFhL0IsZ0NBQ1ksY0FBOEIsRUFDOUIsWUFBZ0MsRUFDaEMsS0FBdUI7UUFGdkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQWI1QixzQkFBaUIsR0FBRyxZQUFZLENBQUM7SUFjcEMsQ0FBQztJQVpMLHNCQUFXLHNEQUFrQjthQUE3QjtZQUNJLE1BQU0sQ0FBQyxDQUFDLDBCQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxzREFBa0I7YUFBN0I7WUFDSSxNQUFNLENBQUMsQ0FBQywwQkFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBUUQseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLG9EQUFtQixHQUExQixVQUEyQixLQUFhO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDcEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzVDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbEUsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNMLENBQUM7SUFFTSw0Q0FBVyxHQUFsQixVQUFtQixNQUFjO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLGtEQUFpQixHQUF4QixVQUF5QixNQUFjO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLHFEQUFvQixHQUEzQixVQUE0QixNQUFlO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFTSxxREFBb0IsR0FBM0IsVUFBNEIsTUFBZTtRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU0sOENBQWEsR0FBcEI7UUFBQSxpQkFhQztRQVpHLElBQU0sT0FBTyxHQUF1QjtZQUNoQyxPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFO1lBQ3RFLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQy9CLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQywrREFBNEIsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFpQjtZQUN0RixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUN6QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBbkVELElBbUVDO0FBbkVZLHNCQUFzQjtJQUxsQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsV0FBVyxFQUFFLGdDQUFnQztLQUNoRCxDQUFDO3FDQWU4QixnQ0FBYztRQUNoQixpQ0FBa0I7UUFDekIsdUJBQWdCO0dBaEIxQixzQkFBc0IsQ0FtRWxDO0FBbkVZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcblxuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9iYWNrbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSXRlbVR5cGVFbnVtLCBQcmlvcml0eUVudW0sIFN0YXR1c0VudW0gfSBmcm9tICcuLi8uLi9zaGFyZWQvc3RhdGljLWRhdGEnO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi8uLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSVBUSXRlbSA9IFBURG9tYWluLklQVEl0ZW07XG5cbmltcG9ydCB7IEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vc2hhcmVkL2l0ZW0tdHlwZS1waWNrZXItbW9kYWwuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1pdGVtLWRldGFpbHMnLFxuICAgIHRlbXBsYXRlVXJsOiAncHQtaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQVEl0ZW1EZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaXRlbTogSVBUSXRlbTtcblxuICAgIHB1YmxpYyBmb3JtRmllbGRHcmlkQ29scyA9ICc5MCwgKiwgOTAgJztcblxuICAgIHB1YmxpYyBnZXQgcHJpb3JpdHlEZWNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gIVByaW9yaXR5RW51bS5pc01pbih0aGlzLml0ZW0ucHJpb3JpdHkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcHJpb3JpdHlJbmNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gIVByaW9yaXR5RW51bS5pc01heCh0aGlzLml0ZW0ucHJpb3JpdHkpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGJhY2tsb2dTZXJ2aWNlOiBCYWNrbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZlxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5iYWNrbG9nU2VydmljZS5pdGVtc1swXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGV4dFZpZXdGaWVsZEhlaWdodCh2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbGluZUhlaWdodCA9IDIwO1xuICAgICAgICAgICAgbGV0IG51bWxpbmVzID0gTWF0aC5jZWlsKHZhbHVlLmxlbmd0aCAvIDM2KTtcbiAgICAgICAgICAgIGxldCBuZXdIZWlnaHQgPSAoKG51bWxpbmVzIDwgMiA/IDIgOiBudW1saW5lcykgKiBsaW5lSGVpZ2h0KSArIDEwO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0hlaWdodCA8IDE1MCA/IG5ld0hlaWdodCA6IDE1MDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA0MDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0aXRsZUNoYW5nZShuZXdWYWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLml0ZW0udGl0bGUgPSBuZXdWYWw7XG4gICAgICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UudXBkYXRlUHRJdGVtKHRoaXMuaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc2NyaXB0aW9uQ2hhbmdlKG5ld1ZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaXRlbS5kZXNjcmlwdGlvbiA9IG5ld1ZhbDtcbiAgICAgICAgdGhpcy5iYWNrbG9nU2VydmljZS51cGRhdGVQdEl0ZW0odGhpcy5pdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXN0aW1hdGVJbmNEZWNUYXBwZWQoaW5jZGVjOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXRlbS5lc3RpbWF0ZSA9IGluY2RlYyA/IHRoaXMuaXRlbS5lc3RpbWF0ZSArIDEgOiB0aGlzLml0ZW0uZXN0aW1hdGUgLSAxO1xuICAgIH1cblxuICAgIHB1YmxpYyBwcmlvcml0eUluY0RlY1RhcHBlZChpbmNkZWM6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pdGVtLnByaW9yaXR5ID0gaW5jZGVjID8gdGhpcy5pdGVtLnByaW9yaXR5ICsgMSA6IHRoaXMuaXRlbS5wcmlvcml0eSAtIDE7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dUeXBlTW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHsgaXRlbVRpdGxlOiB0aGlzLml0ZW0udGl0bGUsIHByb21wdE1zZzogXCJTZWxlY3QgaXRlbSB0eXBlXCIgfSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKHJlczogSXRlbVR5cGVFbnVtKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0udHlwZSA9IHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==