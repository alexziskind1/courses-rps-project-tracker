"use strict";
var core_1 = require("@angular/core");
var _ = require("lodash");
var user_service_1 = require("./user.service");
var mock_data_service_1 = require("./mock-data.service");
var BacklogService = (function () {
    function BacklogService(mockDataService, userService) {
        this.mockDataService = mockDataService;
        this.userService = userService;
        this._allItems = [];
        this._allItems = mockDataService.generatePTItems(userService.users);
    }
    Object.defineProperty(BacklogService.prototype, "items", {
        get: function () {
            return this._allItems;
        },
        enumerable: true,
        configurable: true
    });
    BacklogService.prototype.getItem = function (id) {
        var selectedItem = _.find(this._allItems, function (i) { return i.id == id; });
        return Promise.resolve(selectedItem);
    };
    BacklogService.prototype.updatePtItem = function (item) {
    };
    return BacklogService;
}());
BacklogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [mock_data_service_1.MockDataService,
        user_service_1.UserService])
], BacklogService);
exports.BacklogService = BacklogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2xvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2xvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFFM0MsMEJBQTRCO0FBRTVCLCtDQUE2QztBQUM3Qyx5REFBc0Q7QUFPdEQsSUFBYSxjQUFjO0lBT3ZCLHdCQUNZLGVBQWdDLEVBQ2hDLFdBQXdCO1FBRHhCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVI1QixjQUFTLEdBQW1CLEVBQUUsQ0FBQztRQVVuQyxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFURCxzQkFBVyxpQ0FBSzthQUFoQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBU00sZ0NBQU8sR0FBZCxVQUFlLEVBQVU7UUFDckIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLHFDQUFZLEdBQW5CLFVBQW9CLElBQWE7SUFFakMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCWSxjQUFjO0lBRDFCLGlCQUFVLEVBQUU7cUNBU29CLG1DQUFlO1FBQ25CLDBCQUFXO0dBVDNCLGNBQWMsQ0FzQjFCO0FBdEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9ja0RhdGFTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBJdGVtVHlwZUVudW0sIFByaW9yaXR5RW51bSwgU3RhdHVzRW51bSB9IGZyb20gJy4uL3NoYXJlZC9zdGF0aWMtZGF0YSc7XG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uL3R5cGluZ3MvZG9tYWluJztcbmltcG9ydCBJUFRJdGVtID0gUFREb21haW4uSVBUSXRlbTtcbmltcG9ydCBJVXNlciA9IFBURG9tYWluLklVc2VyO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFja2xvZ1NlcnZpY2Uge1xuICAgIHByaXZhdGUgX2FsbEl0ZW1zOiBBcnJheTxJUFRJdGVtPiA9IFtdO1xuXG4gICAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG1vY2tEYXRhU2VydmljZTogTW9ja0RhdGFTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLl9hbGxJdGVtcyA9IG1vY2tEYXRhU2VydmljZS5nZW5lcmF0ZVBUSXRlbXModXNlclNlcnZpY2UudXNlcnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJdGVtKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IF8uZmluZCh0aGlzLl9hbGxJdGVtcywgaSA9PiBpLmlkID09IGlkKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxlY3RlZEl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVQdEl0ZW0oaXRlbTogSVBUSXRlbSkge1xuXG4gICAgfVxufVxuIl19