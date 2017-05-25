"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var backlog_service_1 = require("../../services/backlog.service");
var static_data_1 = require("../../shared/static-data");
var item_type_picker_modal_component_1 = require("../shared/item-type-picker-modal.component");
var PTItemDetailsComponent = (function () {
    function PTItemDetailsComponent(route, backlogService, modalService, vcRef) {
        this.route = route;
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
        this.route.parent.params
            .switchMap(function (params) { return _this.backlogService.getItem(params['id']); })
            .subscribe(function (item) { return _this.item = item; });
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
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        backlog_service_1.BacklogService,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], PTItemDetailsComponent);
exports.PTItemDetailsComponent = PTItemDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB0LWl0ZW0tZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRTtBQUMzRSwwQ0FBaUU7QUFFakUsa0VBQTJGO0FBRTNGLGtFQUFnRTtBQUNoRSx3REFBa0Y7QUFJbEYsK0ZBQTBGO0FBTzFGLElBQWEsc0JBQXNCO0lBYy9CLGdDQUNZLEtBQXFCLEVBQ3JCLGNBQThCLEVBQzlCLFlBQWdDLEVBQ2hDLEtBQXVCO1FBSHZCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFkNUIsc0JBQWlCLEdBQUcsWUFBWSxDQUFDO0lBZXBDLENBQUM7SUFiTCxzQkFBVyxzREFBa0I7YUFBN0I7WUFDSSxNQUFNLENBQUMsQ0FBQywwQkFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBRUQsc0JBQVcsc0RBQWtCO2FBQTdCO1lBQ0ksTUFBTSxDQUFDLENBQUMsMEJBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxDQUFDOzs7T0FBQTtJQVNELHlDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDbkIsU0FBUyxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQXpDLENBQXlDLENBQUM7YUFDeEUsU0FBUyxDQUFDLFVBQUMsSUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJ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dCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcblxuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9iYWNrbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSXRlbVR5cGVFbnVtLCBQcmlvcml0eUVudW0sIFN0YXR1c0VudW0gfSBmcm9tICcuLi8uLi9zaGFyZWQvc3RhdGljLWRhdGEnO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi8uLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSVBUSXRlbSA9IFBURG9tYWluLklQVEl0ZW07XG5cbmltcG9ydCB7IEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vc2hhcmVkL2l0ZW0tdHlwZS1waWNrZXItbW9kYWwuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1pdGVtLWRldGFpbHMnLFxuICAgIHRlbXBsYXRlVXJsOiAncHQtaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQVEl0ZW1EZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaXRlbTogSVBUSXRlbTtcbiAgICBASW5wdXQoKSBwdWJsaWMgaXRlbUlkOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZm9ybUZpZWxkR3JpZENvbHMgPSAnOTAsICosIDkwICc7XG5cbiAgICBwdWJsaWMgZ2V0IHByaW9yaXR5RGVjRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICFQcmlvcml0eUVudW0uaXNNaW4odGhpcy5pdGVtLnByaW9yaXR5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHByaW9yaXR5SW5jRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICFQcmlvcml0eUVudW0uaXNNYXgodGhpcy5pdGVtLnByaW9yaXR5KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgYmFja2xvZ1NlcnZpY2U6IEJhY2tsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmVudC5wYXJhbXNcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLmJhY2tsb2dTZXJ2aWNlLmdldEl0ZW0ocGFyYW1zWydpZCddKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGl0ZW06IElQVEl0ZW0pID0+IHRoaXMuaXRlbSA9IGl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB0ZXh0Vmlld0ZpZWxkSGVpZ2h0KHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBsaW5lSGVpZ2h0ID0gMjA7XG4gICAgICAgICAgICBsZXQgbnVtbGluZXMgPSBNYXRoLmNlaWwodmFsdWUubGVuZ3RoIC8gMzYpO1xuICAgICAgICAgICAgbGV0IG5ld0hlaWdodCA9ICgobnVtbGluZXMgPCAyID8gMiA6IG51bWxpbmVzKSAqIGxpbmVIZWlnaHQpICsgMTA7XG4gICAgICAgICAgICByZXR1cm4gbmV3SGVpZ2h0IDwgMTUwID8gbmV3SGVpZ2h0IDogMTUwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDQwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRpdGxlQ2hhbmdlKG5ld1ZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaXRlbS50aXRsZSA9IG5ld1ZhbDtcbiAgICAgICAgdGhpcy5iYWNrbG9nU2VydmljZS51cGRhdGVQdEl0ZW0odGhpcy5pdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzY3JpcHRpb25DaGFuZ2UobmV3VmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pdGVtLmRlc2NyaXB0aW9uID0gbmV3VmFsO1xuICAgICAgICB0aGlzLmJhY2tsb2dTZXJ2aWNlLnVwZGF0ZVB0SXRlbSh0aGlzLml0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBlc3RpbWF0ZUluY0RlY1RhcHBlZChpbmNkZWM6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pdGVtLmVzdGltYXRlID0gaW5jZGVjID8gdGhpcy5pdGVtLmVzdGltYXRlICsgMSA6IHRoaXMuaXRlbS5lc3RpbWF0ZSAtIDE7XG4gICAgfVxuXG4gICAgcHVibGljIHByaW9yaXR5SW5jRGVjVGFwcGVkKGluY2RlYzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLml0ZW0ucHJpb3JpdHkgPSBpbmNkZWMgPyB0aGlzLml0ZW0ucHJpb3JpdHkgKyAxIDogdGhpcy5pdGVtLnByaW9yaXR5IC0gMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1R5cGVNb2RhbCgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDogeyBpdGVtVGl0bGU6IHRoaXMuaXRlbS50aXRsZSwgcHJvbXB0TXNnOiBcIlNlbGVjdCBpdGVtIHR5cGVcIiB9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbigocmVzOiBJdGVtVHlwZUVudW0pID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbS50eXBlID0gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59Il19