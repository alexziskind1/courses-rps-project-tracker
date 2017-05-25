"use strict";
var core_1 = require("@angular/core");
var static_data_1 = require("../../shared/static-data");
var PTItemComponent = (function () {
    function PTItemComponent() {
    }
    PTItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.item = ITEM;
        }, 2000);
    };
    return PTItemComponent;
}());
PTItemComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pt-item',
        templateUrl: 'pt-item.component.html'
    }),
    __metadata("design:paramtypes", [])
], PTItemComponent);
exports.PTItemComponent = PTItemComponent;
var ITEM = { id: '1', title: 'item 1', description: 'item 1 desc', estimate: 5, priority: static_data_1.PriorityEnum.Low, status: static_data_1.StatusEnum.Open, tasks: [], type: static_data_1.ItemTypeEnum.Bug, dateCreated: new Date(), dateModified: new Date(), comments: [], assignee: null };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBRWxELHdEQUFrRjtBQVVsRixJQUFhLGVBQWU7SUFHeEI7SUFBZ0IsQ0FBQztJQUVqQixrQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLGVBQWU7SUFOM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsd0JBQXdCO0tBQ3hDLENBQUM7O0dBRVcsZUFBZSxDQVUzQjtBQVZZLDBDQUFlO0FBWTVCLElBQU0sSUFBSSxHQUNOLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsMEJBQVksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLHdCQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLDBCQUFZLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSXRlbVR5cGVFbnVtLCBQcmlvcml0eUVudW0sIFN0YXR1c0VudW0gfSBmcm9tICcuLi8uLi9zaGFyZWQvc3RhdGljLWRhdGEnO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi8uLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSVBUSXRlbSA9IFBURG9tYWluLklQVEl0ZW07XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1pdGVtJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWl0ZW0uY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgUFRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaXRlbTogSVBUSXRlbTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBJVEVNO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG59XG5cbmNvbnN0IElURU06IElQVEl0ZW0gPVxuICAgIHsgaWQ6ICcxJywgdGl0bGU6ICdpdGVtIDEnLCBkZXNjcmlwdGlvbjogJ2l0ZW0gMSBkZXNjJywgZXN0aW1hdGU6IDUsIHByaW9yaXR5OiBQcmlvcml0eUVudW0uTG93LCBzdGF0dXM6IFN0YXR1c0VudW0uT3BlbiwgdGFza3M6IFtdLCB0eXBlOiBJdGVtVHlwZUVudW0uQnVnLCBkYXRlQ3JlYXRlZDogbmV3IERhdGUoKSwgZGF0ZU1vZGlmaWVkOiBuZXcgRGF0ZSgpLCBjb21tZW50czogW10sIGFzc2lnbmVlOiBudWxsIH07Il19