"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var services_1 = require("../../services");
var static_data_1 = require("../../shared/static-data");
var PTItemListComponent = (function () {
    function PTItemListComponent(backlogService, routerExtensions) {
        this.backlogService = backlogService;
        this.routerExtensions = routerExtensions;
    }
    Object.defineProperty(PTItemListComponent.prototype, "selectedViewIndex", {
        get: function () {
            return this._selectedViewIndex;
        },
        set: function (value) {
            this._selectedViewIndex = value;
            this.refresh();
        },
        enumerable: true,
        configurable: true
    });
    PTItemListComponent.prototype.ngOnInit = function () {
        this.ptItems = this.backlogService.items;
    };
    PTItemListComponent.prototype.refresh = function () {
        this.backlogService.filter(this.selectedViewIndex);
    };
    PTItemListComponent.prototype.listItemTap = function (args) {
        var lv = args.object;
        var item = lv.items[args.index];
        this.routerExtensions.navigate(['/pt-item', item.id]);
    };
    PTItemListComponent.prototype.getIndicatorClass = function (item) {
        return static_data_1.ItemTypeEnum.getIndicatorClass(item.type);
    };
    return PTItemListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PTItemListComponent.prototype, "selectedViewIndex", null);
PTItemListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pt-item-list',
        templateUrl: 'pt-item-list.component.html',
        styleUrls: ['pt-item-list.component.css']
    }),
    __metadata("design:paramtypes", [services_1.BacklogService,
        router_1.RouterExtensions])
], PTItemListComponent);
exports.PTItemListComponent = PTItemListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RDtBQUV6RCxzREFBK0Q7QUFFL0QsMkNBQWdEO0FBRWhELHdEQUFrRjtBQVVsRixJQUFhLG1CQUFtQjtJQWM1Qiw2QkFDWSxjQUE4QixFQUM5QixnQkFBa0M7UUFEbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDMUMsQ0FBQztJQVpMLHNCQUFXLGtEQUFpQjthQUE1QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDbkMsQ0FBQzthQUVRLFVBQTZCLEtBQWE7WUFDL0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQzs7O09BTEE7SUFZRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUM3QyxDQUFDO0lBRU8scUNBQU8sR0FBZjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSx5Q0FBVyxHQUFsQixVQUFtQixJQUFTO1FBQ3hCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sK0NBQWlCLEdBQXhCLFVBQXlCLElBQWE7UUFDbEMsTUFBTSxDQUFDLDBCQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUE1Qlk7SUFBUixZQUFLLEVBQUU7Ozs0REFHUDtBQVpRLG1CQUFtQjtJQU4vQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7S0FDNUMsQ0FBQztxQ0FnQjhCLHlCQUFjO1FBQ1oseUJBQWdCO0dBaEJyQyxtQkFBbUIsQ0FxQy9CO0FBckNZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbmltcG9ydCB7IEl0ZW1UeXBlRW51bSwgUHJpb3JpdHlFbnVtLCBTdGF0dXNFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElQVEl0ZW0gPSBQVERvbWFpbi5JUFRJdGVtO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAncHQtaXRlbS1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWl0ZW0tbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3B0LWl0ZW0tbGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUFRJdGVtTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHB0SXRlbXM6IElQVEl0ZW1bXTtcblxuICAgIHByaXZhdGUgX3NlbGVjdGVkVmlld0luZGV4OiBudW1iZXI7XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkVmlld0luZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRWaWV3SW5kZXg7XG4gICAgfVxuXG4gICAgQElucHV0KCkgcHVibGljIHNldCBzZWxlY3RlZFZpZXdJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkVmlld0luZGV4ID0gdmFsdWU7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGJhY2tsb2dTZXJ2aWNlOiBCYWNrbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnB0SXRlbXMgPSB0aGlzLmJhY2tsb2dTZXJ2aWNlLml0ZW1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5iYWNrbG9nU2VydmljZS5maWx0ZXIodGhpcy5zZWxlY3RlZFZpZXdJbmRleCk7XG4gICAgfVxuXG4gICAgcHVibGljIGxpc3RJdGVtVGFwKGFyZ3M6IGFueSkge1xuICAgICAgICBsZXQgbHYgPSBhcmdzLm9iamVjdDtcbiAgICAgICAgbGV0IGl0ZW0gPSBsdi5pdGVtc1thcmdzLmluZGV4XTtcblxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvcHQtaXRlbScsIGl0ZW0uaWRdKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW5kaWNhdG9yQ2xhc3MoaXRlbTogSVBUSXRlbSkge1xuICAgICAgICByZXR1cm4gSXRlbVR5cGVFbnVtLmdldEluZGljYXRvckNsYXNzKGl0ZW0udHlwZSk7XG4gICAgfVxufVxuXG4iXX0=