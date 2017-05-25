"use strict";
var core_1 = require("@angular/core");
var appSettingsModule = require("application-settings");
var Rx_1 = require("rxjs/Rx");
var _1 = require("./");
var constants_1 = require("../shared/constants");
var AuthenticationService = (function () {
    function AuthenticationService(userService) {
        var _this = this;
        this.userService = userService;
        userService.usersObs.subscribe(function (d) {
            _this.currentUser = d[0];
        });
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            //simulate logging in
            if (password === constants_1.DEMO_PASSWORD) {
                setTimeout(function () {
                    observer.next(_this.currentUser);
                    appSettingsModule.setString('CurrentUser', JSON.stringify(_this.currentUser));
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
        appSettingsModule.remove('CurrentUser');
    };
    AuthenticationService.isLoggedIn = function () {
        return !!appSettingsModule.getString('CurrentUser');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [_1.UserService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFFM0Msd0RBQTBEO0FBRTFELDhCQUErQztBQUUvQyx1QkFBaUM7QUFFakMsaURBQW9EO0FBS3BELElBQWEscUJBQXFCO0lBSTlCLCtCQUFvQixXQUF3QjtRQUE1QyxpQkFLQztRQUxtQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUV4QyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0scUNBQUssR0FBWixVQUFhLFFBQWdCLEVBQUUsUUFBZ0I7UUFBL0MsaUJBY0M7UUFiRyxNQUFNLENBQUMsZUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQXlCO1lBQy9DLHFCQUFxQjtZQUNyQixFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUsseUJBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLFVBQVUsQ0FBQztvQkFDUCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDaEMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUNqRixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDYixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osVUFBVSxDQUFDO29CQUNQLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNiLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxzQ0FBTSxHQUFiO1FBQ0ksaUJBQWlCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSxnQ0FBVSxHQUFqQjtRQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDTCw0QkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1kscUJBQXFCO0lBRGpDLGlCQUFVLEVBQUU7cUNBS3dCLGNBQVc7R0FKbkMscUJBQXFCLENBa0NqQztBQWxDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzTW9kdWxlIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMvUngnO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vJztcblxuaW1wb3J0IHsgREVNT19QQVNTV09SRCB9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMnO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSVVzZXIgPSBQVERvbWFpbi5JVXNlcjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XG5cbiAgICBwdWJsaWMgY3VycmVudFVzZXI6IElVc2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcblxuICAgICAgICB1c2VyU2VydmljZS51c2Vyc09icy5zdWJzY3JpYmUoKGQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBkWzBdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxJVXNlcj4pID0+IHtcbiAgICAgICAgICAgIC8vc2ltdWxhdGUgbG9nZ2luZyBpblxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkID09PSBERU1PX1BBU1NXT1JEKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQodGhpcy5jdXJyZW50VXNlcik7XG4gICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzTW9kdWxlLnNldFN0cmluZygnQ3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRVc2VyKSk7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG51bGwpO1xuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nb3V0KCkge1xuICAgICAgICBhcHBTZXR0aW5nc01vZHVsZS5yZW1vdmUoJ0N1cnJlbnRVc2VyJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIWFwcFNldHRpbmdzTW9kdWxlLmdldFN0cmluZygnQ3VycmVudFVzZXInKTtcbiAgICB9XG59Il19