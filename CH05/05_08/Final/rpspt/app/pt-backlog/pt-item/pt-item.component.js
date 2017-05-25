"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var segmented_bar_1 = require("ui/segmented-bar");
var services_1 = require("../../services");
var PTItemComponent = (function () {
    function PTItemComponent(backlogService, modalService, vcRef) {
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
        this.backlogService.getItem('2')
            .then(function (item) {
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
    __metadata("design:paramtypes", [services_1.BacklogService,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], PTItemComponent);
exports.PTItemComponent = PTItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW9FO0FBRXBFLGtFQUEyRjtBQUMzRixrREFBa0U7QUFFbEUsMkNBQWdEO0FBZWhELElBQWEsZUFBZTtJQVd4Qix5QkFDWSxjQUE4QixFQUM5QixZQUFnQyxFQUNoQyxLQUF1QjtRQUZ2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBVjNCLHVCQUFrQixHQUFHO1lBQ3pCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUU7WUFDbEQsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUU7WUFDOUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRTtTQUN2RCxDQUFDO1FBQ0ssZUFBVSxHQUE0QixFQUFFLENBQUM7UUFPNUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdEQsSUFBSSxtQkFBbUIsR0FBdUMsSUFBSSxnQ0FBZ0IsRUFBRSxDQUFDO1lBQ3JGLG1CQUFtQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzdELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDOUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7YUFDM0IsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLDhEQUFvQyxHQUEzQyxVQUE0QyxNQUFvQjtRQUM1RCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWxDWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztLQUN2QyxDQUFDO3FDQWE4Qix5QkFBYztRQUNoQixpQ0FBa0I7UUFDekIsdUJBQWdCO0dBZDFCLGVBQWUsQ0FrQzNCO0FBbENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFyLCBTZWdtZW50ZWRCYXJJdGVtIH0gZnJvbSAndWkvc2VnbWVudGVkLWJhcic7XG5cbmltcG9ydCB7IEJhY2tsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuXG5pbXBvcnQgeyBJdGVtVHlwZUVudW0sIFByaW9yaXR5RW51bSwgU3RhdHVzRW51bSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zdGF0aWMtZGF0YSc7XG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uLy4uL3R5cGluZ3MvZG9tYWluJztcbmltcG9ydCBJUFRJdGVtID0gUFREb21haW4uSVBUSXRlbTtcblxuaW1wb3J0IHsgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9zaGFyZWQvaXRlbS10eXBlLXBpY2tlci1tb2RhbC5jb21wb25lbnRcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAncHQtaXRlbScsXG4gICAgdGVtcGxhdGVVcmw6ICdwdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsncHQtaXRlbS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUFRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBpdGVtOiBJUFRJdGVtO1xuXG4gICAgcHJpdmF0ZSBfaXRlbURldGFpbFNjcmVlbnMgPSBbXG4gICAgICAgIHsgdGl0bGU6ICdEZXRhaWxzJywgcm91dGVQYXRoOiAncHQtaXRlbS1kZXRhaWxzJyB9LFxuICAgICAgICB7IHRpdGxlOiAnVGFza3MnLCByb3V0ZVBhdGg6ICdwdC1pdGVtLXRhc2tzJyB9LFxuICAgICAgICB7IHRpdGxlOiAnQ2hpdGNoYXQnLCByb3V0ZVBhdGg6ICdwdC1pdGVtLWNoaXRjaGF0JyB9XG4gICAgXTtcbiAgICBwdWJsaWMgbXlOYXZJdGVtczogQXJyYXk8U2VnbWVudGVkQmFySXRlbT4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGJhY2tsb2dTZXJ2aWNlOiBCYWNrbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZlxuICAgICkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2l0ZW1EZXRhaWxTY3JlZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdG1wU2VnbWVudGVkQmFySXRlbTogU2VnbWVudGVkQmFySXRlbSA9IDxTZWdtZW50ZWRCYXJJdGVtPm5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgICAgICAgICB0bXBTZWdtZW50ZWRCYXJJdGVtLnRpdGxlID0gdGhpcy5faXRlbURldGFpbFNjcmVlbnNbaV0udGl0bGU7XG4gICAgICAgICAgICB0aGlzLm15TmF2SXRlbXMucHVzaCh0bXBTZWdtZW50ZWRCYXJJdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhY2tsb2dTZXJ2aWNlLmdldEl0ZW0oJzInKVxuICAgICAgICAgICAgLnRoZW4oaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW1EZXRhaWxTY3JlZW5JbmRleENoYW5nZWQoc2VnQmFyOiBTZWdtZW50ZWRCYXIpIHtcbiAgICAgICAgbGV0IG5ld0luZGV4ID0gc2VnQmFyLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCBpbmRleDogJyArIG5ld0luZGV4KTtcbiAgICB9XG59XG4iXX0=