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
        //this.backlogService.addComment(this.item, newComment);
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
        styleUrls: ['pt-item-chitchat.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        router_2.RouterExtensions,
        services_1.BacklogService,
        services_1.AuthenticationService,
        services_1.UserService])
], PTItemChitchatComponent);
exports.PTItemChitchatComponent = PTItemChitchatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS1jaGl0Y2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLWNoaXRjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBQWlCO0FBQ2pCLHNDQUFrRDtBQUNsRCwwQ0FBNkU7QUFFN0Usc0JBQXNCO0FBQ3RCLHNEQUErRDtBQUcvRCxxQ0FBNEM7QUFFNUMsbUJBQW1CO0FBQ25CLHVDQUFxQztBQUVyQyxhQUFhO0FBQ2IsMkNBQW9GO0FBYXBGLElBQWEsdUJBQXVCO0lBa0JoQyxpQ0FBb0IsS0FBcUIsRUFDN0IsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixXQUFrQyxFQUNsQyxXQUF3QjtRQUxoQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUM3QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBckI1QixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFFdkIsbUJBQWMsR0FBVyxFQUFFLENBQUM7SUFtQkssQ0FBQztJQWpCekMsc0JBQVcsNkNBQVE7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxtREFBYzthQUF6QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxzREFBaUI7YUFBNUI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBVU0sMENBQVEsR0FBZjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNuQixTQUFTLENBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBekMsQ0FBeUMsQ0FBQzthQUN4RSxTQUFTLENBQUMsVUFBQyxJQUFhLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSwyQ0FBUyxHQUFoQixVQUFpQixZQUFzQjtRQUNuQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQztRQUNYLElBQUksVUFBVSxHQUFnQjtZQUMxQixLQUFLLEVBQUUsUUFBUTtZQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1NBQzFDLENBQUM7UUFDRix3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVNLDBDQUFRLEdBQWYsVUFBZ0IsR0FBVztRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sK0NBQWEsR0FBcEIsVUFBcUIsWUFBb0I7UUFDckMsSUFBSSxVQUFVLEdBQUcsZ0JBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRUwsOEJBQUM7QUFBRCxDQUFDLEFBdkRELElBdURDO0FBdkRZLHVCQUF1QjtJQU5uQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsV0FBVyxFQUFFLGlDQUFpQztRQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztLQUNoRCxDQUFDO3FDQW1CNkIsdUJBQWM7UUFDckIsZUFBTTtRQUNJLHlCQUFnQjtRQUNsQix5QkFBYztRQUNqQixnQ0FBcUI7UUFDckIsc0JBQVc7R0F2QjNCLHVCQUF1QixDQXVEbkM7QUF2RFksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLy9hbmd1bGFyIGltcG9ydHNcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgVXJsU2VnbWVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vbmF0aXZlc2NyaXB0IGltcG9ydHNcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tICd1aS90ZXh0LXZpZXcnO1xuaW1wb3J0IHsgU2Nyb2xsVmlldyB9IGZyb20gJ3VpL3Njcm9sbC12aWV3JztcbmltcG9ydCB7IGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tICdwbGF0Zm9ybSc7XG5cbi8vM3JkIHBhcnR5IGltcG9ydHNcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcblxuLy9hcHAgaW1wb3J0c1xuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UsIEF1dGhlbnRpY2F0aW9uU2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBQVERvbWFpbiB9IGZyb20gJy4uLy4uL3R5cGluZ3MvZG9tYWluJztcbmltcG9ydCBJUFRJdGVtID0gUFREb21haW4uSVBUSXRlbTtcbmltcG9ydCBJVGFzayA9IFBURG9tYWluLklUYXNrO1xuaW1wb3J0IElOZXdDb21tZW50ID0gUFREb21haW4uSU5ld0NvbW1lbnQ7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3B0LWl0ZW0tY2hpdGNoYXQnLFxuICAgIHRlbXBsYXRlVXJsOiAncHQtaXRlbS1jaGl0Y2hhdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3B0LWl0ZW0tY2hpdGNoYXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBUSXRlbUNoaXRjaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgc2VsZWN0ZWRWaWV3SW5kZXggPSAwO1xuICAgIHB1YmxpYyBpdGVtOiBJUFRJdGVtO1xuICAgIHB1YmxpYyBuZXdDb21tZW50VGV4dDogc3RyaW5nID0gJyc7XG5cbiAgICBwdWJsaWMgZ2V0IGNvbW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtLmNvbW1lbnRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYW5pbWF0aW9uU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVmlld0luZGV4ID09PSAyID8gJ29mZicgOiAnb24nO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY3VycmVudFVzZXJBdmF0YXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyLmF2YXRhcjtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGJhY2tsb2dTZXJ2aWNlOiBCYWNrbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkgeyB9XG5cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQucGFyYW1zXG4gICAgICAgICAgICAuc3dpdGNoTWFwKChwYXJhbXM6IFBhcmFtcykgPT4gdGhpcy5iYWNrbG9nU2VydmljZS5nZXRJdGVtKHBhcmFtc1snaWQnXSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChpdGVtOiBJUFRJdGVtKSA9PiB0aGlzLml0ZW0gPSBpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkVGFwcGVkKG5ld0NvbW1lbnRUVjogVGV4dFZpZXcpIHtcbiAgICAgICAgbGV0IG5ld1RpdGxlID0gdGhpcy5uZXdDb21tZW50VGV4dC50cmltKCk7XG4gICAgICAgIGlmIChuZXdUaXRsZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBuZXdDb21tZW50OiBJTmV3Q29tbWVudCA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBuZXdUaXRsZSxcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy5hdXRoU2VydmljZS5jdXJyZW50VXNlci5pZFxuICAgICAgICB9O1xuICAgICAgICAvL3RoaXMuYmFja2xvZ1NlcnZpY2UuYWRkQ29tbWVudCh0aGlzLml0ZW0sIG5ld0NvbW1lbnQpO1xuICAgICAgICB0aGlzLm5ld0NvbW1lbnRUZXh0ID0gJyc7XG4gICAgICAgIG5ld0NvbW1lbnRUVi5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1hdGhDZWlsKG51bTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tbWVudEhlaWdodChjb21tZW50VGl0bGU6IHN0cmluZykge1xuICAgICAgICBsZXQgbGluZUhlaWdodCA9IGlzSU9TID8gMjAgOiAzMDtcbiAgICAgICAgbGV0IG51bWxpbmVzID0gTWF0aC5jZWlsKGNvbW1lbnRUaXRsZS5sZW5ndGggLyAyMik7XG4gICAgICAgIHJldHVybiAoKG51bWxpbmVzIDwgMiA/IDIgOiBudW1saW5lcykgKiBsaW5lSGVpZ2h0KSArIDEwO1xuICAgIH1cblxufVxuIl19