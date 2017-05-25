"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var segmented_bar_1 = require("ui/segmented-bar");
var dialogs_1 = require("ui/dialogs");
var services_1 = require("../../services");
var PTItemComponent = (function () {
    function PTItemComponent(route, routerExtensions, backlogService, modalService, vcRef) {
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.backlogService = backlogService;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this._selectedItemDetailScreenIndex = 0;
        this._itemDetailScreens = [
            { title: 'Details', routePath: 'pt-item-details' },
            { title: 'Tasks', routePath: 'pt-item-tasks' },
            { title: 'Chitchat', routePath: 'pt-item-chitchat' }
        ];
        this.myNavItems = [];
        for (var i = 0; i < this._itemDetailScreens.length; i++) {
            var tmpSegmentedBarItem = new segmented_bar_1.SegmentedBarItem();
            tmpSegmentedBarItem.title = this._itemDetailScreens[i].title;
            this.myNavItems.push(tmpSegmentedBarItem);
        }
    }
    PTItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.backlogService.getItem(params['id']); })
            .subscribe(function (item) {
            _this.item = item;
        });
    };
    PTItemComponent.prototype.onNavBackTap = function () {
        this.routerExtensions.backToPreviousPage();
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
    PTItemComponent.prototype.onDelete = function () {
        var _this = this;
        var options = {
            title: "Delete Item",
            message: "Are you sure you want to delete this item?",
            okButtonText: "Yes",
            cancelButtonText: "Cancel"
        };
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
        router_2.RouterExtensions,
        services_1.BacklogService,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], PTItemComponent);
exports.PTItemComponent = PTItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW9FO0FBQ3BFLDBDQUF5RDtBQUV6RCxzREFBK0Q7QUFFL0Qsa0VBQTJGO0FBQzNGLGtEQUFrRTtBQUNsRSxzQ0FBcUQ7QUFFckQsMkNBQWdEO0FBZWhELElBQWEsZUFBZTtJQVl4Qix5QkFDWSxLQUFxQixFQUNyQixnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsWUFBZ0MsRUFDaEMsS0FBdUI7UUFKdkIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBZDNCLG1DQUE4QixHQUFXLENBQUMsQ0FBQztRQUUzQyx1QkFBa0IsR0FBRztZQUN6QixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFO1lBQ2xELEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO1lBQzlDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUU7U0FDdkQsQ0FBQztRQUNLLGVBQVUsR0FBNEIsRUFBRSxDQUFDO1FBUzVDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3RELElBQUksbUJBQW1CLEdBQXVDLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztZQUNyRixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ1osU0FBUyxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQXpDLENBQXlDLENBQUM7YUFDeEUsU0FBUyxDQUFDLFVBQUMsSUFBYTtZQUNyQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSxzQ0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFTSw4REFBb0MsR0FBM0MsVUFBNEMsTUFBb0I7UUFDNUQsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsOEJBQThCLEtBQUssUUFBUSxJQUFJLFFBQVEsSUFBSSxDQUFDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pILElBQUksQ0FBQyw4QkFBOEIsR0FBRyxRQUFRLENBQUM7WUFDL0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNsRiw4QkFBOEI7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7SUFDTCxDQUFDO0lBRU0sa0NBQVEsR0FBZjtRQUFBLGlCQWtCQztRQWpCRyxJQUFJLE9BQU8sR0FBbUI7WUFDMUIsS0FBSyxFQUFFLGFBQWE7WUFDcEIsT0FBTyxFQUFFLDRDQUE0QztZQUNyRCxZQUFZLEVBQUUsS0FBSztZQUNuQixnQkFBZ0IsRUFBRSxRQUFRO1NBQzdCLENBQUM7UUFFRixpQkFBTyxDQUFDLDRDQUE0QyxDQUFDO2FBQ2hELElBQUksQ0FBQyxVQUFDLE1BQWU7WUFDbEIscUNBQXFDO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxVQUFVLENBQUM7b0JBQ1AsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQy9DLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNaLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFuRUQsSUFtRUM7QUFuRVksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDdkMsQ0FBQztxQ0FjcUIsdUJBQWM7UUFDSCx5QkFBZ0I7UUFDbEIseUJBQWM7UUFDaEIsaUNBQWtCO1FBQ3pCLHVCQUFnQjtHQWpCMUIsZUFBZSxDQW1FM0I7QUFuRVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5pbXBvcnQgeyBTZWdtZW50ZWRCYXIsIFNlZ21lbnRlZEJhckl0ZW0gfSBmcm9tICd1aS9zZWdtZW50ZWQtYmFyJztcbmltcG9ydCB7IENvbmZpcm1PcHRpb25zLCBjb25maXJtIH0gZnJvbSAndWkvZGlhbG9ncyc7XG5cbmltcG9ydCB7IEJhY2tsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuXG5pbXBvcnQgeyBJdGVtVHlwZUVudW0sIFByaW9yaXR5RW51bSwgU3RhdHVzRW51bSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zdGF0aWMtZGF0YSc7XG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uLy4uL3R5cGluZ3MvZG9tYWluJztcbmltcG9ydCBJUFRJdGVtID0gUFREb21haW4uSVBUSXRlbTtcblxuaW1wb3J0IHsgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9zaGFyZWQvaXRlbS10eXBlLXBpY2tlci1tb2RhbC5jb21wb25lbnRcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAncHQtaXRlbScsXG4gICAgdGVtcGxhdGVVcmw6ICdwdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsncHQtaXRlbS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUFRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBpdGVtOiBJUFRJdGVtO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkSXRlbURldGFpbFNjcmVlbkluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBfaXRlbURldGFpbFNjcmVlbnMgPSBbXG4gICAgICAgIHsgdGl0bGU6ICdEZXRhaWxzJywgcm91dGVQYXRoOiAncHQtaXRlbS1kZXRhaWxzJyB9LFxuICAgICAgICB7IHRpdGxlOiAnVGFza3MnLCByb3V0ZVBhdGg6ICdwdC1pdGVtLXRhc2tzJyB9LFxuICAgICAgICB7IHRpdGxlOiAnQ2hpdGNoYXQnLCByb3V0ZVBhdGg6ICdwdC1pdGVtLWNoaXRjaGF0JyB9XG4gICAgXTtcbiAgICBwdWJsaWMgbXlOYXZJdGVtczogQXJyYXk8U2VnbWVudGVkQmFySXRlbT4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGJhY2tsb2dTZXJ2aWNlOiBCYWNrbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZlxuICAgICkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2l0ZW1EZXRhaWxTY3JlZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdG1wU2VnbWVudGVkQmFySXRlbTogU2VnbWVudGVkQmFySXRlbSA9IDxTZWdtZW50ZWRCYXJJdGVtPm5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgICAgICAgICB0bXBTZWdtZW50ZWRCYXJJdGVtLnRpdGxlID0gdGhpcy5faXRlbURldGFpbFNjcmVlbnNbaV0udGl0bGU7XG4gICAgICAgICAgICB0aGlzLm15TmF2SXRlbXMucHVzaCh0bXBTZWdtZW50ZWRCYXJJdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtc1xuICAgICAgICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMuYmFja2xvZ1NlcnZpY2UuZ2V0SXRlbShwYXJhbXNbJ2lkJ10pKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoaXRlbTogSVBUSXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25OYXZCYWNrVGFwKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdGVkSXRlbURldGFpbFNjcmVlbkluZGV4Q2hhbmdlZChzZWdCYXI6IFNlZ21lbnRlZEJhcikge1xuICAgICAgICBsZXQgbmV3SW5kZXggPSBzZWdCYXIuc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSXRlbURldGFpbFNjcmVlbkluZGV4ICE9PSBuZXdJbmRleCAmJiBuZXdJbmRleCA+PSAwICYmIG5ld0luZGV4IDwgdGhpcy5faXRlbURldGFpbFNjcmVlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1EZXRhaWxTY3JlZW5JbmRleCA9IG5ld0luZGV4O1xuICAgICAgICAgICAgbGV0IHBhdGggPSB0aGlzLl9pdGVtRGV0YWlsU2NyZWVuc1t0aGlzLl9zZWxlY3RlZEl0ZW1EZXRhaWxTY3JlZW5JbmRleF0ucm91dGVQYXRoO1xuICAgICAgICAgICAgLy8gTmF2aWdhdGUgd2l0aCByZWxhdGl2ZSBsaW5rXG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3BhdGhdLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25EZWxldGUoKSB7XG4gICAgICAgIHZhciBvcHRpb25zOiBDb25maXJtT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkRlbGV0ZSBJdGVtXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtP1wiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlllc1wiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPycpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmVzdWx0IGNhbiBiZSB0cnVlL2ZhbHNlL3VuZGVmaW5lZFxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWNrbG9nU2VydmljZS5kZWxldGVJdGVtKHRoaXMuaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==