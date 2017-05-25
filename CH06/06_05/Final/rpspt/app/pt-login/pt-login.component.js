"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
var enums = require("ui/enums");
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
    Object.defineProperty(LoginComponent.prototype, "btnLogin", {
        get: function () {
            return this.btnLoginRef.nativeElement;
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
                console.log('login failed');
                _this.loginAnimationReverse()
                    .then(function () {
                    _this.loginInputs.className = 'login-failed';
                });
            }
            else {
                console.log('login successful');
                _this.router.navigate(['/'], { clearHistory: true });
            }
            _this.isLoading = false;
        }, function (error) {
            _this.isLoading = false;
        });
    };
    LoginComponent.prototype.loginAnimationForward = function () {
        var _this = this;
        this.btnLogin.opacity = 0;
        this.btnLoginWrapper.animate({
            scale: { x: 0.5, y: 0.5 },
            duration: 200,
            curve: enums.AnimationCurve.cubicBezier(0, .75, .22, 1)
        })
            .then(function () {
            _this.btnLoginWrapper.animate({
                scale: { x: 20, y: 20 },
                duration: 250,
                curve: enums.AnimationCurve.cubicBezier(.93, .02, 1, .25)
            })
                .then(function () {
                _this.btnLoginWrapper.animate({
                    backgroundColor: new color_1.Color('#999999'),
                    duration: 5000,
                    delay: 500
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
    core_1.ViewChild('btnLogin'),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "btnLoginRef", void 0);
__decorate([
    core_1.ViewChild('btnLoginWrapper'),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "btnLoginWrapperRef", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHQtbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFFekUsc0RBQStEO0FBRS9ELGdDQUErQjtBQUcvQiwrQkFBOEI7QUFDOUIsZ0NBQWtDO0FBR2xDLHdDQUFvRDtBQUNwRCxpREFBb0Q7QUFVcEQsSUFBYSxjQUFjO0lBcUJ2Qix3QkFDWSxJQUFVLEVBQ1YsTUFBd0IsRUFDeEIsV0FBa0M7UUFGbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQXZCdkMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQWtCM0IsZUFBVSxHQUFnQixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLHlCQUFhLEVBQUUsQ0FBQztJQU1sRixDQUFDO0lBbEJMLHNCQUFXLHVDQUFXO2FBQXRCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsb0NBQVE7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywyQ0FBZTthQUExQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDO1FBQ2pELENBQUM7OztPQUFBO0lBVUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUFBLGlCQXdCQztRQXZCRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFF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QztBQTVGNkI7SUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7OEJBQWlCLGlCQUFVO3NEQUFDO0FBQzlCO0lBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDOzhCQUFjLGlCQUFVO21EQUFDO0FBQ2pCO0lBQTdCLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7OEJBQXFCLGlCQUFVOzBEQUFDO0FBTHBELGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO0tBQ3hDLENBQUM7cUNBdUJvQixXQUFJO1FBQ0YseUJBQWdCO1FBQ1gsZ0NBQXFCO0dBeEJyQyxjQUFjLENBK0YxQjtBQS9GWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndWkvYnV0dG9uJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29sb3InO1xuaW1wb3J0ICogYXMgZW51bXMgZnJvbSAndWkvZW51bXMnO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgREVNT19QQVNTV09SRCB9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMnO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSUxvZ2luTW9kZWwgPSBQVERvbWFpbi5JTG9naW5Nb2RlbDtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3B0LWxvZ2luJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWxvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsncHQtbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAVmlld0NoaWxkKCdsb2dpbklucHV0cycpIGxvZ2luSW5wdXRzUmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2J0bkxvZ2luJykgYnRuTG9naW5SZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnYnRuTG9naW5XcmFwcGVyJykgYnRuTG9naW5XcmFwcGVyUmVmOiBFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGdldCBsb2dpbklucHV0cygpOiBWaWV3IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9naW5JbnB1dHNSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJ0bkxvZ2luKCk6IFZpZXcge1xuICAgICAgICByZXR1cm4gdGhpcy5idG5Mb2dpblJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYnRuTG9naW5XcmFwcGVyKCk6IFZpZXcge1xuICAgICAgICByZXR1cm4gdGhpcy5idG5Mb2dpbldyYXBwZXJSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW5Nb2RlbDogSUxvZ2luTW9kZWwgPSB7IHVzZXJuYW1lOiAnYWxleHppc2tpbmQnLCBwYXNzd29yZDogREVNT19QQVNTV09SRCB9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luKCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubG9naW5JbnB1dHMuY2xhc3NOYW1lID0gJyc7XG5cbiAgICAgICAgdGhpcy5sb2dpbkFuaW1hdGlvbkZvcndhcmQoKTtcblxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMubG9naW5Nb2RlbC51c2VybmFtZSwgdGhpcy5sb2dpbk1vZGVsLnBhc3N3b3JkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gZmFpbGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5BbmltYXRpb25SZXZlcnNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luSW5wdXRzLmNsYXNzTmFtZSA9ICdsb2dpbi1mYWlsZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gc3VjY2Vzc2Z1bCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvZ2luQW5pbWF0aW9uRm9yd2FyZCgpIHtcbiAgICAgICAgdGhpcy5idG5Mb2dpbi5vcGFjaXR5ID0gMDtcblxuICAgICAgICB0aGlzLmJ0bkxvZ2luV3JhcHBlci5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjYWxlOiB7IHg6IDAuNSwgeTogMC41IH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDAsIC43NSwgLjIyLCAxKVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9naW5XcmFwcGVyLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBzY2FsZTogeyB4OiAyMCwgeTogMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKC45MywgLjAyLCAxLCAuMjUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2dpbldyYXBwZXIuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoJyM5OTk5OTknKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogNTAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIHByaXZhdGUgbG9naW5BbmltYXRpb25SZXZlcnNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idG5Mb2dpbldyYXBwZXIuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY2FsZTogeyB4OiAxLCB5OiAxIH0sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcignIzU1NWE5NycpLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllcigwLCAuNzUsIC4yMiwgMSlcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ0bkxvZ2luLm9wYWNpdHkgPSAxO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19