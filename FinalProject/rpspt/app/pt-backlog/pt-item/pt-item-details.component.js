"use strict";
//angular imports
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//nativescript imports
var router_2 = require("nativescript-angular/router");
var dialogs_1 = require("ui/dialogs");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
//3rd party imports
require("rxjs/add/operator/switchMap");
//app imports
var item_type_picker_modal_component_1 = require("../shared/item-type-picker-modal.component");
var user_picker_modal_component_1 = require("../shared/user-picker-modal.component");
var animations_1 = require("../../shared/animations");
var services_1 = require("../../services");
var static_data_1 = require("../../shared/static-data");
var PTItemDetailsComponent = (function () {
    function PTItemDetailsComponent(route, router, routerExtensions, backlogService, modalService, vcRef) {
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.backlogService = backlogService;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.selectedViewIndex = 0;
        this.formFieldGridCols = '90, *, 90';
    }
    Object.defineProperty(PTItemDetailsComponent.prototype, "animationState", {
        get: function () {
            return this.selectedViewIndex === 2 ? 'off' : 'on';
        },
        enumerable: true,
        configurable: true
    });
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
            .subscribe(function (item) {
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
        this.backlogService.updatePtItemEstimate(this.item, incdec);
    };
    PTItemDetailsComponent.prototype.priorityIncDecTapped = function (incdec) {
        this.backlogService.updatePtItemPriority(this.item, incdec);
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
                _this.backlogService.updatePtItemType(_this.item, res);
            }
        });
    };
    PTItemDetailsComponent.prototype.showStatusOptions = function () {
        var _this = this;
        var statusKeys = [];
        var statuses = [];
        for (var enumMember in static_data_1.StatusEnum) {
            var isValueProperty = parseInt(enumMember, 10) >= 0;
            if (isValueProperty) {
                statuses.push(static_data_1.StatusEnum[enumMember]);
                statusKeys.push({ key: enumMember, value: static_data_1.StatusEnum[enumMember] });
            }
        }
        var options = {
            title: 'Select Status',
            cancelButtonText: 'Cancel',
            actions: statuses
        };
        dialogs_1.action(options).then(function (result) {
            if (result != 'Cancel') {
                _this.backlogService.updatePtItemStatus(_this.item, result);
            }
        });
    };
    PTItemDetailsComponent.prototype.showAssigneeModal = function () {
        var _this = this;
        var options = {
            context: { itemTitle: this.item.title, promptMsg: "Select assignee" },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modalService.showModal(user_picker_modal_component_1.UserPickerModalComponent, options).then(function (res) {
            if (res) {
                _this.backlogService.updatePtItemAssignee(_this.item, res);
            }
        });
    };
    return PTItemDetailsComponent;
}());
__decorate([
    core_1.ViewChild('itemTypeRow'),
    __metadata("design:type", core_1.ElementRef)
], PTItemDetailsComponent.prototype, "itemTypeRow", void 0);
__decorate([
    core_1.ViewChild('itemTypeName'),
    __metadata("design:type", core_1.ElementRef)
], PTItemDetailsComponent.prototype, "itemTypeName", void 0);
__decorate([
    core_1.ViewChild('itemAssigneeRow'),
    __metadata("design:type", core_1.ElementRef)
], PTItemDetailsComponent.prototype, "itemAssigneeRow", void 0);
__decorate([
    core_1.ViewChild('itemAssigneeName'),
    __metadata("design:type", core_1.ElementRef)
], PTItemDetailsComponent.prototype, "itemAssigneeName", void 0);
PTItemDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pt-item-details',
        templateUrl: 'pt-item-details.component.html',
        animations: animations_1.slideInAnimations
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        router_2.RouterExtensions,
        services_1.BacklogService,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], PTItemDetailsComponent);
exports.PTItemDetailsComponent = PTItemDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB0LWl0ZW0tZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQUFpQjtBQUNqQixzQ0FBd0c7QUFDeEcsMENBQTZFO0FBRTdFLHNCQUFzQjtBQUN0QixzREFBK0Q7QUFJL0Qsc0NBQTRFO0FBQzVFLGtFQUEyRjtBQUUzRixtQkFBbUI7QUFDbkIsdUNBQXFDO0FBRXJDLGFBQWE7QUFDYiwrRkFBMEY7QUFDMUYscUZBQWlGO0FBQ2pGLHNEQUFrRjtBQUNsRiwyQ0FBdUU7QUFDdkUsd0RBQWtGO0FBWWxGLElBQWEsc0JBQXNCO0lBMkIvQixnQ0FBb0IsS0FBcUIsRUFDN0IsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixZQUFnQyxFQUNoQyxLQUF1QjtRQUxmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQzdCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUF2QjNCLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQU12QixzQkFBaUIsR0FBRyxXQUFXLENBQUM7SUFpQkEsQ0FBQztJQXJCeEMsc0JBQVcsa0RBQWM7YUFBekI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3ZELENBQUM7OztPQUFBO0lBTUQsc0JBQVcsc0RBQWtCO2FBQTdCO1lBQ0ksTUFBTSxDQUFDLENBQUMsMEJBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHNEQUFr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QUMsU0FBUyxDQUFDLHNEQUF3QixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVU7WUFDM0UsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDN0QsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLDZCQUFDO0FBQUQsQ0FBQyxBQTVIRCxJQTRIQztBQTFINkI7SUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7OEJBQWMsaUJBQVU7MkRBQUM7QUFDdkI7SUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7OEJBQWUsaUJBQVU7NERBQUM7QUFFdEI7SUFBN0IsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQzs4QkFBa0IsaUJBQVU7K0RBQUM7QUFDM0I7SUFBOUIsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQzs4QkFBbUIsaUJBQVU7Z0VBQUM7QUFObkQsc0JBQXNCO0lBTmxDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLFVBQVUsRUFBRSw4QkFBaUI7S0FDaEMsQ0FBQztxQ0E0QjZCLHVCQUFjO1FBQ3JCLGVBQU07UUFDSSx5QkFBZ0I7UUFDbEIseUJBQWM7UUFDaEIsaUNBQWtCO1FBQ3pCLHVCQUFnQjtHQWhDMUIsc0JBQXNCLENBNEhsQztBQTVIWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FuZ3VsYXIgaW1wb3J0c1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RCaW5kaW5nLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zLCBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLy9uYXRpdmVzY3JpcHQgaW1wb3J0c1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTZWdtZW50ZWRCYXIgfSBmcm9tICd1aS9zZWdtZW50ZWQtYmFyJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb2xvcic7XG5pbXBvcnQgeyBjb25maXJtLCBhY3Rpb24sIEFjdGlvbk9wdGlvbnMsIENvbmZpcm1PcHRpb25zIH0gZnJvbSAndWkvZGlhbG9ncyc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5cbi8vM3JkIHBhcnR5IGltcG9ydHNcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcblxuLy9hcHAgaW1wb3J0c1xuaW1wb3J0IHsgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9zaGFyZWQvaXRlbS10eXBlLXBpY2tlci1tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFVzZXJQaWNrZXJNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci1waWNrZXItbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBzbGlkZUluRG93bkFuaW1hdGlvbiwgc2xpZGVJbkFuaW1hdGlvbnMgfSBmcm9tICcuLi8uLi9zaGFyZWQvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSwgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgSXRlbVR5cGVFbnVtLCBQcmlvcml0eUVudW0sIFN0YXR1c0VudW0gfSBmcm9tICcuLi8uLi9zaGFyZWQvc3RhdGljLWRhdGEnO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi8uLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSVBUSXRlbSA9IFBURG9tYWluLklQVEl0ZW07XG5pbXBvcnQgSVVzZXIgPSBQVERvbWFpbi5JVXNlcjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAncHQtaXRlbS1kZXRhaWxzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWl0ZW0tZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gICAgYW5pbWF0aW9uczogc2xpZGVJbkFuaW1hdGlvbnNcbn0pXG5leHBvcnQgY2xhc3MgUFRJdGVtRGV0YWlsc0NvbXBvbmVudCB7XG5cbiAgICBAVmlld0NoaWxkKCdpdGVtVHlwZVJvdycpIGl0ZW1UeXBlUm93OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2l0ZW1UeXBlTmFtZScpIGl0ZW1UeXBlTmFtZTogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ2l0ZW1Bc3NpZ25lZVJvdycpIGl0ZW1Bc3NpZ25lZVJvdzogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdpdGVtQXNzaWduZWVOYW1lJykgaXRlbUFzc2lnbmVlTmFtZTogRWxlbWVudFJlZjtcblxuICAgIHB1YmxpYyBpdGVtOiBJUFRJdGVtO1xuICAgIHByaXZhdGUgc2VsZWN0ZWRWaWV3SW5kZXggPSAwO1xuXG4gICAgcHVibGljIGdldCBhbmltYXRpb25TdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRWaWV3SW5kZXggPT09IDIgPyAnb2ZmJyA6ICdvbic7XG4gICAgfVxuXG4gICAgcHVibGljIGZvcm1GaWVsZEdyaWRDb2xzID0gJzkwLCAqLCA5MCc7XG5cblxuXG4gICAgcHVibGljIGdldCBwcmlvcml0eURlY0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiAhUHJpb3JpdHlFbnVtLmlzTWluKHRoaXMuaXRlbS5wcmlvcml0eSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwcmlvcml0eUluY0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiAhUHJpb3JpdHlFbnVtLmlzTWF4KHRoaXMuaXRlbS5wcmlvcml0eSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBiYWNrbG9nU2VydmljZTogQmFja2xvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxuXG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGUucGFyZW50LnBhcmFtc1xuICAgICAgICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMuYmFja2xvZ1NlcnZpY2UuZ2V0SXRlbShwYXJhbXNbJ2lkJ10pKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoaXRlbTogSVBUSXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGV4dFZpZXdGaWVsZEhlaWdodCh2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbGluZUhlaWdodCA9IDIwO1xuICAgICAgICAgICAgbGV0IG51bWxpbmVzID0gTWF0aC5jZWlsKHZhbHVlLmxlbmd0aCAvIDM2KTtcbiAgICAgICAgICAgIGxldCBuZXdIZWlnaHQgPSAoKG51bWxpbmVzIDwgMiA/IDIgOiBudW1saW5lcykgKiBsaW5lSGVpZ2h0KSArIDEwO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0hlaWdodCA8IDE1MCA/IG5ld0hlaWdodCA6IDE1MDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA0MDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0aXRsZUNoYW5nZShuZXdWYWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLml0ZW0udGl0bGUgPSBuZXdWYWw7XG4gICAgICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UudXBkYXRlUHRJdGVtKHRoaXMuaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc2NyaXB0aW9uQ2hhbmdlKG5ld1ZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaXRlbS5kZXNjcmlwdGlvbiA9IG5ld1ZhbDtcbiAgICAgICAgdGhpcy5iYWNrbG9nU2VydmljZS51cGRhdGVQdEl0ZW0odGhpcy5pdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXN0aW1hdGVJbmNEZWNUYXBwZWQoaW5jZGVjOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UudXBkYXRlUHRJdGVtRXN0aW1hdGUodGhpcy5pdGVtLCBpbmNkZWMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwcmlvcml0eUluY0RlY1RhcHBlZChpbmNkZWM6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5iYWNrbG9nU2VydmljZS51cGRhdGVQdEl0ZW1Qcmlvcml0eSh0aGlzLml0ZW0sIGluY2RlYyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dUeXBlTW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHsgaXRlbVRpdGxlOiB0aGlzLml0ZW0udGl0bGUsIHByb21wdE1zZzogXCJTZWxlY3QgaXRlbSB0eXBlXCIgfSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKHJlczogSXRlbVR5cGVFbnVtKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrbG9nU2VydmljZS51cGRhdGVQdEl0ZW1UeXBlKHRoaXMuaXRlbSwgcmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dTdGF0dXNPcHRpb25zKCkge1xuICAgICAgICBsZXQgc3RhdHVzS2V5cyA9IFtdO1xuICAgICAgICBsZXQgc3RhdHVzZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgZW51bU1lbWJlciBpbiBTdGF0dXNFbnVtKSB7XG4gICAgICAgICAgICB2YXIgaXNWYWx1ZVByb3BlcnR5ID0gcGFyc2VJbnQoZW51bU1lbWJlciwgMTApID49IDA7XG4gICAgICAgICAgICBpZiAoaXNWYWx1ZVByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzZXMucHVzaChTdGF0dXNFbnVtW2VudW1NZW1iZXJdKTtcbiAgICAgICAgICAgICAgICBzdGF0dXNLZXlzLnB1c2goeyBrZXk6IGVudW1NZW1iZXIsIHZhbHVlOiBTdGF0dXNFbnVtW2VudW1NZW1iZXJdIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbnM6IEFjdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ1NlbGVjdCBTdGF0dXMnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBhY3Rpb25zOiBzdGF0dXNlc1xuICAgICAgICB9O1xuXG4gICAgICAgIGFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gJ0NhbmNlbCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tsb2dTZXJ2aWNlLnVwZGF0ZVB0SXRlbVN0YXR1cyh0aGlzLml0ZW0sIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93QXNzaWduZWVNb2RhbCgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDogeyBpdGVtVGl0bGU6IHRoaXMuaXRlbS50aXRsZSwgcHJvbXB0TXNnOiBcIlNlbGVjdCBhc3NpZ25lZVwiIH0sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChVc2VyUGlja2VyTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKHJlczogSVVzZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tsb2dTZXJ2aWNlLnVwZGF0ZVB0SXRlbUFzc2lnbmVlKHRoaXMuaXRlbSwgcmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==