"use strict";
//angular imports
var core_1 = require("@angular/core");
//app imports
var static_data_1 = require("../../shared/static-data");
var StatusDisplayPipe = (function () {
    function StatusDisplayPipe() {
    }
    StatusDisplayPipe.prototype.transform = function (value) {
        return static_data_1.StatusEnum[value];
    };
    return StatusDisplayPipe;
}());
StatusDisplayPipe = __decorate([
    core_1.Pipe({
        name: 'statusDisplay'
    })
], StatusDisplayPipe);
exports.StatusDisplayPipe = StatusDisplayPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWRpc3BsYXkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXR1cy1kaXNwbGF5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQUFpQjtBQUNqQixzQ0FBb0Q7QUFHcEQsYUFBYTtBQUNiLHdEQUFzRDtBQUt0RCxJQUFhLGlCQUFpQjtJQUE5QjtJQUlBLENBQUM7SUFIRyxxQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixNQUFNLENBQUMsd0JBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLGlCQUFpQjtJQUg3QixXQUFJLENBQUM7UUFDRixJQUFJLEVBQUUsZUFBZTtLQUN4QixDQUFDO0dBQ1csaUJBQWlCLENBSTdCO0FBSlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLy9hbmd1bGFyIGltcG9ydHNcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG4vL2FwcCBpbXBvcnRzXG5pbXBvcnQgeyBTdGF0dXNFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdzdGF0dXNEaXNwbGF5J1xufSlcbmV4cG9ydCBjbGFzcyBTdGF0dXNEaXNwbGF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFN0YXR1c0VudW1bdmFsdWVdO1xuICAgIH1cbn0iXX0=