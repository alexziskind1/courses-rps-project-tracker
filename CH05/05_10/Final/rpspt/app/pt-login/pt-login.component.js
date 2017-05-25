"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var color_1 = require("color");
var enums = require("ui/enums");
var services_1 = require("../services");
var LoginComponent = (function () {
    function LoginComponent(page, authService) {
        this.page = page;
        this.authService = authService;
        this.isLoading = false;
        this.loginModel = { username: 'alexziskind', password: 'fake_password' };
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
                alert('login successful');
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
        services_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHQtbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFFekUsZ0NBQStCO0FBRy9CLCtCQUE4QjtBQUM5QixnQ0FBa0M7QUFHbEMsd0NBQW9EO0FBV3BELElBQWEsY0FBYztJQXFCdkIsd0JBQ1ksSUFBVSxFQUNWLFdBQWtDO1FBRGxDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUF0QnZDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFrQjNCLGVBQVUsR0FBZ0IsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQztJQUtwRixDQUFDO0lBakJMLHNCQUFXLHVDQUFXO2FBQXRCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsb0NBQVE7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywyQ0FBZTthQUExQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDO1FBQ2pELENBQUM7OztPQUFBO0lBU0QsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUFBLGlCQXdCQztRQXZCRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFaEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMs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Q0FBQyxpQkFBaUIsQ0FBQzs4QkFBcUIsaUJBQVU7MERBQUM7QUFMcEQsY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7S0FDeEMsQ0FBQztxQ0F1Qm9CLFdBQUk7UUFDRyxnQ0FBcUI7R0F2QnJDLGNBQWMsQ0E4RjFCO0FBOUZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3VpL2J1dHRvbic7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbG9yJztcbmltcG9ydCAqIGFzIGVudW1zIGZyb20gJ3VpL2VudW1zJztcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IERFTU9fUEFTU1dPUkQgfSBmcm9tICcuLi9zaGFyZWQvY29uc3RhbnRzJztcbmltcG9ydCB7IFBURG9tYWluIH0gZnJvbSAnLi4vdHlwaW5ncy9kb21haW4nO1xuaW1wb3J0IElMb2dpbk1vZGVsID0gUFREb21haW4uSUxvZ2luTW9kZWw7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1sb2dpbicsXG4gICAgdGVtcGxhdGVVcmw6ICdwdC1sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3B0LWxvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQFZpZXdDaGlsZCgnbG9naW5JbnB1dHMnKSBsb2dpbklucHV0c1JlZjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdidG5Mb2dpbicpIGJ0bkxvZ2luUmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2J0bkxvZ2luV3JhcHBlcicpIGJ0bkxvZ2luV3JhcHBlclJlZjogRWxlbWVudFJlZjtcblxuICAgIHB1YmxpYyBnZXQgbG9naW5JbnB1dHMoKTogVmlldyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2luSW5wdXRzUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBidG5Mb2dpbigpOiBWaWV3IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnRuTG9naW5SZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJ0bkxvZ2luV3JhcHBlcigpOiBWaWV3IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnRuTG9naW5XcmFwcGVyUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luTW9kZWw6IElMb2dpbk1vZGVsID0geyB1c2VybmFtZTogJ2FsZXh6aXNraW5kJywgcGFzc3dvcmQ6ICdmYWtlX3Bhc3N3b3JkJyB9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW4oKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2dpbklucHV0cy5jbGFzc05hbWUgPSAnJztcblxuICAgICAgICB0aGlzLmxvZ2luQW5pbWF0aW9uRm9yd2FyZCgpO1xuXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW4odGhpcy5sb2dpbk1vZGVsLnVzZXJuYW1lLCB0aGlzLmxvZ2luTW9kZWwucGFzc3dvcmQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBmYWlsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkFuaW1hdGlvblJldmVyc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5JbnB1dHMuY2xhc3NOYW1lID0gJ2xvZ2luLWZhaWxlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBzdWNjZXNzZnVsJyk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdsb2dpbiBzdWNjZXNzZnVsJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvZ2luQW5pbWF0aW9uRm9yd2FyZCgpIHtcbiAgICAgICAgdGhpcy5idG5Mb2dpbi5vcGFjaXR5ID0gMDtcblxuICAgICAgICB0aGlzLmJ0bkxvZ2luV3JhcHBlci5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjYWxlOiB7IHg6IDAuNSwgeTogMC41IH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDAsIC43NSwgLjIyLCAxKVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9naW5XcmFwcGVyLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBzY2FsZTogeyB4OiAyMCwgeTogMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKC45MywgLjAyLCAxLCAuMjUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2dpbldyYXBwZXIuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoJyM5OTk5OTknKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogNTAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIHByaXZhdGUgbG9naW5BbmltYXRpb25SZXZlcnNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idG5Mb2dpbldyYXBwZXIuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY2FsZTogeyB4OiAxLCB5OiAxIH0sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcignIzU1NWE5NycpLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllcigwLCAuNzUsIC4yMiwgMSlcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ0bkxvZ2luLm9wYWNpdHkgPSAxO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19