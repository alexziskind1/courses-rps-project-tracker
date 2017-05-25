"use strict";
var core_1 = require("@angular/core");
var _ = require("lodash");
var user_service_1 = require("./user.service");
var mock_data_service_1 = require("./mock-data.service");
var static_data_1 = require("../shared/static-data");
var BacklogService = (function () {
    function BacklogService(mockDataService, userService) {
        this.mockDataService = mockDataService;
        this.userService = userService;
        this._allItems = [];
        this._filteredItems = [];
        this._allItems = mockDataService.generatePTItems(userService.users);
    }
    Object.defineProperty(BacklogService.prototype, "items", {
        get: function () {
            return this._allItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BacklogService.prototype, "filteredItems", {
        get: function () {
            return this._filteredItems;
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
    BacklogService.prototype.deleteItem = function (item) {
        _.remove(this._allItems, function (ptitem) { return ptitem.id === item.id; });
        this.filter(1);
    };
    BacklogService.prototype.filter = function (selectedViewIndex) {
        var filteredItems = [];
        switch (selectedViewIndex) {
            case 0:
                filteredItems = this._allItems.filter(function (i) { return i.assignee.fullName === 'Alex Ziskind'; });
                break;
            case 1:
                filteredItems = this._allItems.filter(function (i) { return i.status === static_data_1.StatusEnum.Open || i.status === static_data_1.StatusEnum.ReOpened; });
                break;
            case 2:
                filteredItems = this._allItems.filter(function (i) { return i.status === static_data_1.StatusEnum.Closed; });
                break;
            default:
                filteredItems = this._allItems;
        }
        this._filteredItems = filteredItems;
    };
    return BacklogService;
}());
BacklogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [mock_data_service_1.MockDataService,
        user_service_1.UserService])
], BacklogService);
exports.BacklogService = BacklogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2xvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2xvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFFM0MsMEJBQTRCO0FBRTVCLCtDQUE2QztBQUM3Qyx5REFBc0Q7QUFDdEQscURBQStFO0FBTS9FLElBQWEsY0FBYztJQVl2Qix3QkFDWSxlQUFnQyxFQUNoQyxXQUF3QjtRQUR4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFiNUIsY0FBUyxHQUFtQixFQUFFLENBQUM7UUFDL0IsbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBY3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQWJELHNCQUFXLGlDQUFLO2FBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx5Q0FBYTthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBU00sZ0NBQU8sR0FBZCxVQUFlLEVBQVU7UUFDckIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLHFDQUFZLEdBQW5CLFVBQW9CLElBQWE7SUFFakMsQ0FBQztJQUVNLG1DQUFVLEdBQWpCLFVBQWtCLElBQWE7UUFDM0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFyQixDQUFxQixDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRU0sK0JBQU0sR0FBYixVQUFjLGlCQUF5QjtRQUNuQyxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDdkIsTUFBTSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUssQ0FBQztnQkFDRixhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxjQUFjLEVBQXRDLENBQXNDLENBQUMsQ0FBQztnQkFDbkYsS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLEtBQUssd0JBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyx3QkFBVSxDQUFDLFFBQVEsRUFBaEUsQ0FBZ0UsQ0FBQyxDQUFDO2dCQUM3RyxLQUFLLENBQUM7WUFDVixLQUFLLENBQUM7Z0JBQ0YsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sS0FBSyx3QkFBVSxDQUFDLE1BQU0sRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2dCQUMzRSxLQUFLLENBQUM7WUFDVjtnQkFDSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN2QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7SUFDeEMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQztBQWxEWSxjQUFjO0lBRDFCLGlCQUFVLEVBQUU7cUNBY29CLG1DQUFlO1FBQ25CLDBCQUFXO0dBZDNCLGNBQWMsQ0FrRDFCO0FBbERZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9ja0RhdGFTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBJdGVtVHlwZUVudW0sIFByaW9yaXR5RW51bSwgU3RhdHVzRW51bSB9IGZyb20gJy4uL3NoYXJlZC9zdGF0aWMtZGF0YSc7XG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uL3R5cGluZ3MvZG9tYWluJztcbmltcG9ydCBJUFRJdGVtID0gUFREb21haW4uSVBUSXRlbTtcbmltcG9ydCBJVXNlciA9IFBURG9tYWluLklVc2VyO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFja2xvZ1NlcnZpY2Uge1xuICAgIHByaXZhdGUgX2FsbEl0ZW1zOiBBcnJheTxJUFRJdGVtPiA9IFtdO1xuICAgIHByaXZhdGUgX2ZpbHRlcmVkSXRlbXM6IEFycmF5PElQVEl0ZW0+ID0gW107XG5cbiAgICBwdWJsaWMgZ2V0IGl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWxsSXRlbXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBmaWx0ZXJlZEl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyZWRJdGVtcztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBtb2NrRGF0YVNlcnZpY2U6IE1vY2tEYXRhU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5fYWxsSXRlbXMgPSBtb2NrRGF0YVNlcnZpY2UuZ2VuZXJhdGVQVEl0ZW1zKHVzZXJTZXJ2aWNlLnVzZXJzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SXRlbShpZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSBfLmZpbmQodGhpcy5fYWxsSXRlbXMsIGkgPT4gaS5pZCA9PSBpZCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlUHRJdGVtKGl0ZW06IElQVEl0ZW0pIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVJdGVtKGl0ZW06IElQVEl0ZW0pIHtcbiAgICAgICAgXy5yZW1vdmUodGhpcy5fYWxsSXRlbXMsIChwdGl0ZW0pID0+IHB0aXRlbS5pZCA9PT0gaXRlbS5pZCk7XG4gICAgICAgIHRoaXMuZmlsdGVyKDEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaWx0ZXIoc2VsZWN0ZWRWaWV3SW5kZXg6IG51bWJlcikge1xuICAgICAgICB2YXIgZmlsdGVyZWRJdGVtcyA9IFtdO1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkVmlld0luZGV4KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2FsbEl0ZW1zLmZpbHRlcihpID0+IGkuYXNzaWduZWUuZnVsbE5hbWUgPT09ICdBbGV4IFppc2tpbmQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5fYWxsSXRlbXMuZmlsdGVyKGkgPT4gaS5zdGF0dXMgPT09IFN0YXR1c0VudW0uT3BlbiB8fCBpLnN0YXR1cyA9PT0gU3RhdHVzRW51bS5SZU9wZW5lZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2FsbEl0ZW1zLmZpbHRlcihpID0+IGkuc3RhdHVzID09PSBTdGF0dXNFbnVtLkNsb3NlZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMgPSB0aGlzLl9hbGxJdGVtcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcztcbiAgICB9XG59XG4iXX0=