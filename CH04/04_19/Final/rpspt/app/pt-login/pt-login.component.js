"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
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
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isLoading = true;
        this.loginInputs.className = '';
        this.authService.login(this.loginModel.username, this.loginModel.password)
            .subscribe(function (data) {
            if (data === null) {
                console.log('login failed');
                _this.loginInputs.className = 'login-failed';
            }
            else {
                console.log('login successful');
            }
            _this.isLoading = false;
        }, function (error) {
            _this.isLoading = false;
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild('loginInputs'),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "loginInputsRef", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHQtbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFFekUsZ0NBQStCO0FBRy9CLHdDQUFvRDtBQVdwRCxJQUFhLGNBQWM7SUFXdkIsd0JBQ1ksSUFBVSxFQUNWLFdBQWtDO1FBRGxDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFadkMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQVEzQixlQUFVLEdBQWdCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUM7SUFLcEYsQ0FBQztJQVRMLHNCQUFXLHVDQUFXO2FBQXRCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBU0QsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUFBLGlCQWtCQztRQWpCRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7YUFDckUsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNYLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7WUFDaEQsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBQ0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQztBQXBDNkI7SUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7OEJBQWlCLGlCQUFVO3NEQUFDO0FBSDVDLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO0tBQ3hDLENBQUM7cUNBYW9CLFdBQUk7UUFDRyxnQ0FBcUI7R0FickMsY0FBYyxDQXVDMUI7QUF2Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBERU1PX1BBU1NXT1JEIH0gZnJvbSAnLi4vc2hhcmVkL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uL3R5cGluZ3MvZG9tYWluJztcbmltcG9ydCBJTG9naW5Nb2RlbCA9IFBURG9tYWluLklMb2dpbk1vZGVsO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAncHQtbG9naW4nLFxuICAgIHRlbXBsYXRlVXJsOiAncHQtbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydwdC1sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoJ2xvZ2luSW5wdXRzJykgbG9naW5JbnB1dHNSZWY6IEVsZW1lbnRSZWY7XG5cbiAgICBwdWJsaWMgZ2V0IGxvZ2luSW5wdXRzKCk6IFZpZXcge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dpbklucHV0c1JlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dpbk1vZGVsOiBJTG9naW5Nb2RlbCA9IHsgdXNlcm5hbWU6ICdhbGV4emlza2luZCcsIHBhc3N3b3JkOiAnZmFrZV9wYXNzd29yZCcgfTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luKCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubG9naW5JbnB1dHMuY2xhc3NOYW1lID0gJyc7XG5cbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLmxvZ2luTW9kZWwudXNlcm5hbWUsIHRoaXMubG9naW5Nb2RlbC5wYXNzd29yZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGZhaWxlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luSW5wdXRzLmNsYXNzTmFtZSA9ICdsb2dpbi1mYWlsZWQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIHN1Y2Nlc3NmdWwnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iXX0=