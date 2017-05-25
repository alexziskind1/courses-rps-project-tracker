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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHQtbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFFekUsZ0NBQStCO0FBRy9CLCtCQUE4QjtBQUM5QixnQ0FBa0M7QUFHbEMsd0NBQW9EO0FBV3BELElBQWEsY0FBYztJQXFCdkIsd0JBQ1ksSUFBVSxFQUNWLFdBQWtDO1FBRGxDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUF0QnZDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFrQjNCLGVBQVUsR0FBZ0IsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQztJQUtwRixDQUFDO0lBakJMLHNCQUFXLHVDQUFXO2FBQXRCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsb0NBQVE7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywyQ0FBZTthQUExQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDO1FBQ2pELENBQUM7OztPQUFBO0lBU0QsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUFBLGlCQXVCQztRQXRCRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFaEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7YUFDckUsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNYLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMscUJBQXFCLEVBQUU7cUJBQ3ZCLElBQUksQ0FBQztvQkFDRixLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7Z0JBQ2hELENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBQ0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVPLDhDQUFxQixHQUE3QjtRQUFBLGlCQTBCQztRQXpCRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7WUFDekIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUMxRCxDQUFDO2FBQ0csSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3pCLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDdkIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQzthQUM1RCxDQUFDO2lCQUNHLElBQUksQ0FBQztnQkFDRixLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztvQkFDekIsZUFBZSxFQUFFLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQztvQkFDckMsUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFLEdBQUc7aUJBQ2IsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUM7UUFFWCxDQUFDLENBQUMsQ0FBQztJQUdYLENBQUM7SUFFTyw4Q0FBcUIsR0FBN0I7UUFBQSxpQkFTQztRQVJHLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztZQUNoQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckIsZUFBZSxFQUFFLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQztZQUNyQyxRQUFRLEVBQUUsR0FBRztZQUNiLEtBQUssRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDMUQsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUE3RkQsSUE2RkM7QUExRjZCO0lBQXpCLGdCQUFTLENBQUMsYUFBYSxDQUFDOzhCQUFpQixpQkFBVTtzREFBQztBQUM5QjtJQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQzs4QkFBYyxpQkFBVTttREFBQztBQUNqQjtJQUE3QixnQkFBUyxDQUFDLGlCQUFpQixDQUFDOzhCQUFxQixpQkFBVTswREFBQztBQUxwRCxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztLQUN4QyxDQUFDO3FDQXVCb0IsV0FBSTtRQUNHLGdDQUFxQjtHQXZCckMsY0FBYyxDQTZGMUI7QUE3Rlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndWkvYnV0dG9uJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29sb3InO1xuaW1wb3J0ICogYXMgZW51bXMgZnJvbSAndWkvZW51bXMnO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgREVNT19QQVNTV09SRCB9IGZyb20gJy4uL3NoYXJlZC9jb25zdGFudHMnO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSUxvZ2luTW9kZWwgPSBQVERvbWFpbi5JTG9naW5Nb2RlbDtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3B0LWxvZ2luJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWxvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsncHQtbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAVmlld0NoaWxkKCdsb2dpbklucHV0cycpIGxvZ2luSW5wdXRzUmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2J0bkxvZ2luJykgYnRuTG9naW5SZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnYnRuTG9naW5XcmFwcGVyJykgYnRuTG9naW5XcmFwcGVyUmVmOiBFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGdldCBsb2dpbklucHV0cygpOiBWaWV3IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9naW5JbnB1dHNSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJ0bkxvZ2luKCk6IFZpZXcge1xuICAgICAgICByZXR1cm4gdGhpcy5idG5Mb2dpblJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYnRuTG9naW5XcmFwcGVyKCk6IFZpZXcge1xuICAgICAgICByZXR1cm4gdGhpcy5idG5Mb2dpbldyYXBwZXJSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW5Nb2RlbDogSUxvZ2luTW9kZWwgPSB7IHVzZXJuYW1lOiAnYWxleHppc2tpbmQnLCBwYXNzd29yZDogJ2Zha2VfcGFzc3dvcmQnIH07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvZ2luSW5wdXRzLmNsYXNzTmFtZSA9ICcnO1xuXG4gICAgICAgIHRoaXMubG9naW5BbmltYXRpb25Gb3J3YXJkKCk7XG5cbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLmxvZ2luTW9kZWwudXNlcm5hbWUsIHRoaXMubG9naW5Nb2RlbC5wYXNzd29yZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGZhaWxlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQW5pbWF0aW9uUmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbklucHV0cy5jbGFzc05hbWUgPSAnbG9naW4tZmFpbGVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIHN1Y2Nlc3NmdWwnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9naW5BbmltYXRpb25Gb3J3YXJkKCkge1xuICAgICAgICB0aGlzLmJ0bkxvZ2luLm9wYWNpdHkgPSAwO1xuXG4gICAgICAgIHRoaXMuYnRuTG9naW5XcmFwcGVyLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2NhbGU6IHsgeDogMC41LCB5OiAwLjUgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuY3ViaWNCZXppZXIoMCwgLjc1LCAuMjIsIDEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5Mb2dpbldyYXBwZXIuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7IHg6IDIwLCB5OiAyMCB9LFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjUwLFxuICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuY3ViaWNCZXppZXIoLjkzLCAuMDIsIDEsIC4yNSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkxvZ2luV3JhcHBlci5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcignIzk5OTk5OScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiA1MDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2dpbkFuaW1hdGlvblJldmVyc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ0bkxvZ2luV3JhcHBlci5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjYWxlOiB7IHg6IDEsIHk6IDEgfSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKCcjNTU1YTk3JyksXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDAsIC43NSwgLjIyLCAxKVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYnRuTG9naW4ub3BhY2l0eSA9IDE7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=