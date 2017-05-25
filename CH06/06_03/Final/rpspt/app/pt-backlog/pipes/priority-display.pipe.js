"use strict";
//angular imports
var core_1 = require("@angular/core");
//app imports
var static_data_1 = require("../../shared/static-data");
var PriorityDisplayPipe = (function () {
    function PriorityDisplayPipe() {
    }
    PriorityDisplayPipe.prototype.transform = function (value) {
        return static_data_1.PriorityEnum[value];
    };
    return PriorityDisplayPipe;
}());
PriorityDisplayPipe = __decorate([
    core_1.Pipe({
        name: 'priorityDisplay'
    })
], PriorityDisplayPipe);
exports.PriorityDisplayPipe = PriorityDisplayPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpb3JpdHktZGlzcGxheS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJpb3JpdHktZGlzcGxheS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQkFBaUI7QUFDakIsc0NBQW9EO0FBR3BELGFBQWE7QUFDYix3REFBd0Q7QUFLeEQsSUFBYSxtQkFBbUI7SUFBaEM7SUFJQSxDQUFDO0lBSEcsdUNBQVMsR0FBVCxVQUFVLEtBQW1CO1FBQ3pCLE1BQU0sQ0FBQywwQkFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksbUJBQW1CO0lBSC9CLFdBQUksQ0FBQztRQUNGLElBQUksRUFBRSxpQkFBaUI7S0FDMUIsQ0FBQztHQUNXLG1CQUFtQixDQUkvQjtBQUpZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vYW5ndWxhciBpbXBvcnRzXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuLy9hcHAgaW1wb3J0c1xuaW1wb3J0IHsgUHJpb3JpdHlFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdwcmlvcml0eURpc3BsYXknXG59KVxuZXhwb3J0IGNsYXNzIFByaW9yaXR5RGlzcGxheVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0odmFsdWU6IFByaW9yaXR5RW51bSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBQcmlvcml0eUVudW1bdmFsdWVdO1xuICAgIH1cbn0iXX0=