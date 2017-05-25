"use strict";
var core_1 = require("@angular/core");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1kaXNwbGF5LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eXBlLWRpc3BsYXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW9EO0FBRXBELHdEQUF3RDtBQU14RCxJQUFhLGVBQWU7SUFBNUI7SUFJQSxDQUFDO0lBSEcsbUNBQVMsR0FBVCxVQUFVLEtBQWE7UUFDbkIsTUFBTSxDQUFDLDBCQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxlQUFlO0lBSjNCLFdBQUksQ0FBQztRQUNGLElBQUksRUFBRSxhQUFhO0tBQ3RCLENBQUM7R0FFVyxlQUFlLENBSTNCO0FBSlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEl0ZW1UeXBlRW51bSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zdGF0aWMtZGF0YSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAndHlwZURpc3BsYXknXG59KVxuXG5leHBvcnQgY2xhc3MgVHlwZURpc3BsYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpOiBhbnkge1xuICAgICAgICByZXR1cm4gSXRlbVR5cGVFbnVtW3ZhbHVlXTtcbiAgICB9XG59Il19