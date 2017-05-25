"use strict";
//angular imports
var core_1 = require("@angular/core");
//app imports
var static_data_1 = require("../../shared/static-data");
var PriorityClassPipe = (function () {
    function PriorityClassPipe() {
    }
    PriorityClassPipe.prototype.transform = function (value) {
        return static_data_1.PriorityEnum.getIndicatorClass(value);
    };
    return PriorityClassPipe;
}());
PriorityClassPipe = __decorate([
    core_1.Pipe({
        name: 'priorityClass'
    })
], PriorityClassPipe);
exports.PriorityClassPipe = PriorityClassPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpb3JpdHktY2xhc3MucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByaW9yaXR5LWNsYXNzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQUFpQjtBQUNqQixzQ0FBb0Q7QUFHcEQsYUFBYTtBQUNiLHdEQUF3RDtBQUt4RCxJQUFhLGlCQUFpQjtJQUE5QjtJQUlBLENBQUM7SUFIRyxxQ0FBUyxHQUFULFVBQVUsS0FBbUI7UUFDekIsTUFBTSxDQUFDLDBCQUFZLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxpQkFBaUI7SUFIN0IsV0FBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLGVBQWU7S0FDeEIsQ0FBQztHQUNXLGlCQUFpQixDQUk3QjtBQUpZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vYW5ndWxhciBpbXBvcnRzXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuLy9hcHAgaW1wb3J0c1xuaW1wb3J0IHsgUHJpb3JpdHlFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdwcmlvcml0eUNsYXNzJ1xufSlcbmV4cG9ydCBjbGFzcyBQcmlvcml0eUNsYXNzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybSh2YWx1ZTogUHJpb3JpdHlFbnVtKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFByaW9yaXR5RW51bS5nZXRJbmRpY2F0b3JDbGFzcyh2YWx1ZSk7XG4gICAgfVxufSJdfQ==