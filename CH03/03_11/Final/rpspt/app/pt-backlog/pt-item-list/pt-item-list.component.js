"use strict";
var core_1 = require("@angular/core");
var backlog_service_1 = require("../../services/backlog.service");
var static_data_1 = require("../../shared/static-data");
var PTItemListComponent = (function () {
    function PTItemListComponent(backlogService) {
        this.backlogService = backlogService;
    }
    PTItemListComponent.prototype.ngOnInit = function () {
        this.ptItems = this.backlogService.items;
    };
    PTItemListComponent.prototype.listItemTap = function (args) {
        var lv = args.object;
        var item = lv.items[args.index];
        alert(item.title);
    };
    PTItemListComponent.prototype.getIndicatorClass = function (item) {
        return static_data_1.ItemTypeEnum.getIndicatorClass(item.type);
    };
    return PTItemListComponent;
}());
PTItemListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pt-item-list',
        templateUrl: 'pt-item-list.component.html',
        styleUrls: ['pt-item-list.component.css']
    }),
    __metadata("design:paramtypes", [backlog_service_1.BacklogService])
], PTItemListComponent);
exports.PTItemListComponent = PTItemListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUVsRCxrRUFBZ0U7QUFFaEUsd0RBQWtGO0FBVWxGLElBQWEsbUJBQW1CO0lBSTVCLDZCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBSSxDQUFDO0lBRXZELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQzdDLENBQUM7SUFFTSx5Q0FBVyxHQUFsQixVQUFtQixJQUFTO1FBQ3hCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0sK0NBQWlCLEdBQXhCLFVBQXlCLElBQWE7UUFDbEMsTUFBTSxDQUFDLDBCQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLDZCQUE2QjtRQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztLQUM1QyxDQUFDO3FDQUtzQyxnQ0FBYztHQUp6QyxtQkFBbUIsQ0FtQi9CO0FBbkJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJhY2tsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYmFja2xvZy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgSXRlbVR5cGVFbnVtLCBQcmlvcml0eUVudW0sIFN0YXR1c0VudW0gfSBmcm9tICcuLi8uLi9zaGFyZWQvc3RhdGljLWRhdGEnO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi8uLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSVBUSXRlbSA9IFBURG9tYWluLklQVEl0ZW07XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1pdGVtLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAncHQtaXRlbS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsncHQtaXRlbS1saXN0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQVEl0ZW1MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgcHRJdGVtczogSVBUSXRlbVtdO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tsb2dTZXJ2aWNlOiBCYWNrbG9nU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wdEl0ZW1zID0gdGhpcy5iYWNrbG9nU2VydmljZS5pdGVtcztcbiAgICB9XG5cbiAgICBwdWJsaWMgbGlzdEl0ZW1UYXAoYXJnczogYW55KSB7XG4gICAgICAgIGxldCBsdiA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBsZXQgaXRlbSA9IGx2Lml0ZW1zW2FyZ3MuaW5kZXhdO1xuICAgICAgICBhbGVydChpdGVtLnRpdGxlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW5kaWNhdG9yQ2xhc3MoaXRlbTogSVBUSXRlbSkge1xuICAgICAgICByZXR1cm4gSXRlbVR5cGVFbnVtLmdldEluZGljYXRvckNsYXNzKGl0ZW0udHlwZSk7XG4gICAgfVxufVxuXG4iXX0=