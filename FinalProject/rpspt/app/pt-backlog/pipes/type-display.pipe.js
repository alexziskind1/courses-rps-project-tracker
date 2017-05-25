"use strict";
//angular imports
var core_1 = require("@angular/core");
//app imports
var static_data_1 = require("../../shared/static-data");
var TypeDisplayPipe = (function () {
    function TypeDisplayPipe() {
    }
    TypeDisplayPipe.prototype.transform = function (value) {
        return static_data_1.ItemTypeEnum[value];
    };
    return TypeDisplayPipe;
}());
TypeDisplayPipe = __decorate([
    core_1.Pipe({
        name: 'typeDisplay'
    })
], TypeDisplayPipe);
exports.TypeDisplayPipe = TypeDisplayPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1kaXNwbGF5LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eXBlLWRpc3BsYXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBQWlCO0FBQ2pCLHNDQUFvRDtBQUdwRCxhQUFhO0FBQ2Isd0RBQXdEO0FBS3hELElBQWEsZUFBZTtJQUE1QjtJQUlBLENBQUM7SUFIRyxtQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixNQUFNLENBQUMsMEJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLGVBQWU7SUFIM0IsV0FBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLGFBQWE7S0FDdEIsQ0FBQztHQUNXLGVBQWUsQ0FJM0I7QUFKWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIi8vYW5ndWxhciBpbXBvcnRzXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuLy9hcHAgaW1wb3J0c1xuaW1wb3J0IHsgSXRlbVR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICd0eXBlRGlzcGxheSdcbn0pXG5leHBvcnQgY2xhc3MgVHlwZURpc3BsYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gSXRlbVR5cGVFbnVtW3ZhbHVlXTtcbiAgICB9XG59Il19