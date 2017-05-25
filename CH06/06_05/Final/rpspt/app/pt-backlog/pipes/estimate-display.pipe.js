"use strict";
//angular imports
var core_1 = require("@angular/core");
var EstimateDisplayPipe = (function () {
    function EstimateDisplayPipe() {
    }
    EstimateDisplayPipe.prototype.transform = function (value) {
        if (value === 1) {
            return '1 point';
        }
        else {
            return value + ' points';
        }
    };
    return EstimateDisplayPipe;
}());
EstimateDisplayPipe = __decorate([
    core_1.Pipe({
        name: 'estimateDisplay'
    })
], EstimateDisplayPipe);
exports.EstimateDisplayPipe = EstimateDisplayPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXN0aW1hdGUtZGlzcGxheS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXN0aW1hdGUtZGlzcGxheS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQkFBaUI7QUFDakIsc0NBQW9EO0FBS3BELElBQWEsbUJBQW1CO0lBQWhDO0lBUUEsQ0FBQztJQVBHLHVDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNyQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUM3QixDQUFDO0lBQ0wsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxtQkFBbUI7SUFIL0IsV0FBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLGlCQUFpQjtLQUMxQixDQUFDO0dBQ1csbUJBQW1CLENBUS9CO0FBUlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy9hbmd1bGFyIGltcG9ydHNcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdlc3RpbWF0ZURpc3BsYXknXG59KVxuZXhwb3J0IGNsYXNzIEVzdGltYXRlRGlzcGxheVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuICcxIHBvaW50JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSArICcgcG9pbnRzJztcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=