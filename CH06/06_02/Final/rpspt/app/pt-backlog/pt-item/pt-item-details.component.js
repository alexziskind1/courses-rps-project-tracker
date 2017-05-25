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
        var _this = this;
        this.backlogService.getItem(this.itemId)
            .then(function (item) {
            _this.item = item;
        });
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
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PTItemDetailsComponent.prototype, "itemId", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB0LWl0ZW0tZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRTtBQUUzRSxrRUFBMkY7QUFFM0Ysa0VBQWdFO0FBQ2hFLHdEQUFrRjtBQUlsRiwrRkFBMEY7QUFPMUYsSUFBYSxzQkFBc0I7SUFjL0IsZ0NBQ1ksY0FBOEIsRUFDOUIsWUFBZ0MsRUFDaEMsS0FBdUI7UUFGdkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQWI1QixzQkFBaUIsR0FBRyxZQUFZLENBQUM7SUFjcEMsQ0FBQztJQVpMLHNCQUFXLHNEQUFrQjthQUE3QjtZQUNJLE1BQU0sQ0FBQyxDQUFDLDBCQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxzREFBa0I7YUFBN0I7WUFDSSxNQUFNLENBQUMsQ0FBQywwQkFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBUUQseUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNuQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ04sS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0sb0RBQW1CLEdBQTFCLFVBQTJCLEtBQWE7UUFDcEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDNUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsRSxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQzdDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUVNLDRDQUFXLEdBQWxCLFVBQW1CLE1BQWM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sa0RBQWlCLEdBQXhCLFVBQXlCLE1BQWM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0scURBQW9CLEdBQTNCLFVBQTRCLE1BQWU7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVNLHFEQUFvQixHQUEzQixVQUE0QixNQUFlO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFTSw4Q0FBYSxHQUFwQjtRQUFBLGlCQWFDO1FBWkcsSUFBTSxPQUFPLEdBQXVCO1lBQ2hDLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUU7WUFDdEUsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLCtEQUE0QixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWlCO1lBQ3RGLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCw2QkFBQztBQUFELENBQUMsQUF2RUQsSUF1RUM7QUFyRVk7SUFBUixZQUFLLEVBQUU7O3NEQUF1QjtBQUZ0QixzQkFBc0I7SUFMbEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRSxnQ0FBZ0M7S0FDaEQsQ0FBQztxQ0FnQjhCLGdDQUFjO1FBQ2hCLGlDQUFrQjtRQUN6Qix1QkFBZ0I7R0FqQjFCLHNCQUFzQixDQXVFbEM7QUF2RVksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcblxuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9iYWNrbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSXRlbVR5cGVFbnVtLCBQcmlvcml0eUVudW0sIFN0YXR1c0VudW0gfSBmcm9tICcuLi8uLi9zaGFyZWQvc3RhdGljLWRhdGEnO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi8uLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSVBUSXRlbSA9IFBURG9tYWluLklQVEl0ZW07XG5cbmltcG9ydCB7IEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vc2hhcmVkL2l0ZW0tdHlwZS1waWNrZXItbW9kYWwuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1pdGVtLWRldGFpbHMnLFxuICAgIHRlbXBsYXRlVXJsOiAncHQtaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQVEl0ZW1EZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaXRlbTogSVBUSXRlbTtcbiAgICBASW5wdXQoKSBwdWJsaWMgaXRlbUlkOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZm9ybUZpZWxkR3JpZENvbHMgPSAnOTAsICosIDkwICc7XG5cbiAgICBwdWJsaWMgZ2V0IHByaW9yaXR5RGVjRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICFQcmlvcml0eUVudW0uaXNNaW4odGhpcy5pdGVtLnByaW9yaXR5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHByaW9yaXR5SW5jRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICFQcmlvcml0eUVudW0uaXNNYXgodGhpcy5pdGVtLnByaW9yaXR5KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBiYWNrbG9nU2VydmljZTogQmFja2xvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UuZ2V0SXRlbSh0aGlzLml0ZW1JZClcbiAgICAgICAgICAgIC50aGVuKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGV4dFZpZXdGaWVsZEhlaWdodCh2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbGluZUhlaWdodCA9IDIwO1xuICAgICAgICAgICAgbGV0IG51bWxpbmVzID0gTWF0aC5jZWlsKHZhbHVlLmxlbmd0aCAvIDM2KTtcbiAgICAgICAgICAgIGxldCBuZXdIZWlnaHQgPSAoKG51bWxpbmVzIDwgMiA/IDIgOiBudW1saW5lcykgKiBsaW5lSGVpZ2h0KSArIDEwO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0hlaWdodCA8IDE1MCA/IG5ld0hlaWdodCA6IDE1MDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA0MDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0aXRsZUNoYW5nZShuZXdWYWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLml0ZW0udGl0bGUgPSBuZXdWYWw7XG4gICAgICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UudXBkYXRlUHRJdGVtKHRoaXMuaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc2NyaXB0aW9uQ2hhbmdlKG5ld1ZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaXRlbS5kZXNjcmlwdGlvbiA9IG5ld1ZhbDtcbiAgICAgICAgdGhpcy5iYWNrbG9nU2VydmljZS51cGRhdGVQdEl0ZW0odGhpcy5pdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXN0aW1hdGVJbmNEZWNUYXBwZWQoaW5jZGVjOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXRlbS5lc3RpbWF0ZSA9IGluY2RlYyA/IHRoaXMuaXRlbS5lc3RpbWF0ZSArIDEgOiB0aGlzLml0ZW0uZXN0aW1hdGUgLSAxO1xuICAgIH1cblxuICAgIHB1YmxpYyBwcmlvcml0eUluY0RlY1RhcHBlZChpbmNkZWM6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pdGVtLnByaW9yaXR5ID0gaW5jZGVjID8gdGhpcy5pdGVtLnByaW9yaXR5ICsgMSA6IHRoaXMuaXRlbS5wcmlvcml0eSAtIDE7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dUeXBlTW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHsgaXRlbVRpdGxlOiB0aGlzLml0ZW0udGl0bGUsIHByb21wdE1zZzogXCJTZWxlY3QgaXRlbSB0eXBlXCIgfSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKHJlczogSXRlbVR5cGVFbnVtKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0udHlwZSA9IHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==