"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var segmented_bar_1 = require("ui/segmented-bar");
var services_1 = require("../../services");
var PTItemComponent = (function () {
    function PTItemComponent(route, backlogService, modalService, vcRef) {
        this.route = route;
        this.backlogService = backlogService;
        this.modalService = modalService;
        this.vcRef = vcRef;
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
        console.log('selected index: ' + newIndex);
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
        services_1.BacklogService,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], PTItemComponent);
exports.PTItemComponent = PTItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW9FO0FBQ3BFLDBDQUF5RDtBQUV6RCxrRUFBMkY7QUFDM0Ysa0RBQWtFO0FBRWxFLDJDQUFnRDtBQWVoRCxJQUFhLGVBQWU7SUFXeEIseUJBQ1ksS0FBcUIsRUFDckIsY0FBOEIsRUFDOUIsWUFBZ0MsRUFDaEMsS0FBdUI7UUFIdkIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQVgzQix1QkFBa0IsR0FBRztZQUN6QixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFO1lBQ2xELEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO1lBQzlDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUU7U0FDdkQsQ0FBQztRQUNLLGVBQVUsR0FBNEIsRUFBRSxDQUFDO1FBUTVDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3RELElBQUksbUJBQW1CLEdBQXVDLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztZQUNyRixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ1osU0FBUyxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQXpDLENBQXlDLENBQUM7YUFDeEUsU0FBUyxDQUFDLFVBQUMsSUFBYTtZQUNyQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSw4REFBb0MsR0FBM0MsVUFBNEMsTUFBb0I7UUFDNUQsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7QUFwQ1ksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDdkMsQ0FBQztxQ0FhcUIsdUJBQWM7UUFDTCx5QkFBYztRQUNoQixpQ0FBa0I7UUFDekIsdUJBQWdCO0dBZjFCLGVBQWUsQ0FvQzNCO0FBcENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5pbXBvcnQgeyBTZWdtZW50ZWRCYXIsIFNlZ21lbnRlZEJhckl0ZW0gfSBmcm9tICd1aS9zZWdtZW50ZWQtYmFyJztcblxuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbmltcG9ydCB7IEl0ZW1UeXBlRW51bSwgUHJpb3JpdHlFbnVtLCBTdGF0dXNFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElQVEl0ZW0gPSBQVERvbWFpbi5JUFRJdGVtO1xuXG5pbXBvcnQgeyBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NoYXJlZC9pdGVtLXR5cGUtcGlja2VyLW1vZGFsLmNvbXBvbmVudFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1pdGVtJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydwdC1pdGVtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQVEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGl0ZW06IElQVEl0ZW07XG5cbiAgICBwcml2YXRlIF9pdGVtRGV0YWlsU2NyZWVucyA9IFtcbiAgICAgICAgeyB0aXRsZTogJ0RldGFpbHMnLCByb3V0ZVBhdGg6ICdwdC1pdGVtLWRldGFpbHMnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdUYXNrcycsIHJvdXRlUGF0aDogJ3B0LWl0ZW0tdGFza3MnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdDaGl0Y2hhdCcsIHJvdXRlUGF0aDogJ3B0LWl0ZW0tY2hpdGNoYXQnIH1cbiAgICBdO1xuICAgIHB1YmxpYyBteU5hdkl0ZW1zOiBBcnJheTxTZWdtZW50ZWRCYXJJdGVtPiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIGJhY2tsb2dTZXJ2aWNlOiBCYWNrbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZlxuICAgICkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2l0ZW1EZXRhaWxTY3JlZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdG1wU2VnbWVudGVkQmFySXRlbTogU2VnbWVudGVkQmFySXRlbSA9IDxTZWdtZW50ZWRCYXJJdGVtPm5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgICAgICAgICB0bXBTZWdtZW50ZWRCYXJJdGVtLnRpdGxlID0gdGhpcy5faXRlbURldGFpbFNjcmVlbnNbaV0udGl0bGU7XG4gICAgICAgICAgICB0aGlzLm15TmF2SXRlbXMucHVzaCh0bXBTZWdtZW50ZWRCYXJJdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtc1xuICAgICAgICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMuYmFja2xvZ1NlcnZpY2UuZ2V0SXRlbShwYXJhbXNbJ2lkJ10pKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoaXRlbTogSVBUSXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtRGV0YWlsU2NyZWVuSW5kZXhDaGFuZ2VkKHNlZ0JhcjogU2VnbWVudGVkQmFyKSB7XG4gICAgICAgIGxldCBuZXdJbmRleCA9IHNlZ0Jhci5zZWxlY3RlZEluZGV4O1xuICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgaW5kZXg6ICcgKyBuZXdJbmRleCk7XG4gICAgfVxufVxuIl19