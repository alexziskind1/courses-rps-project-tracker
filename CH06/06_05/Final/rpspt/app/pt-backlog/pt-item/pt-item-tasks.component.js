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
        //this.backlogService.toggleTask(this.item, task);
    };
    PTItemTasksComponent.prototype.addTapped = function (newTaskTV) {
        var newTitle = this.newTaskTitle.trim();
        if (newTitle.length === 0)
            return;
        var newTask = {
            title: newTitle,
            completed: false
        };
        //this.backlogService.addTask(this.item, newTask);
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
        //this.backlogService.updateTask(this.item, task, args);
    };
    return PTItemTasksComponent;
}());
PTItemTasksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pt-item-tasks',
        templateUrl: 'pt-item-tasks.component.html',
        styleUrls: ['pt-item-tasks.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        router_2.RouterExtensions,
        services_1.BacklogService])
], PTItemTasksComponent);
exports.PTItemTasksComponent = PTItemTasksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS10YXNrcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLXRhc2tzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBQWlCO0FBQ2pCLHNDQUFrRDtBQUNsRCwwQ0FBNkU7QUFFN0Usc0JBQXNCO0FBQ3RCLHNEQUErRDtBQUcvRCxxQ0FBNEM7QUFFNUMsbUJBQW1CO0FBQ25CLHVDQUFxQztBQUVyQyxhQUFhO0FBQ2IsMkNBQXVFO0FBYXZFLElBQWEsb0JBQW9CO0lBZTdCLDhCQUFvQixLQUFxQixFQUM3QixNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLGNBQThCO1FBSHRCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQzdCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWpCbEMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBRXZCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO0lBZWEsQ0FBQztJQWIvQyxzQkFBVyx1Q0FBSzthQUFoQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLGdEQUFjO2FBQXpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTtJQVNNLHVDQUFRLEdBQWY7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDbkIsU0FBUyxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQXpDLENBQXlDLENBQUM7YUFDeEUsU0FBUyxDQUFDLFVBQUMsSUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBSU0sMkNBQVksR0FBbkIsVUFBb0IsSUFBVztRQUMzQixrREFBa0Q7SUFDdEQsQ0FBQztJQUdNLHdDQUFTLEdBQWhCLFVBQWlCLFNBQW1CO1FBQ2hDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDO1FBQ1gsSUFBSSxPQUFPLEdBQWE7WUFDcEIsS0FBSyxFQUFFLFFBQVE7WUFDZixTQUFTLEVBQUUsS0FBSztTQUNuQixDQUFDO1FBQ0Ysa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTSx1Q0FBUSxHQUFmLFVBQWdCLEdBQVc7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLHlDQUFVLEdBQWpCLFVBQWtCLFNBQWlCO1FBQy9CLElBQUksVUFBVSxHQUFHLGdCQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNqQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDN0QsQ0FBQztJQUVNLDhDQUFlLEdBQXRCLFVBQXVCLElBQVcsRUFBRSxJQUFZO1FBQzVDLHdEQUF3RDtJQUM1RCxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDLEFBNURELElBNERDO0FBNURZLG9CQUFvQjtJQU5oQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7S0FDN0MsQ0FBQztxQ0FnQjZCLHVCQUFjO1FBQ3JCLGVBQU07UUFDSSx5QkFBZ0I7UUFDbEIseUJBQWM7R0FsQmpDLG9CQUFvQixDQTREaEM7QUE1RFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy9hbmd1bGFyIGltcG9ydHNcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgVXJsU2VnbWVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vbmF0aXZlc2NyaXB0IGltcG9ydHNcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tICd1aS90ZXh0LXZpZXcnO1xuaW1wb3J0IHsgU2Nyb2xsVmlldyB9IGZyb20gJ3VpL3Njcm9sbC12aWV3JztcbmltcG9ydCB7IGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tICdwbGF0Zm9ybSc7XG5cbi8vM3JkIHBhcnR5IGltcG9ydHNcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcblxuLy9hcHAgaW1wb3J0c1xuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UsIEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElQVEl0ZW0gPSBQVERvbWFpbi5JUFRJdGVtO1xuaW1wb3J0IElUYXNrID0gUFREb21haW4uSVRhc2s7XG5pbXBvcnQgSU5ld1Rhc2sgPSBQVERvbWFpbi5JTmV3VGFzaztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAncHQtaXRlbS10YXNrcycsXG4gICAgdGVtcGxhdGVVcmw6ICdwdC1pdGVtLXRhc2tzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsncHQtaXRlbS10YXNrcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUFRJdGVtVGFza3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgc2VsZWN0ZWRWaWV3SW5kZXggPSAwO1xuICAgIHB1YmxpYyBpdGVtOiBJUFRJdGVtO1xuICAgIHB1YmxpYyBuZXdUYXNrVGl0bGU6IHN0cmluZyA9ICcnO1xuXG4gICAgcHVibGljIGdldCB0YXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS50YXNrcztcbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZXQgYW5pbWF0aW9uU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVmlld0luZGV4ID09PSAyID8gJ29mZicgOiAnb24nO1xuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBiYWNrbG9nU2VydmljZTogQmFja2xvZ1NlcnZpY2UpIHsgfVxuXG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGUucGFyZW50LnBhcmFtc1xuICAgICAgICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMuYmFja2xvZ1NlcnZpY2UuZ2V0SXRlbShwYXJhbXNbJ2lkJ10pKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoaXRlbTogSVBUSXRlbSkgPT4gdGhpcy5pdGVtID0gaXRlbSk7XG4gICAgfVxuXG5cblxuICAgIHB1YmxpYyB0b2dnbGVUYXBwZWQodGFzazogSVRhc2spIHtcbiAgICAgICAgLy90aGlzLmJhY2tsb2dTZXJ2aWNlLnRvZ2dsZVRhc2sodGhpcy5pdGVtLCB0YXNrKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBhZGRUYXBwZWQobmV3VGFza1RWOiBUZXh0Vmlldykge1xuICAgICAgICBsZXQgbmV3VGl0bGUgPSB0aGlzLm5ld1Rhc2tUaXRsZS50cmltKCk7XG4gICAgICAgIGlmIChuZXdUaXRsZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBuZXdUYXNrOiBJTmV3VGFzayA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBuZXdUaXRsZSxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgLy90aGlzLmJhY2tsb2dTZXJ2aWNlLmFkZFRhc2sodGhpcy5pdGVtLCBuZXdUYXNrKTtcbiAgICAgICAgdGhpcy5uZXdUYXNrVGl0bGUgPSAnJztcbiAgICAgICAgbmV3VGFza1RWLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWF0aENlaWwobnVtOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChudW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB0YXNrSGVpZ2h0KHRhc2tUaXRsZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBsaW5lSGVpZ2h0ID0gaXNJT1MgPyAyMCA6IDMwO1xuICAgICAgICBsZXQgbnVtbGluZXMgPSBNYXRoLmNlaWwodGFza1RpdGxlLmxlbmd0aCAvIDI1KTtcbiAgICAgICAgcmV0dXJuICgobnVtbGluZXMgPCAyID8gMiA6IG51bWxpbmVzKSAqIGxpbmVIZWlnaHQpICsgMTA7XG4gICAgfVxuXG4gICAgcHVibGljIHRhc2tUaXRsZUNoYW5nZSh0YXNrOiBJVGFzaywgYXJnczogc3RyaW5nKSB7XG4gICAgICAgIC8vdGhpcy5iYWNrbG9nU2VydmljZS51cGRhdGVUYXNrKHRoaXMuaXRlbSwgdGFzaywgYXJncyk7XG4gICAgfVxufVxuIl19