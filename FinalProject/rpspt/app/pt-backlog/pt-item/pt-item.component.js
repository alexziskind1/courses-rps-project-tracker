"use strict";
//angular imports
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//nativescript imports
var router_2 = require("nativescript-angular/router");
var segmented_bar_1 = require("ui/segmented-bar");
var dialogs_1 = require("ui/dialogs");
//3rd party imports
require("rxjs/add/operator/switchMap");
//app imports
var services_1 = require("../../services");
var static_data_1 = require("../../shared/static-data");
var PTItemComponent = (function () {
    function PTItemComponent(route, router, routerExtensions, backlogService) {
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.backlogService = backlogService;
        this._itemDetailScreens = [
            { title: 'Details', routePath: 'pt-item-details' },
            { title: 'Tasks', routePath: 'pt-item-tasks' },
            { title: 'Chitchat', routePath: 'pt-item-chitchat' }
        ];
        this.myNavItems = [];
        this._selectedItemDetailScreenIndex = 0;
        for (var i = 0; i < this._itemDetailScreens.length; i++) {
            var tmpSegmentedBarItem = new segmented_bar_1.SegmentedBarItem();
            tmpSegmentedBarItem.title = this._itemDetailScreens[i].title;
            this.myNavItems.push(tmpSegmentedBarItem);
        }
    }
    Object.defineProperty(PTItemComponent.prototype, "itemTitle", {
        get: function () {
            return this.item ? this.item.title : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTItemComponent.prototype, "typeImg", {
        get: function () {
            return this.item ? static_data_1.ItemTypeEnum.getImage(this.item.type) : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTItemComponent.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (val) {
            this._selectedIndex = val;
        },
        enumerable: true,
        configurable: true
    });
    PTItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.backlogService.getItem(params['id']); })
            .subscribe(function (item) { return _this.item = item; });
    };
    PTItemComponent.prototype.onNavBackTap = function () {
        //TODO check to see if this is redundant on iOS
        this.routerExtensions.backToPreviousPage();
    };
    PTItemComponent.prototype.onActionMenuTap = function () {
        var _this = this;
        var options = {
            title: 'Item Actions',
            cancelButtonText: 'Cancel',
            actions: ['Delete']
        };
        dialogs_1.action(options).then(function (result) {
            if (result === 'Delete') {
                _this.onDelete();
            }
        });
    };
    PTItemComponent.prototype.onDelete = function () {
        //Simple approach
        //if (confirm('Are you sure you want to delete this item?')) {
        var _this = this;
        //}
        //Better approach with promise
        var options = {
            title: "Delete Item",
            message: "Are you sure you want to delete this item?",
            okButtonText: "Yes",
            cancelButtonText: "Cancel"
        };
        //confirm without options, with promise
        dialogs_1.confirm('Are you sure you want to delete this item?')
            .then(function (result) {
            // result can be true/false/undefined
            if (result) {
                _this.backlogService.deleteItem(_this.item);
                setTimeout(function () {
                    _this.routerExtensions.backToPreviousPage();
                }, 100);
            }
        });
    };
    PTItemComponent.prototype.selectedItemDetailScreenIndexChanged = function (segBar) {
        var newIndex = segBar.selectedIndex;
        if (this._selectedItemDetailScreenIndex !== newIndex && newIndex >= 0 && newIndex < this._itemDetailScreens.length) {
            this._selectedItemDetailScreenIndex = newIndex;
            var path = this._itemDetailScreens[this._selectedItemDetailScreenIndex].routePath;
            // Navigate with relative link
            this.routerExtensions.navigate([path], { relativeTo: this.route });
        }
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
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        router_2.RouterExtensions,
        services_1.BacklogService])
], PTItemComponent);
exports.PTItemComponent = PTItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBQWlCO0FBQ2pCLHNDQUFrRDtBQUNsRCwwQ0FBNkU7QUFFN0Usc0JBQXNCO0FBQ3RCLHNEQUErRDtBQUMvRCxrREFBa0U7QUFDbEUsc0NBQTRFO0FBRTVFLG1CQUFtQjtBQUNuQix1Q0FBcUM7QUFFckMsYUFBYTtBQUNiLDJDQUF1RTtBQUN2RSx3REFBd0Q7QUFXeEQsSUFBYSxlQUFlO0lBNkJ4Qix5QkFBb0IsS0FBcUIsRUFDN0IsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUh0QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUM3QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUE5QmxDLHVCQUFrQixHQUFHO1lBQ3pCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUU7WUFDbEQsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUU7WUFDOUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRTtTQUN2RCxDQUFDO1FBQ0ssZUFBVSxHQUE0QixFQUFFLENBQUM7UUFDeEMsbUNBQThCLEdBQVcsQ0FBQyxDQUFDO1FBeUIvQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN0RCxJQUFJLG1CQUFtQixHQUF1QyxJQUFJLGdDQUFnQixFQUFFLENBQUM7WUFDckYsbUJBQW1CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxD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QUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakgsSUFBSSxDQUFDLDhCQUE4QixHQUFHLFFBQVEsQ0FBQztZQUMvQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ2xGLDhCQUE4QjtZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdkUsQ0FBQztJQUdMLENBQUM7SUFHTCxzQkFBQztBQUFELENBQUMsQUExR0QsSUEwR0M7QUExR1ksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDdkMsQ0FBQztxQ0E4QjZCLHVCQUFjO1FBQ3JCLGVBQU07UUFDSSx5QkFBZ0I7UUFDbEIseUJBQWM7R0FoQ2pDLGVBQWUsQ0EwRzNCO0FBMUdZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLy9hbmd1bGFyIGltcG9ydHNcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgVXJsU2VnbWVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vbmF0aXZlc2NyaXB0IGltcG9ydHNcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFyLCBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSAndWkvc2VnbWVudGVkLWJhcic7XG5pbXBvcnQgeyBjb25maXJtLCBhY3Rpb24sIEFjdGlvbk9wdGlvbnMsIENvbmZpcm1PcHRpb25zIH0gZnJvbSAndWkvZGlhbG9ncyc7XG5cbi8vM3JkIHBhcnR5IGltcG9ydHNcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcblxuLy9hcHAgaW1wb3J0c1xuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UsIEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IEl0ZW1UeXBlRW51bSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zdGF0aWMtZGF0YSc7XG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uLy4uL3R5cGluZ3MvZG9tYWluJztcbmltcG9ydCBJUFRJdGVtID0gUFREb21haW4uSVBUSXRlbTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAncHQtaXRlbScsXG4gICAgdGVtcGxhdGVVcmw6ICdwdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsncHQtaXRlbS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUFRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgX2l0ZW1EZXRhaWxTY3JlZW5zID0gW1xuICAgICAgICB7IHRpdGxlOiAnRGV0YWlscycsIHJvdXRlUGF0aDogJ3B0LWl0ZW0tZGV0YWlscycgfSxcbiAgICAgICAgeyB0aXRsZTogJ1Rhc2tzJywgcm91dGVQYXRoOiAncHQtaXRlbS10YXNrcycgfSxcbiAgICAgICAgeyB0aXRsZTogJ0NoaXRjaGF0Jywgcm91dGVQYXRoOiAncHQtaXRlbS1jaGl0Y2hhdCcgfVxuICAgIF07XG4gICAgcHVibGljIG15TmF2SXRlbXM6IEFycmF5PFNlZ21lbnRlZEJhckl0ZW0+ID0gW107XG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtRGV0YWlsU2NyZWVuSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGl0ZW06IElQVEl0ZW07XG5cbiAgICBwdWJsaWMgZ2V0IGl0ZW1UaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSA/IHRoaXMuaXRlbS50aXRsZSA6ICcnO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdHlwZUltZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSA/IEl0ZW1UeXBlRW51bS5nZXRJbWFnZSh0aGlzLml0ZW0udHlwZSkgOiAnJztcbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDtcbiAgICBwdWJsaWMgc2V0IHNlbGVjdGVkSW5kZXgodmFsKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB2YWw7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBiYWNrbG9nU2VydmljZTogQmFja2xvZ1NlcnZpY2UpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9pdGVtRGV0YWlsU2NyZWVucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRtcFNlZ21lbnRlZEJhckl0ZW06IFNlZ21lbnRlZEJhckl0ZW0gPSA8U2VnbWVudGVkQmFySXRlbT5uZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgICAgICAgICAgdG1wU2VnbWVudGVkQmFySXRlbS50aXRsZSA9IHRoaXMuX2l0ZW1EZXRhaWxTY3JlZW5zW2ldLnRpdGxlO1xuICAgICAgICAgICAgdGhpcy5teU5hdkl0ZW1zLnB1c2godG1wU2VnbWVudGVkQmFySXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zXG4gICAgICAgICAgICAuc3dpdGNoTWFwKChwYXJhbXM6IFBhcmFtcykgPT4gdGhpcy5iYWNrbG9nU2VydmljZS5nZXRJdGVtKHBhcmFtc1snaWQnXSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChpdGVtOiBJUFRJdGVtKSA9PiB0aGlzLml0ZW0gPSBpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25OYXZCYWNrVGFwKCkge1xuICAgICAgICAvL1RPRE8gY2hlY2sgdG8gc2VlIGlmIHRoaXMgaXMgcmVkdW5kYW50IG9uIGlPU1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQWN0aW9uTWVudVRhcCgpIHtcbiAgICAgICAgdmFyIG9wdGlvbnM6IEFjdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0l0ZW0gQWN0aW9ucycsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIGFjdGlvbnM6IFsnRGVsZXRlJ11cbiAgICAgICAgfTtcblxuICAgICAgICBhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnRGVsZXRlJykge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZWxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRGVsZXRlKCkge1xuICAgICAgICAvL1NpbXBsZSBhcHByb2FjaFxuICAgICAgICAvL2lmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nKSkge1xuXG4gICAgICAgIC8vfVxuXG4gICAgICAgIC8vQmV0dGVyIGFwcHJvYWNoIHdpdGggcHJvbWlzZVxuICAgICAgICB2YXIgb3B0aW9uczogQ29uZmlybU9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJEZWxldGUgSXRlbVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT9cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICAgICAgfTtcbiAgICAgICAgLy9jb25maXJtIHdpdGhvdXQgb3B0aW9ucywgd2l0aCBwcm9taXNlXG4gICAgICAgIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPycpXG4gICAgICAgICAgICAvL2NvbmZpcm0gd2l0aCBvcHRpb25zLCB3aXRoIHByb21pc2VcbiAgICAgICAgICAgIC8vY29uZmlybShvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHJlc3VsdCBjYW4gYmUgdHJ1ZS9mYWxzZS91bmRlZmluZWRcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UuZGVsZXRlSXRlbSh0aGlzLml0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtRGV0YWlsU2NyZWVuSW5kZXhDaGFuZ2VkKHNlZ0JhcjogU2VnbWVudGVkQmFyKSB7XG4gICAgICAgIGxldCBuZXdJbmRleCA9IHNlZ0Jhci5zZWxlY3RlZEluZGV4O1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJdGVtRGV0YWlsU2NyZWVuSW5kZXggIT09IG5ld0luZGV4ICYmIG5ld0luZGV4ID49IDAgJiYgbmV3SW5kZXggPCB0aGlzLl9pdGVtRGV0YWlsU2NyZWVucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbURldGFpbFNjcmVlbkluZGV4ID0gbmV3SW5kZXg7XG4gICAgICAgICAgICBsZXQgcGF0aCA9IHRoaXMuX2l0ZW1EZXRhaWxTY3JlZW5zW3RoaXMuX3NlbGVjdGVkSXRlbURldGFpbFNjcmVlbkluZGV4XS5yb3V0ZVBhdGg7XG4gICAgICAgICAgICAvLyBOYXZpZ2F0ZSB3aXRoIHJlbGF0aXZlIGxpbmtcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbcGF0aF0sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cblxufVxuXG4iXX0=