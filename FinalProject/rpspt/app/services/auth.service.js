"use strict";
//angular imports
var core_1 = require("@angular/core");
//nativescript imports
var appSettingsModule = require("application-settings");
//3rd party imports
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
//app imports
var constants_1 = require("../shared/constants");
var _1 = require("./");
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
                    appSettingsModule.setString(constants_1.APP_SETTINGS_CURRENT_USER, JSON.stringify(_this.currentUser));
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
        appSettingsModule.remove(constants_1.APP_SETTINGS_CURRENT_USER);
    };
    AuthenticationService.isLoggedIn = function () {
        return !!appSettingsModule.getString(constants_1.APP_SETTINGS_CURRENT_USER);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [_1.UserService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQkFBaUI7QUFDakIsc0NBQTJDO0FBRTNDLHNCQUFzQjtBQUN0Qix3REFBMEQ7QUFFMUQsbUJBQW1CO0FBQ25CLDhCQUErQztBQUMvQyxpQ0FBOEI7QUFFOUIsYUFBYTtBQUNiLGlEQUErRTtBQUMvRSx1QkFBaUM7QUFLakMsSUFBYSxxQkFBcUI7SUFJOUIsK0JBQW9CLFdBQXdCO1FBQTVDLGlCQUtDO1FBTG1CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRXhDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxxQ0FBSyxHQUFaLFVBQWEsUUFBZ0IsRUFBRSxRQUFnQjtRQUEvQyxpQkFlQztRQWRHLE1BQU0sQ0FBQyxlQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsUUFBeUI7WUFDL0MscUJBQXFCO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyx5QkFBYSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsVUFBVSxDQUFDO29CQUNQLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNoQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMscUNBQXlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDN0YsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2IsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLFVBQVUsQ0FBQztvQkFDUCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDYixDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sc0NBQU0sR0FBYjtRQUNJLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxxQ0FBeUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxnQ0FBVSxHQUFqQjtRQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLHFDQUF5QixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQztBQW5DWSxxQkFBcUI7SUFEakMsaUJBQVUsRUFBRTtxQ0FLd0IsY0FBVztHQUpuQyxxQkFBcUIsQ0FtQ2pDO0FBbkNZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vYW5ndWxhciBpbXBvcnRzXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vbmF0aXZlc2NyaXB0IGltcG9ydHNcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzTW9kdWxlIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG4vLzNyZCBwYXJ0eSBpbXBvcnRzXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXG5cbi8vYXBwIGltcG9ydHNcbmltcG9ydCB7IEFQUF9TRVRUSU5HU19DVVJSRU5UX1VTRVIsIERFTU9fUEFTU1dPUkQgfSBmcm9tICcuLi9zaGFyZWQvY29uc3RhbnRzJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi8nO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSVVzZXIgPSBQVERvbWFpbi5JVXNlcjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XG5cbiAgICBwdWJsaWMgY3VycmVudFVzZXI6IElVc2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcblxuICAgICAgICB1c2VyU2VydmljZS51c2Vyc09icy5zdWJzY3JpYmUoKGQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBkWzBdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxJVXNlcj4pID0+IHtcbiAgICAgICAgICAgIC8vc2ltdWxhdGUgbG9nZ2luZyBpblxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkID09PSBERU1PX1BBU1NXT1JEKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQodGhpcy5jdXJyZW50VXNlcik7XG4gICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzTW9kdWxlLnNldFN0cmluZyhBUFBfU0VUVElOR1NfQ1VSUkVOVF9VU0VSLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRVc2VyKSk7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG51bGwpO1xuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgICAgIGFwcFNldHRpbmdzTW9kdWxlLnJlbW92ZShBUFBfU0VUVElOR1NfQ1VSUkVOVF9VU0VSKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNMb2dnZWRJbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhYXBwU2V0dGluZ3NNb2R1bGUuZ2V0U3RyaW5nKEFQUF9TRVRUSU5HU19DVVJSRU5UX1VTRVIpO1xuICAgIH1cbn0iXX0=