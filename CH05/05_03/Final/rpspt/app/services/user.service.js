"use strict";
//angular imports
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
//3rd party imports
var _ = require("lodash");
//app imports
var mock_data_service_1 = require("./mock-data.service");
var UserService = (function () {
    function UserService(mockDataService) {
        this.mockDataService = mockDataService;
        this._generatedUsers = [];
        this._generatedUsers = this.mockDataService.generateUsers();
    }
    Object.defineProperty(UserService.prototype, "users", {
        get: function () {
            return this._generatedUsers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "usersObs", {
        get: function () {
            var _this = this;
            return Rx_1.Observable.create(function (observer) {
                _this._observer = observer;
                observer.next(_this._generatedUsers);
            });
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.getUserAvatar = function (userId) {
        var user = _.find(this.users, function (user) { return user.id === userId; });
        return user.avatar;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [mock_data_service_1.MockDataService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQkFBaUI7QUFDakIsc0NBQTJDO0FBQzNDLDhCQUErQztBQUUvQyxtQkFBbUI7QUFDbkIsMEJBQTRCO0FBRTVCLGFBQWE7QUFDYix5REFBc0Q7QUFLdEQsSUFBYSxXQUFXO0lBZ0JwQixxQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBZDVDLG9CQUFlLEdBQWlCLEVBQUUsQ0FBQztRQWV2QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEUsQ0FBQztJQWJELHNCQUFXLDhCQUFLO2FBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxpQ0FBUTthQUFuQjtZQUFBLGlCQUtDO1lBSkcsTUFBTSxDQUFDLGVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUFnQztnQkFDdEQsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQzs7O09BQUE7SUFNTSxtQ0FBYSxHQUFwQixVQUFxQixNQUFjO1FBQy9CLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBaUI0QixtQ0FBZTtHQWhCM0MsV0FBVyxDQXlCdkI7QUF6Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvL2FuZ3VsYXIgaW1wb3J0c1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tIFwicnhqcy9SeFwiO1xuXG4vLzNyZCBwYXJ0eSBpbXBvcnRzXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbi8vYXBwIGltcG9ydHNcbmltcG9ydCB7IE1vY2tEYXRhU2VydmljZSB9IGZyb20gJy4vbW9jay1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSVVzZXIgPSBQVERvbWFpbi5JVXNlcjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX2dlbmVyYXRlZFVzZXJzOiBBcnJheTxJVXNlcj4gPSBbXTtcbiAgICBwcml2YXRlIF9vYnNlcnZlcjogT2JzZXJ2ZXI8QXJyYXk8SVVzZXI+PjtcblxuICAgIHB1YmxpYyBnZXQgdXNlcnMoKTogQXJyYXk8SVVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dlbmVyYXRlZFVzZXJzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdXNlcnNPYnMoKTogT2JzZXJ2YWJsZTxBcnJheTxJVXNlcj4+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8QXJyYXk8SVVzZXI+PikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQodGhpcy5fZ2VuZXJhdGVkVXNlcnMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vY2tEYXRhU2VydmljZTogTW9ja0RhdGFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX2dlbmVyYXRlZFVzZXJzID0gdGhpcy5tb2NrRGF0YVNlcnZpY2UuZ2VuZXJhdGVVc2VycygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVc2VyQXZhdGFyKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCB1c2VyID0gXy5maW5kKHRoaXMudXNlcnMsICh1c2VyKSA9PiB1c2VyLmlkID09PSB1c2VySWQpO1xuICAgICAgICByZXR1cm4gdXNlci5hdmF0YXI7XG4gICAgfVxuXG59XG4iXX0=