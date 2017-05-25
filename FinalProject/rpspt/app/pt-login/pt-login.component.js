"use strict";
//angular imports 
var core_1 = require("@angular/core");
//nativescript imports
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
var enums = require("ui/enums");
//app imports
var services_1 = require("../services");
var constants_1 = require("../shared/constants");
var LoginComponent = (function () {
    function LoginComponent(page, router, authService) {
        this.page = page;
        this.router = router;
        this.authService = authService;
        this.isLoading = false;
        this.loginModel = { username: 'alexziskind', password: constants_1.DEMO_PASSWORD };
    }
    Object.defineProperty(LoginComponent.prototype, "loginInputs", {
        get: function () {
            return this.loginInputsRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "btnLoginWrapper", {
        get: function () {
            return this.btnLoginWrapperRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "btnLogin", {
        get: function () {
            return this.btnLoginRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isLoading = true;
        this.loginInputs.className = '';
        this.loginAnimationForward();
        this.authService.login(this.loginModel.username, this.loginModel.password)
            .subscribe(function (data) {
            if (data === null) {
                _this.loginAnimationReverse()
                    .then(function () {
                    _this.loginInputs.className = 'login-failed';
                });
            }
            else {
                _this.router.navigate(["/"], { clearHistory: true });
            }
            _this.isLoading = false;
        }, function (error) {
            _this.isLoading = false;
        });
    };
    LoginComponent.prototype.loginAnimationForward = function () {
        var _this = this;
        this.btnLogin.opacity = 0;
        return this.btnLoginWrapper.animate({
            scale: { x: 0.5, y: 0.5 },
            duration: 200,
            curve: enums.AnimationCurve.cubicBezier(0, .75, .22, 1)
        }).then(function () {
            _this.btnLoginWrapper.animate({
                scale: { x: 20, y: 20 },
                duration: 250,
                curve: enums.AnimationCurve.cubicBezier(.93, .02, 1, .25)
            }).then(function () {
                _this.btnLoginWrapper.animate({
                    backgroundColor: new color_1.Color('#999999'),
                    duration: 5000,
                    delay: 1000
                });
            });
        });
    };
    LoginComponent.prototype.loginAnimationReverse = function () {
        var _this = this;
        return this.btnLoginWrapper.animate({
            scale: { x: 1, y: 1 },
            backgroundColor: new color_1.Color('#555a97'),
            duration: 200,
            curve: enums.AnimationCurve.cubicBezier(0, .75, .22, 1)
        }).then(function () {
            _this.btnLogin.opacity = 1;
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild('loginInputs'),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "loginInputsRef", void 0);
__decorate([
    core_1.ViewChild('btnLoginWrapper'),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "btnLoginWrapperRef", void 0);
__decorate([
    core_1.ViewChild('btnLogin'),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "btnLoginRef", void 0);
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pt-login',
        templateUrl: 'pt-login.component.html',
        styleUrls: ['pt-login.component.css']
    }),
    __metadata("design:paramtypes", [page_1.Page,
        router_1.RouterExtensions,
        services_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHQtbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxrQkFBa0I7QUFDbEIsc0NBQXlFO0FBRXpFLHNCQUFzQjtBQUN0QixzREFBK0Q7QUFDL0QsZ0NBQStCO0FBRy9CLCtCQUE4QjtBQUM5QixnQ0FBa0M7QUFFbEMsYUFBYTtBQUNiLHdDQUFpRTtBQUNqRSxpREFBb0Q7QUFVcEQsSUFBYSxjQUFjO0lBdUJ2Qix3QkFBb0IsSUFBVSxFQUNsQixNQUF3QixFQUN4QixXQUFrQztRQUYxQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQXZCdkMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQW1CM0IsZUFBVSxHQUFnQixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLHlCQUFhLEVBQUUsQ0FBQztJQU10RixDQUFDO0lBbEJELHNCQUFXLHVDQUFXO2FBQXRCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMkNBQWU7YUFBMUI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLG9DQUFRO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBVU0saUNBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUFBLGlCQXNCQztRQXJCRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJ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QUFpQixpQkFBVTtzREFBQztBQUN2QjtJQUE3QixnQkFBUyxDQUFDLGlCQUFpQixDQUFDOzhCQUFxQixpQkFBVTswREFBQztBQUN0QztJQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQzs4QkFBYyxpQkFBVTttREFBQztBQUx0QyxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztLQUN4QyxDQUFDO3FDQXdCNEIsV0FBSTtRQUNWLHlCQUFnQjtRQUNYLGdDQUFxQjtHQXpCckMsY0FBYyxDQXlGMUI7QUF6Rlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FuZ3VsYXIgaW1wb3J0cyBcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vL25hdGl2ZXNjcmlwdCBpbXBvcnRzXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwidWkvYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0ICogYXMgZW51bXMgZnJvbSAndWkvZW51bXMnO1xuXG4vL2FwcCBpbXBvcnRzXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgREVNT19QQVNTV09SRCB9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMnO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSUxvZ2luTW9kZWwgPSBQVERvbWFpbi5JTG9naW5Nb2RlbDtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3B0LWxvZ2luJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWxvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsncHQtbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAVmlld0NoaWxkKCdsb2dpbklucHV0cycpIGxvZ2luSW5wdXRzUmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2J0bkxvZ2luV3JhcHBlcicpIGJ0bkxvZ2luV3JhcHBlclJlZjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdidG5Mb2dpbicpIGJ0bkxvZ2luUmVmOiBFbGVtZW50UmVmO1xuXG5cblxuICAgIHB1YmxpYyBnZXQgbG9naW5JbnB1dHMoKTogVmlldyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2luSW5wdXRzUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBidG5Mb2dpbldyYXBwZXIoKTogVmlldyB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ0bkxvZ2luV3JhcHBlclJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYnRuTG9naW4oKTogVmlldyB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ0bkxvZ2luUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luTW9kZWw6IElMb2dpbk1vZGVsID0geyB1c2VybmFtZTogJ2FsZXh6aXNraW5kJywgcGFzc3dvcmQ6IERFTU9fUEFTU1dPUkQgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW4oKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2dpbklucHV0cy5jbGFzc05hbWUgPSAnJztcblxuICAgICAgICB0aGlzLmxvZ2luQW5pbWF0aW9uRm9yd2FyZCgpO1xuXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW4odGhpcy5sb2dpbk1vZGVsLnVzZXJuYW1lLCB0aGlzLmxvZ2luTW9kZWwucGFzc3dvcmQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5BbmltYXRpb25SZXZlcnNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luSW5wdXRzLmNsYXNzTmFtZSA9ICdsb2dpbi1mYWlsZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9naW5BbmltYXRpb25Gb3J3YXJkKCkge1xuICAgICAgICB0aGlzLmJ0bkxvZ2luLm9wYWNpdHkgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcy5idG5Mb2dpbldyYXBwZXIuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY2FsZTogeyB4OiAwLjUsIHk6IDAuNSB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllcigwLCAuNzUsIC4yMiwgMSlcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ0bkxvZ2luV3JhcHBlci5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY2FsZTogeyB4OiAyMCwgeTogMjAgfSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjUwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllciguOTMsIC4wMiwgMSwgLjI1KVxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5Mb2dpbldyYXBwZXIuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKCcjOTk5OTk5JyksXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAwLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMTAwMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9naW5BbmltYXRpb25SZXZlcnNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idG5Mb2dpbldyYXBwZXIuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY2FsZTogeyB4OiAxLCB5OiAxIH0sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcignIzU1NWE5NycpLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllcigwLCAuNzUsIC4yMiwgMSlcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ0bkxvZ2luLm9wYWNpdHkgPSAxO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==