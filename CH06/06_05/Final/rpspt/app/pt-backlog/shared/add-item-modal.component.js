"use strict";
//angular imports
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var item_type_picker_modal_component_1 = require("../shared/item-type-picker-modal.component");
//app imports
var static_data_1 = require("../../shared/static-data");
var AddItemModalComponent = (function () {
    function AddItemModalComponent(params, modalService, vcRef) {
        this.params = params;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.formFieldGridCols = '90, *, 90';
    }
    Object.defineProperty(AddItemModalComponent.prototype, "btnDoneEnabled", {
        get: function () {
            return this.newItem.title.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    AddItemModalComponent.prototype.tapCancel = function () {
        this.params.closeCallback(null);
    };
    AddItemModalComponent.prototype.tapDone = function () {
        this.params.closeCallback(this.newItem);
    };
    AddItemModalComponent.prototype.ngOnInit = function () {
        this.prompt = this.params.context.promptMsg;
        this.newItem = {
            title: '',
            description: '',
            type: static_data_1.ItemTypeEnum.PBI
        };
    };
    AddItemModalComponent.prototype.textViewFieldHeight = function (value) {
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
    AddItemModalComponent.prototype.showTypeModal = function () {
        var _this = this;
        var options = {
            context: { itemTitle: this.newItem.title, promptMsg: "Select item type" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modalService.showModal(item_type_picker_modal_component_1.ItemTypePickerModalComponent, options).then(function (res) {
            if (res) {
                _this.newItem.type = res;
            }
        });
    };
    return AddItemModalComponent;
}());
AddItemModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-item-modal',
        templateUrl: 'add-item-modal.component.html',
        styleUrls: ['add-item-modal.component.css']
    }),
    __metadata("design:paramtypes", [dialogs_1.ModalDialogParams,
        dialogs_1.ModalDialogService,
        core_1.ViewContainerRef])
], AddItemModalComponent);
exports.AddItemModalComponent = AddItemModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWl0ZW0tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWl0ZW0tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQkFBaUI7QUFDakIsc0NBQW9FO0FBSXBFLG1FQUFvSDtBQUVwSCwrRkFBMEY7QUFFMUYsYUFBYTtBQUNiLHdEQUF3RDtBQVl4RCxJQUFhLHFCQUFxQjtJQVU5QiwrQkFDWSxNQUF5QixFQUN6QixZQUFnQyxFQUNoQyxLQUF1QjtRQUZ2QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFWNUIsc0JBQWlCLEdBQUcsV0FBVyxDQUFDO0lBVUEsQ0FBQztJQVB4QyxzQkFBVyxpREFBYzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBT00seUNBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sdUNBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxLQUFLLEVBQUUsRUFBRTtZQUNULFdBQVcsRUFBRSxFQUFFO1lBQ2YsSUFBSSxFQUFFLDBCQUFZLENBQUMsR0FBRztTQUN6QixDQUFDO0lBQ04sQ0FBQztJQUVNLG1EQUFtQixHQUExQixVQUEyQixLQUFhO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDcEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzVDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbEUsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNMLENBQUM7SUFFTSw2Q0FBYSxHQUFwQjtRQUFBLGlCQVlDO1FBWEcsSUFBTSxPQUFPLEdBQXVCO1lBQ2hDLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUU7WUFDekUsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLCtEQUE0QixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWlCO1lBQ3RGLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQzVCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCw0QkFBQztBQUFELENBQUMsQUF6REQsSUF5REM7QUF6RFkscUJBQXFCO0lBTmpDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixXQUFXLEVBQUUsK0JBQStCO1FBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO0tBQzlDLENBQUM7cUNBWXNCLDJCQUFpQjtRQUNYLDRCQUFrQjtRQUN6Qix1QkFBZ0I7R0FiMUIscUJBQXFCLENBeURqQztBQXpEWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FuZ3VsYXIgaW1wb3J0c1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vL25hdGl2ZXNjcmlwdCBpbXBvcnRzXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nUGFyYW1zLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhLCBMaXN0VmlldyB9IGZyb20gJ3VpL2xpc3Qtdmlldyc7XG5pbXBvcnQgeyBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NoYXJlZC9pdGVtLXR5cGUtcGlja2VyLW1vZGFsLmNvbXBvbmVudFwiO1xuXG4vL2FwcCBpbXBvcnRzXG5pbXBvcnQgeyBJdGVtVHlwZUVudW0gfSBmcm9tICcuLi8uLi9zaGFyZWQvc3RhdGljLWRhdGEnO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi8uLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSU5ld0l0ZW0gPSBQVERvbWFpbi5JTmV3SXRlbTtcblxuaW1wb3J0IElVc2VyID0gUFREb21haW4uSVVzZXI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhZGQtaXRlbS1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhZGQtaXRlbS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2FkZC1pdGVtLW1vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRJdGVtTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBwcm9tcHQ6IHN0cmluZztcblxuICAgIHB1YmxpYyBmb3JtRmllbGRHcmlkQ29scyA9ICc5MCwgKiwgOTAnO1xuICAgIHB1YmxpYyBuZXdJdGVtOiBJTmV3SXRlbTtcblxuICAgIHB1YmxpYyBnZXQgYnRuRG9uZUVuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5ld0l0ZW0udGl0bGUubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cblxuICAgIHB1YmxpYyB0YXBDYW5jZWwoKSB7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sobnVsbCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRhcERvbmUoKSB7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sodGhpcy5uZXdJdGVtKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wcm9tcHQgPSB0aGlzLnBhcmFtcy5jb250ZXh0LnByb21wdE1zZztcbiAgICAgICAgdGhpcy5uZXdJdGVtID0ge1xuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgICAgdHlwZTogSXRlbVR5cGVFbnVtLlBCSVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyB0ZXh0Vmlld0ZpZWxkSGVpZ2h0KHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBsaW5lSGVpZ2h0ID0gMjA7XG4gICAgICAgICAgICBsZXQgbnVtbGluZXMgPSBNYXRoLmNlaWwodmFsdWUubGVuZ3RoIC8gMzYpO1xuICAgICAgICAgICAgbGV0IG5ld0hlaWdodCA9ICgobnVtbGluZXMgPCAyID8gMiA6IG51bWxpbmVzKSAqIGxpbmVIZWlnaHQpICsgMTA7XG4gICAgICAgICAgICByZXR1cm4gbmV3SGVpZ2h0IDwgMTUwID8gbmV3SGVpZ2h0IDogMTUwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDQwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dUeXBlTW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHsgaXRlbVRpdGxlOiB0aGlzLm5ld0l0ZW0udGl0bGUsIHByb21wdE1zZzogXCJTZWxlY3QgaXRlbSB0eXBlXCIgfSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKHJlczogSXRlbVR5cGVFbnVtKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdJdGVtLnR5cGUgPSByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=