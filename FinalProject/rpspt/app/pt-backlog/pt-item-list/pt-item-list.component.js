"use strict";
//angular imports
var core_1 = require("@angular/core");
//nativescript imports
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
//app imports
var services_1 = require("../../services");
var static_data_1 = require("../../shared/static-data");
var filter_state_model_1 = require("../../shared/filter-state.model");
var PTItemListComponent = (function () {
    function PTItemListComponent(page, backlogService, authService, _routerExtensions) {
        this.page = page;
        this.backlogService = backlogService;
        this.authService = authService;
        this._routerExtensions = _routerExtensions;
        this.ptItems = [];
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
    Object.defineProperty(PTItemListComponent.prototype, "ptItemsArray", {
        get: function () {
            return this.backlogService.items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTItemListComponent.prototype, "ptItemsArrayObs", {
        get: function () {
            return this.backlogService.ptItemsObs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTItemListComponent.prototype, "ptItemsSubj", {
        get: function () {
            return this.backlogService.itemsSubj;
        },
        enumerable: true,
        configurable: true
    });
    PTItemListComponent.prototype.getIndicatorClass = function (item) {
        return static_data_1.ItemTypeEnum.getIndicatorClass(item.type);
    };
    PTItemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backlogService.ptItemsObs.subscribe(function (data) {
            _this.ptItems = data;
        });
    };
    PTItemListComponent.prototype.refresh = function () {
        var filterState = new filter_state_model_1.FilterState(this.selectedViewIndex);
        this.backlogService.filter(filterState);
    };
    PTItemListComponent.prototype.listItemTap = function (args) {
        var lv = args.object;
        var item = lv.items[args.index];
        this._routerExtensions.navigate(['/pt-item', item.id]);
    };
    return PTItemListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Number])
], PTItemListComponent.prototype, "selectedViewIndex", null);
PTItemListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pt-item-list',
        templateUrl: 'pt-item-list.component.html',
        styleUrls: ['pt-item-list.component.css']
    }),
    __metadata("design:paramtypes", [page_1.Page,
        services_1.BacklogService,
        services_1.AuthenticationService,
        router_1.RouterExtensions])
], PTItemListComponent);
exports.PTItemListComponent = PTItemListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQUFpQjtBQUNqQixzQ0FBeUQ7QUFFekQsc0JBQXNCO0FBQ3RCLHNEQUErRDtBQUUvRCxnQ0FBK0I7QUFLL0IsYUFBYTtBQUNiLDJDQUF1RTtBQUN2RSx3REFBa0Y7QUFDbEYsc0VBQThEO0FBVTlELElBQWEsbUJBQW1CO0lBOEI1Qiw2QkFBb0IsSUFBVSxFQUNsQixjQUE4QixFQUM5QixXQUFrQyxFQUNsQyxpQkFBbUM7UUFIM0IsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNsQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO1FBQ2xDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFoQ3hDLFlBQU8sR0FBYyxFQUFFLENBQUM7SUFrQy9CLENBQUM7SUEvQlEsc0JBQVcsa0RBQWlCO2FBQTVCO1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNuQyxDQUFDO2FBQ0QsVUFBNkIsS0FBYTtZQUN0QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFXLDZDQUFZO2FBQXZCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsZ0RBQWU7YUFBMUI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw0Q0FBVzthQUF0QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUdNLCtDQUFpQixHQUF4QixVQUF5QixJQUFhO1FBQ2xDLE1BQU0sQ0FBQywwQkFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBVU0sc0NBQVEsR0FBZjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUN6QyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxxQ0FBTyxHQUFmO1FBQ0ksSUFBSSxXQUFXLEdBQWdCLElBQUksZ0NBQVcsQ0FDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLHlDQUFXLEdBQWxCLFVBQW1CLElBQW1CO1FBQ2xDLElBQUksRUFBRSxHQUFhLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBSSxJQUFJLEdBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUwsMEJBQUM7QUFBRCxDQUFDLEFBdkRELElBdURDO0FBbkRZO0lBQVIsWUFBSyxFQUFFOzs7NERBRVA7QUFOUSxtQkFBbUI7SUFOL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO0tBQzVDLENBQUM7cUNBK0I0QixXQUFJO1FBQ0YseUJBQWM7UUFDakIsZ0NBQXFCO1FBQ2YseUJBQWdCO0dBakN0QyxtQkFBbUIsQ0F1RC9CO0FBdkRZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vYW5ndWxhciBpbXBvcnRzXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vL25hdGl2ZXNjcmlwdCBpbXBvcnRzXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEsIExpc3RWaWV3IH0gZnJvbSAndWkvbGlzdC12aWV3JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcblxuLy8zcmQgcGFydHkgaW1wb3J0c1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG4vL2FwcCBpbXBvcnRzXG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSwgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgSXRlbVR5cGVFbnVtLCBQcmlvcml0eUVudW0sIFN0YXR1c0VudW0gfSBmcm9tICcuLi8uLi9zaGFyZWQvc3RhdGljLWRhdGEnO1xuaW1wb3J0IHsgRmlsdGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvZmlsdGVyLXN0YXRlLm1vZGVsJztcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElQVEl0ZW0gPSBQVERvbWFpbi5JUFRJdGVtO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAncHQtaXRlbS1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWl0ZW0tbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3B0LWl0ZW0tbGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUFRJdGVtTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHB0SXRlbXM6IElQVEl0ZW1bXSA9IFtdO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkVmlld0luZGV4OiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0IHNlbGVjdGVkVmlld0luZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRWaWV3SW5kZXg7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgc2VsZWN0ZWRWaWV3SW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFZpZXdJbmRleCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHB0SXRlbXNBcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2xvZ1NlcnZpY2UuaXRlbXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwdEl0ZW1zQXJyYXlPYnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tsb2dTZXJ2aWNlLnB0SXRlbXNPYnM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwdEl0ZW1zU3ViaigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2xvZ1NlcnZpY2UuaXRlbXNTdWJqO1xuICAgIH1cblxuXG4gICAgcHVibGljIGdldEluZGljYXRvckNsYXNzKGl0ZW06IElQVEl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIEl0ZW1UeXBlRW51bS5nZXRJbmRpY2F0b3JDbGFzcyhpdGVtLnR5cGUpO1xuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIGJhY2tsb2dTZXJ2aWNlOiBCYWNrbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UucHRJdGVtc09icy5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLnB0SXRlbXMgPSBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZnJlc2goKSB7XG4gICAgICAgIGxldCBmaWx0ZXJTdGF0ZTogRmlsdGVyU3RhdGUgPSBuZXcgRmlsdGVyU3RhdGUoXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmlld0luZGV4KTtcbiAgICAgICAgdGhpcy5iYWNrbG9nU2VydmljZS5maWx0ZXIoZmlsdGVyU3RhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsaXN0SXRlbVRhcChhcmdzOiBJdGVtRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBsdiA9IDxMaXN0Vmlldz5hcmdzLm9iamVjdDtcbiAgICAgICAgbGV0IGl0ZW0gPSA8SVBUSXRlbT5sdi5pdGVtc1thcmdzLmluZGV4XTtcbiAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9wdC1pdGVtJywgaXRlbS5pZF0pO1xuICAgIH1cblxufVxuXG4iXX0=