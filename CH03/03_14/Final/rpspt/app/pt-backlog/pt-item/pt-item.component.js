"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var services_1 = require("../../services");
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
    __metadata("design:paramtypes", [services_1.BacklogService,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], PTItemComponent);
exports.PTItemComponent = PTItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW9FO0FBRXBFLGtFQUEyRjtBQUUzRiwyQ0FBZ0Q7QUFNaEQsK0ZBQTBGO0FBUzFGLElBQWEsZUFBZTtJQUl4Qix5QkFDWSxjQUE4QixFQUM5QixZQUFnQyxFQUNoQyxLQUF1QjtRQUZ2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO0lBQy9CLENBQUM7SUFFTCxrQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7YUFDM0IsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLHVDQUFhLEdBQXBCO1FBQUEsaUJBYUM7UUFaRyxJQUFNLE9BQU8sR0FBdUI7WUFDaEMsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRTtZQUN0RSxVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUMvQixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsK0RBQTRCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBaUI7WUFDdEYsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDekIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztLQUN2QyxDQUFDO3FDQU04Qix5QkFBYztRQUNoQixpQ0FBa0I7UUFDekIsdUJBQWdCO0dBUDFCLGVBQWUsQ0ErQjNCO0FBL0JZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuXG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcblxuaW1wb3J0IHsgSXRlbVR5cGVFbnVtLCBQcmlvcml0eUVudW0sIFN0YXR1c0VudW0gfSBmcm9tICcuLi8uLi9zaGFyZWQvc3RhdGljLWRhdGEnO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi8uLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSVBUSXRlbSA9IFBURG9tYWluLklQVEl0ZW07XG5cbmltcG9ydCB7IEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vc2hhcmVkL2l0ZW0tdHlwZS1waWNrZXItbW9kYWwuY29tcG9uZW50XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3B0LWl0ZW0nLFxuICAgIHRlbXBsYXRlVXJsOiAncHQtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3B0LWl0ZW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBUSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgaXRlbTogSVBUSXRlbTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGJhY2tsb2dTZXJ2aWNlOiBCYWNrbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZlxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYWNrbG9nU2VydmljZS5nZXRJdGVtKCcyJylcbiAgICAgICAgICAgIC50aGVuKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1R5cGVNb2RhbCgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDogeyBpdGVtVGl0bGU6IHRoaXMuaXRlbS50aXRsZSwgcHJvbXB0TXNnOiBcIlNlbGVjdCBpdGVtIHR5cGVcIiB9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbigocmVzOiBJdGVtVHlwZUVudW0pID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbS50eXBlID0gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=