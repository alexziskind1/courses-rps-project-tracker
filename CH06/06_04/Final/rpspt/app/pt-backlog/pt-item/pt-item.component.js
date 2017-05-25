"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var segmented_bar_1 = require("ui/segmented-bar");
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
        router_2.RouterExtensions,
        services_1.BacklogService,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], PTItemComponent);
exports.PTItemComponent = PTItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW9FO0FBQ3BFLDBDQUF5RDtBQUV6RCxzREFBK0Q7QUFFL0Qsa0VBQTJGO0FBQzNGLGtEQUFrRTtBQUVsRSwyQ0FBZ0Q7QUFlaEQsSUFBYSxlQUFlO0lBWXhCLHlCQUNZLEtBQXFCLEVBQ3JCLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixZQUFnQyxFQUNoQyxLQUF1QjtRQUp2QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFkM0IsbUNBQThCLEdBQVcsQ0FBQyxDQUFDO1FBRTNDLHVCQUFrQixHQUFHO1lBQ3pCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUU7WUFDbEQsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUU7WUFDOUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRTtTQUN2RCxDQUFDO1FBQ0ssZUFBVSxHQUE0QixFQUFFLENBQUM7UUFTNUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdEQsSUFBSSxtQkFBbUIsR0FBdUMsSUFBSSxnQ0FBZ0IsRUFBRSxDQUFDO1lBQ3JGLG1CQUFtQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzdELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDOUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDWixTQUFTLENBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBekMsQ0FBeUMsQ0FBQzthQUN4RSxTQUFTLENBQUMsVUFBQyxJQUFhO1lBQ3JCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLDhEQUFvQyxHQUEzQyxVQUE0QyxNQUFvQjtRQUM1RCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsS0FBSyxRQUFRLElBQUksUUFBUSxJQUFJLENBQUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakgsSUFBSSxDQUFDLDhCQUE4QixHQUFHLFFBQVEsQ0FBQztZQUMvQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ2xGLDhCQUE4QjtZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdkUsQ0FBQztJQUNMLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7QUEzQ1ksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDdkMsQ0FBQztxQ0FjcUIsdUJBQWM7UUFDSCx5QkFBZ0I7UUFDbEIseUJBQWM7UUFDaEIsaUNBQWtCO1FBQ3pCLHVCQUFnQjtHQWpCMUIsZUFBZSxDQTJDM0I7QUEzQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5pbXBvcnQgeyBTZWdtZW50ZWRCYXIsIFNlZ21lbnRlZEJhckl0ZW0gfSBmcm9tICd1aS9zZWdtZW50ZWQtYmFyJztcblxuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbmltcG9ydCB7IEl0ZW1UeXBlRW51bSwgUHJpb3JpdHlFbnVtLCBTdGF0dXNFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElQVEl0ZW0gPSBQVERvbWFpbi5JUFRJdGVtO1xuXG5pbXBvcnQgeyBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NoYXJlZC9pdGVtLXR5cGUtcGlja2VyLW1vZGFsLmNvbXBvbmVudFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1pdGVtJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydwdC1pdGVtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQVEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGl0ZW06IElQVEl0ZW07XG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtRGV0YWlsU2NyZWVuSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIF9pdGVtRGV0YWlsU2NyZWVucyA9IFtcbiAgICAgICAgeyB0aXRsZTogJ0RldGFpbHMnLCByb3V0ZVBhdGg6ICdwdC1pdGVtLWRldGFpbHMnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdUYXNrcycsIHJvdXRlUGF0aDogJ3B0LWl0ZW0tdGFza3MnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdDaGl0Y2hhdCcsIHJvdXRlUGF0aDogJ3B0LWl0ZW0tY2hpdGNoYXQnIH1cbiAgICBdO1xuICAgIHB1YmxpYyBteU5hdkl0ZW1zOiBBcnJheTxTZWdtZW50ZWRCYXJJdGVtPiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgYmFja2xvZ1NlcnZpY2U6IEJhY2tsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmXG4gICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5faXRlbURldGFpbFNjcmVlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0bXBTZWdtZW50ZWRCYXJJdGVtOiBTZWdtZW50ZWRCYXJJdGVtID0gPFNlZ21lbnRlZEJhckl0ZW0+bmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgICAgIHRtcFNlZ21lbnRlZEJhckl0ZW0udGl0bGUgPSB0aGlzLl9pdGVtRGV0YWlsU2NyZWVuc1tpXS50aXRsZTtcbiAgICAgICAgICAgIHRoaXMubXlOYXZJdGVtcy5wdXNoKHRtcFNlZ21lbnRlZEJhckl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zXG4gICAgICAgICAgICAuc3dpdGNoTWFwKChwYXJhbXM6IFBhcmFtcykgPT4gdGhpcy5iYWNrbG9nU2VydmljZS5nZXRJdGVtKHBhcmFtc1snaWQnXSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChpdGVtOiBJUFRJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW1EZXRhaWxTY3JlZW5JbmRleENoYW5nZWQoc2VnQmFyOiBTZWdtZW50ZWRCYXIpIHtcbiAgICAgICAgbGV0IG5ld0luZGV4ID0gc2VnQmFyLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEl0ZW1EZXRhaWxTY3JlZW5JbmRleCAhPT0gbmV3SW5kZXggJiYgbmV3SW5kZXggPj0gMCAmJiBuZXdJbmRleCA8IHRoaXMuX2l0ZW1EZXRhaWxTY3JlZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtRGV0YWlsU2NyZWVuSW5kZXggPSBuZXdJbmRleDtcbiAgICAgICAgICAgIGxldCBwYXRoID0gdGhpcy5faXRlbURldGFpbFNjcmVlbnNbdGhpcy5fc2VsZWN0ZWRJdGVtRGV0YWlsU2NyZWVuSW5kZXhdLnJvdXRlUGF0aDtcbiAgICAgICAgICAgIC8vIE5hdmlnYXRlIHdpdGggcmVsYXRpdmUgbGlua1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtwYXRoXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19