"use strict";
var core_1 = require("@angular/core");
var services_1 = require("../../services");
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
    __metadata("design:paramtypes", [services_1.BacklogService])
], PTItemListComponent);
exports.PTItemListComponent = PTItemListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUVsRCwyQ0FBZ0Q7QUFFaEQsd0RBQWtGO0FBVWxGLElBQWEsbUJBQW1CO0lBSTVCLDZCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBSSxDQUFDO0lBRXZELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQzdDLENBQUM7SUFFTSx5Q0FBVyxHQUFsQixVQUFtQixJQUFTO1FBQ3hCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0sK0NBQWlCLEdBQXhCLFVBQXlCLElBQWE7UUFDbEMsTUFBTSxDQUFDLDBCQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLDZCQUE2QjtRQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztLQUM1QyxDQUFDO3FDQUtzQyx5QkFBYztHQUp6QyxtQkFBbUIsQ0FtQi9CO0FBbkJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJhY2tsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuXG5pbXBvcnQgeyBJdGVtVHlwZUVudW0sIFByaW9yaXR5RW51bSwgU3RhdHVzRW51bSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zdGF0aWMtZGF0YSc7XG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uLy4uL3R5cGluZ3MvZG9tYWluJztcbmltcG9ydCBJUFRJdGVtID0gUFREb21haW4uSVBUSXRlbTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3B0LWl0ZW0tbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICdwdC1pdGVtLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydwdC1pdGVtLWxpc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBUSXRlbUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBwdEl0ZW1zOiBJUFRJdGVtW107XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFja2xvZ1NlcnZpY2U6IEJhY2tsb2dTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnB0SXRlbXMgPSB0aGlzLmJhY2tsb2dTZXJ2aWNlLml0ZW1zO1xuICAgIH1cblxuICAgIHB1YmxpYyBsaXN0SXRlbVRhcChhcmdzOiBhbnkpIHtcbiAgICAgICAgbGV0IGx2ID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGxldCBpdGVtID0gbHYuaXRlbXNbYXJncy5pbmRleF07XG4gICAgICAgIGFsZXJ0KGl0ZW0udGl0bGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbmRpY2F0b3JDbGFzcyhpdGVtOiBJUFRJdGVtKSB7XG4gICAgICAgIHJldHVybiBJdGVtVHlwZUVudW0uZ2V0SW5kaWNhdG9yQ2xhc3MoaXRlbS50eXBlKTtcbiAgICB9XG59XG5cbiJdfQ==