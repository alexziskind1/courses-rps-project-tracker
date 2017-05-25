"use strict";
//angular imports
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//nativescript imports
var router_2 = require("nativescript-angular/router");
var platform_1 = require("platform");
//3rd party imports
require("rxjs/add/operator/switchMap");
//app imports
var animations_1 = require("../../shared/animations");
var services_1 = require("../../services");
var PTItemChitchatComponent = (function () {
    function PTItemChitchatComponent(route, router, routerExtensions, backlogService, authService, userService) {
        this.route = route;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.backlogService = backlogService;
        this.authService = authService;
        this.userService = userService;
        this.selectedViewIndex = 0;
        this.newCommentText = '';
    }
    Object.defineProperty(PTItemChitchatComponent.prototype, "comments", {
        get: function () {
            return this.item.comments;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTItemChitchatComponent.prototype, "animationState", {
        get: function () {
            return this.selectedViewIndex === 2 ? 'off' : 'on';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTItemChitchatComponent.prototype, "currentUserAvatar", {
        get: function () {
            return this.authService.currentUser.avatar;
        },
        enumerable: true,
        configurable: true
    });
    PTItemChitchatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params
            .switchMap(function (params) { return _this.backlogService.getItem(params['id']); })
            .subscribe(function (item) { return _this.item = item; });
    };
    PTItemChitchatComponent.prototype.addTapped = function (newCommentTV) {
        var newTitle = this.newCommentText.trim();
        if (newTitle.length === 0)
            return;
        var newComment = {
            title: newTitle,
            userId: this.authService.currentUser.id
        };
        this.backlogService.addComment(this.item, newComment);
        this.newCommentText = '';
        newCommentTV.dismissSoftInput();
    };
    PTItemChitchatComponent.prototype.mathCeil = function (num) {
        return Math.ceil(num);
    };
    PTItemChitchatComponent.prototype.commentHeight = function (commentTitle) {
        var lineHeight = platform_1.isIOS ? 20 : 30;
        var numlines = Math.ceil(commentTitle.length / 22);
        return ((numlines < 2 ? 2 : numlines) * lineHeight) + 10;
    };
    return PTItemChitchatComponent;
}());
PTItemChitchatComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pt-item-chitchat',
        templateUrl: 'pt-item-chitchat.component.html',
        styleUrls: ['pt-item-chitchat.component.css'],
        animations: animations_1.slideInAnimations
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        router_2.RouterExtensions,
        services_1.BacklogService,
        services_1.AuthenticationService,
        services_1.UserService])
], PTItemChitchatComponent);
exports.PTItemChitchatComponent = PTItemChitchatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS1jaGl0Y2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLWNoaXRjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBQWlCO0FBQ2pCLHNDQUFrRDtBQUNsRCwwQ0FBNkU7QUFFN0Usc0JBQXNCO0FBQ3RCLHNEQUErRDtBQUcvRCxxQ0FBNEM7QUFFNUMsbUJBQW1CO0FBQ25CLHVDQUFxQztBQUVyQyxhQUFhO0FBQ2Isc0RBQWtGO0FBQ2xGLDJDQUFvRjtBQWNwRixJQUFhLHVCQUF1QjtJQWtCaEMsaUNBQW9CLEtBQXFCLEVBQzdCLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsV0FBa0MsRUFDbEMsV0FBd0I7UUFMaEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDN0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQXJCNUIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBRXZCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO0lBbUJLLENBQUM7SUFqQnpDLHNCQUFXLDZDQUFRO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsbURBQWM7YUFBekI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3ZELENBQUM7OztPQUFBO0lBRUQsc0JBQVcsc0RBQWlCO2FBQTVCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQVVNLDBDQUFRLEdBQWY7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDbkIsU0FBUyxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQXpDLENBQXlDLENBQUM7YUFDeEUsU0FBUyxDQUFDLFVBQUMsSUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU0sMkNBQVMsR0FBaEIsVUFBaUIsWUFBc0I7UUFDbkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUM7UUFDWCxJQUFJLFVBQVUsR0FBZ0I7WUFDMUIsS0FBSyxFQUFFLFFBQVE7WUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRTtTQUMxQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRU0sMENBQVEsR0FBZixVQUFnQixHQUFXO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSwrQ0FBYSxHQUFwQixVQUFxQixZQUFvQjtRQUNyQyxJQUFJLFVBQVUsR0FBRyxnQkFBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDakMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFFTCw4QkFBQztBQUFELENBQUMsQUF2REQsSUF1REM7QUF2RFksdUJBQXVCO0lBUG5DLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixXQUFXLEVBQUUsaUNBQWlDO1FBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1FBQzdDLFVBQVUsRUFBRSw4QkFBaUI7S0FDaEMsQ0FBQztxQ0FtQjZCLHVCQUFjO1FBQ3JCLGVBQU07UUFDSSx5QkFBZ0I7UUFDbEIseUJBQWM7UUFDakIsZ0NBQXFCO1FBQ3JCLHNCQUFXO0dBdkIzQix1QkFBdUIsQ0F1RG5DO0FBdkRZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vYW5ndWxhciBpbXBvcnRzXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFVybFNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vL25hdGl2ZXNjcmlwdCBpbXBvcnRzXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSAndWkvdGV4dC12aWV3JztcbmltcG9ydCB7IFNjcm9sbFZpZXcgfSBmcm9tICd1aS9zY3JvbGwtdmlldyc7XG5pbXBvcnQgeyBpc0lPUywgaXNBbmRyb2lkIH0gZnJvbSAncGxhdGZvcm0nO1xuXG4vLzNyZCBwYXJ0eSBpbXBvcnRzXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5cbi8vYXBwIGltcG9ydHNcbmltcG9ydCB7IHNsaWRlSW5Eb3duQW5pbWF0aW9uLCBzbGlkZUluQW5pbWF0aW9ucyB9IGZyb20gJy4uLy4uL3NoYXJlZC9hbmltYXRpb25zJztcbmltcG9ydCB7IEJhY2tsb2dTZXJ2aWNlLCBBdXRoZW50aWNhdGlvblNlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi8uLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSVBUSXRlbSA9IFBURG9tYWluLklQVEl0ZW07XG5pbXBvcnQgSVRhc2sgPSBQVERvbWFpbi5JVGFzaztcbmltcG9ydCBJTmV3Q29tbWVudCA9IFBURG9tYWluLklOZXdDb21tZW50O1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwdC1pdGVtLWNoaXRjaGF0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3B0LWl0ZW0tY2hpdGNoYXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydwdC1pdGVtLWNoaXRjaGF0LmNvbXBvbmVudC5jc3MnXSxcbiAgICBhbmltYXRpb25zOiBzbGlkZUluQW5pbWF0aW9uc1xufSlcbmV4cG9ydCBjbGFzcyBQVEl0ZW1DaGl0Y2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIHNlbGVjdGVkVmlld0luZGV4ID0gMDtcbiAgICBwdWJsaWMgaXRlbTogSVBUSXRlbTtcbiAgICBwdWJsaWMgbmV3Q29tbWVudFRleHQ6IHN0cmluZyA9ICcnO1xuXG4gICAgcHVibGljIGdldCBjb21tZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5jb21tZW50cztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFuaW1hdGlvblN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFZpZXdJbmRleCA9PT0gMiA/ICdvZmYnIDogJ29uJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRVc2VyQXZhdGFyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5jdXJyZW50VXNlci5hdmF0YXI7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBiYWNrbG9nU2VydmljZTogQmFja2xvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHsgfVxuXG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGUucGFyZW50LnBhcmFtc1xuICAgICAgICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMuYmFja2xvZ1NlcnZpY2UuZ2V0SXRlbShwYXJhbXNbJ2lkJ10pKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoaXRlbTogSVBUSXRlbSkgPT4gdGhpcy5pdGVtID0gaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFRhcHBlZChuZXdDb21tZW50VFY6IFRleHRWaWV3KSB7XG4gICAgICAgIGxldCBuZXdUaXRsZSA9IHRoaXMubmV3Q29tbWVudFRleHQudHJpbSgpO1xuICAgICAgICBpZiAobmV3VGl0bGUubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgbmV3Q29tbWVudDogSU5ld0NvbW1lbnQgPSB7XG4gICAgICAgICAgICB0aXRsZTogbmV3VGl0bGUsXG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMuYXV0aFNlcnZpY2UuY3VycmVudFVzZXIuaWRcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5iYWNrbG9nU2VydmljZS5hZGRDb21tZW50KHRoaXMuaXRlbSwgbmV3Q29tbWVudCk7XG4gICAgICAgIHRoaXMubmV3Q29tbWVudFRleHQgPSAnJztcbiAgICAgICAgbmV3Q29tbWVudFRWLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWF0aENlaWwobnVtOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChudW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21tZW50SGVpZ2h0KGNvbW1lbnRUaXRsZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBsaW5lSGVpZ2h0ID0gaXNJT1MgPyAyMCA6IDMwO1xuICAgICAgICBsZXQgbnVtbGluZXMgPSBNYXRoLmNlaWwoY29tbWVudFRpdGxlLmxlbmd0aCAvIDIyKTtcbiAgICAgICAgcmV0dXJuICgobnVtbGluZXMgPCAyID8gMiA6IG51bWxpbmVzKSAqIGxpbmVIZWlnaHQpICsgMTA7XG4gICAgfVxuXG59XG4iXX0=