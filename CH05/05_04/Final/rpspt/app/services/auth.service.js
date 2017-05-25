"use strict";
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var constants_1 = require("../shared/constants");
var AuthenticationService = (function () {
    function AuthenticationService() {
    }
    AuthenticationService.prototype.login = function (username, password) {
        return Rx_1.Observable.create(function (observer) {
            //simulate logging in
            if (password === constants_1.DEMO_PASSWORD) {
                setTimeout(function () {
                    var fakeUser = { id: '1', fullName: 'Alex Ziskind', avatar: '' };
                    observer.next(fakeUser);
                }, 3000);
            }
            else {
                setTimeout(function () {
                    observer.next(null);
                }, 3000);
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        console.log('logging out');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFFM0MsOEJBQStDO0FBRS9DLGlEQUFvRDtBQUtwRCxJQUFhLHFCQUFxQjtJQUU5QjtJQUFnQixDQUFDO0lBRVYscUNBQUssR0FBWixVQUFhLFFBQWdCLEVBQUUsUUFBZ0I7UUFDM0MsTUFBTSxDQUFDLGVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUF5QjtZQUMvQyxxQkFBcUI7WUFDckIsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLHlCQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixVQUFVLENBQUM7b0JBQ1AsSUFBSSxRQUFRLEdBQVUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO29CQUN4RSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDYixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osVUFBVSxDQUFDO29CQUNQLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNiLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxzQ0FBTSxHQUFiO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLHFCQUFxQjtJQURqQyxpQkFBVSxFQUFFOztHQUNBLHFCQUFxQixDQXVCakM7QUF2Qlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMvUngnO1xuXG5pbXBvcnQgeyBERU1PX1BBU1NXT1JEIH0gZnJvbSAnLi4vc2hhcmVkL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uL3R5cGluZ3MvZG9tYWluJztcbmltcG9ydCBJVXNlciA9IFBURG9tYWluLklVc2VyO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBwdWJsaWMgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxJVXNlcj4pID0+IHtcbiAgICAgICAgICAgIC8vc2ltdWxhdGUgbG9nZ2luZyBpblxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkID09PSBERU1PX1BBU1NXT1JEKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmYWtlVXNlcjogSVVzZXIgPSB7IGlkOiAnMScsIGZ1bGxOYW1lOiAnQWxleCBaaXNraW5kJywgYXZhdGFyOiAnJyB9O1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGZha2VVc2VyKTtcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobnVsbCk7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dnaW5nIG91dCcpO1xuICAgIH1cbn0iXX0=