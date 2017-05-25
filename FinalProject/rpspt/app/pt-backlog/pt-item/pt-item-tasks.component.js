"use strict";
//angular imports
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//nativescript imports
var router_2 = require("nativescript-angular/router");
var platform_1 = require("platform");
//3rd party imports
require("rxjs/add/operator/switchMap");
//app imports
var animations_1 = require("../../shared/animations");
var services_1 = require("../../services");
var PTItemTasksComponent = (function () {
    function PTItemTasksComponent(route, router, routerExtensions, backlogService) {
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.backlogService = backlogService;
        this.selectedViewIndex = 0;
        this.newTaskTitle = '';
    }
    Object.defineProperty(PTItemTasksComponent.prototype, "tasks", {
        get: function () {
            return this.item.tasks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTItemTasksComponent.prototype, "animationState", {
        get: function () {
            return this.selectedViewIndex === 2 ? 'off' : 'on';
        },
        enumerable: true,
        configurable: true
    });
    PTItemTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params
            .switchMap(function (params) { return _this.backlogService.getItem(params['id']); })
            .subscribe(function (item) { return _this.item = item; });
    };
    PTItemTasksComponent.prototype.toggleTapped = function (task) {
        this.backlogService.toggleTask(this.item, task);
    };
    PTItemTasksComponent.prototype.addTapped = function (newTaskTV) {
        var newTitle = this.newTaskTitle.trim();
        if (newTitle.length === 0)
            return;
        var newTask = {
            title: newTitle,
            completed: false
        };
        this.backlogService.addTask(this.item, newTask);
        this.newTaskTitle = '';
        newTaskTV.dismissSoftInput();
    };
    PTItemTasksComponent.prototype.mathCeil = function (num) {
        return Math.ceil(num);
    };
    PTItemTasksComponent.prototype.taskHeight = function (taskTitle) {
        var lineHeight = platform_1.isIOS ? 20 : 30;
        var numlines = Math.ceil(taskTitle.length / 25);
        return ((numlines < 2 ? 2 : numlines) * lineHeight) + 10;
    };
    PTItemTasksComponent.prototype.taskTitleChange = function (task, args) {
        this.backlogService.updateTask(this.item, task, args);
    };
    return PTItemTasksComponent;
}());
PTItemTasksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pt-item-tasks',
        templateUrl: 'pt-item-tasks.component.html',
        styleUrls: ['pt-item-tasks.component.css'],
        animations: animations_1.slideInAnimations
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        router_2.RouterExtensions,
        services_1.BacklogService])
], PTItemTasksComponent);
exports.PTItemTasksComponent = PTItemTasksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS10YXNrcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLXRhc2tzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBQWlCO0FBQ2pCLHNDQUFrRDtBQUNsRCwwQ0FBNkU7QUFFN0Usc0JBQXNCO0FBQ3RCLHNEQUErRDtBQUcvRCxxQ0FBNEM7QUFFNUMsbUJBQW1CO0FBQ25CLHVDQUFxQztBQUVyQyxhQUFhO0FBQ2Isc0RBQWtGO0FBQ2xGLDJDQUF1RTtBQWN2RSxJQUFhLG9CQUFvQjtJQWU3Qiw4QkFBb0IsS0FBcUIsRUFDN0IsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUh0QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUM3QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqQmxDLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUV2QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztJQWVhLENBQUM7SUFiL0Msc0JBQVcsdUNBQUs7YUFBaEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVyxnREFBYzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdkQsQ0FBQzs7O09BQUE7SUFTTSx1Q0FBUSxHQUFmO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ25CLFNBQVMsQ0FBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUF6QyxDQUF5QyxDQUFDO2FBQ3hFLFNBQVMsQ0FBQyxVQUFDLElBQWEsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUlNLDJDQUFZLEdBQW5CLFVBQW9CLElBQVc7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBR00sd0NBQVMsR0FBaEIsVUFBaUIsU0FBbUI7UUFDaEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUM7UUFDWCxJQUFJLE9BQU8sR0FBYTtZQUNwQixLQUFLLEVBQUUsUUFBUTtZQUNmLFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUM7UUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTSx1Q0FBUSxHQUFmLFVBQWdCLEdBQVc7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLHlDQUFVLEdBQWpCLFVBQWtCLFNBQWlCO1FBQy9CLElBQUksVUFBVSxHQUFHLGdCQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNqQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDN0QsQ0FBQztJQUVNLDhDQUFlLEdBQXRCLFVBQXVCLElBQVcsRUFBRSxJQUFZO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUE1REQsSUE0REM7QUE1RFksb0JBQW9CO0lBUGhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztRQUMxQyxVQUFVLEVBQUUsOEJBQWlCO0tBQ2hDLENBQUM7cUNBZ0I2Qix1QkFBYztRQUNyQixlQUFNO1FBQ0kseUJBQWdCO1FBQ2xCLHlCQUFjO0dBbEJqQyxvQkFBb0IsQ0E0RGhDO0FBNURZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vYW5ndWxhciBpbXBvcnRzXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFVybFNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vL25hdGl2ZXNjcmlwdCBpbXBvcnRzXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSAndWkvdGV4dC12aWV3JztcbmltcG9ydCB7IFNjcm9sbFZpZXcgfSBmcm9tICd1aS9zY3JvbGwtdmlldyc7XG5pbXBvcnQgeyBpc0lPUywgaXNBbmRyb2lkIH0gZnJvbSAncGxhdGZvcm0nO1xuXG4vLzNyZCBwYXJ0eSBpbXBvcnRzXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5cbi8vYXBwIGltcG9ydHNcbmltcG9ydCB7IHNsaWRlSW5Eb3duQW5pbWF0aW9uLCBzbGlkZUluQW5pbWF0aW9ucyB9IGZyb20gJy4uLy4uL3NoYXJlZC9hbmltYXRpb25zJztcbmltcG9ydCB7IEJhY2tsb2dTZXJ2aWNlLCBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uLy4uL3R5cGluZ3MvZG9tYWluJztcbmltcG9ydCBJUFRJdGVtID0gUFREb21haW4uSVBUSXRlbTtcbmltcG9ydCBJVGFzayA9IFBURG9tYWluLklUYXNrO1xuaW1wb3J0IElOZXdUYXNrID0gUFREb21haW4uSU5ld1Rhc2s7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3B0LWl0ZW0tdGFza3MnLFxuICAgIHRlbXBsYXRlVXJsOiAncHQtaXRlbS10YXNrcy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3B0LWl0ZW0tdGFza3MuY29tcG9uZW50LmNzcyddLFxuICAgIGFuaW1hdGlvbnM6IHNsaWRlSW5BbmltYXRpb25zXG59KVxuZXhwb3J0IGNsYXNzIFBUSXRlbVRhc2tzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIHNlbGVjdGVkVmlld0luZGV4ID0gMDtcbiAgICBwdWJsaWMgaXRlbTogSVBUSXRlbTtcbiAgICBwdWJsaWMgbmV3VGFza1RpdGxlOiBzdHJpbmcgPSAnJztcblxuICAgIHB1YmxpYyBnZXQgdGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0udGFza3M7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgZ2V0IGFuaW1hdGlvblN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFZpZXdJbmRleCA9PT0gMiA/ICdvZmYnIDogJ29uJztcbiAgICB9XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgYmFja2xvZ1NlcnZpY2U6IEJhY2tsb2dTZXJ2aWNlKSB7IH1cblxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmVudC5wYXJhbXNcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLmJhY2tsb2dTZXJ2aWNlLmdldEl0ZW0ocGFyYW1zWydpZCddKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGl0ZW06IElQVEl0ZW0pID0+IHRoaXMuaXRlbSA9IGl0ZW0pO1xuICAgIH1cblxuXG5cbiAgICBwdWJsaWMgdG9nZ2xlVGFwcGVkKHRhc2s6IElUYXNrKSB7XG4gICAgICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UudG9nZ2xlVGFzayh0aGlzLml0ZW0sIHRhc2spO1xuICAgIH1cblxuXG4gICAgcHVibGljIGFkZFRhcHBlZChuZXdUYXNrVFY6IFRleHRWaWV3KSB7XG4gICAgICAgIGxldCBuZXdUaXRsZSA9IHRoaXMubmV3VGFza1RpdGxlLnRyaW0oKTtcbiAgICAgICAgaWYgKG5ld1RpdGxlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IG5ld1Rhc2s6IElOZXdUYXNrID0ge1xuICAgICAgICAgICAgdGl0bGU6IG5ld1RpdGxlLFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJhY2tsb2dTZXJ2aWNlLmFkZFRhc2sodGhpcy5pdGVtLCBuZXdUYXNrKTtcbiAgICAgICAgdGhpcy5uZXdUYXNrVGl0bGUgPSAnJztcbiAgICAgICAgbmV3VGFza1RWLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWF0aENlaWwobnVtOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChudW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB0YXNrSGVpZ2h0KHRhc2tUaXRsZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBsaW5lSGVpZ2h0ID0gaXNJT1MgPyAyMCA6IDMwO1xuICAgICAgICBsZXQgbnVtbGluZXMgPSBNYXRoLmNlaWwodGFza1RpdGxlLmxlbmd0aCAvIDI1KTtcbiAgICAgICAgcmV0dXJuICgobnVtbGluZXMgPCAyID8gMiA6IG51bWxpbmVzKSAqIGxpbmVIZWlnaHQpICsgMTA7XG4gICAgfVxuXG4gICAgcHVibGljIHRhc2tUaXRsZUNoYW5nZSh0YXNrOiBJVGFzaywgYXJnczogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UudXBkYXRlVGFzayh0aGlzLml0ZW0sIHRhc2ssIGFyZ3MpO1xuICAgIH1cbn1cbiJdfQ==