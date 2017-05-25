"use strict";
var core_1 = require("@angular/core");
var _ = require("lodash");
var user_service_1 = require("./user.service");
var mock_data_service_1 = require("./mock-data.service");
var static_data_1 = require("../shared/static-data");
var BacklogService = (function () {
    function BacklogService(mockDataService, userService) {
        this.mockDataService = mockDataService;
        this.userService = userService;
        this._allItems = [];
        this._filteredItems = [];
        this._allItems = mockDataService.generatePTItems(userService.users);
    }
    Object.defineProperty(BacklogService.prototype, "items", {
        get: function () {
            return this._allItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BacklogService.prototype, "filteredItems", {
        get: function () {
            return this._filteredItems;
        },
        enumerable: true,
        configurable: true
    });
    BacklogService.prototype.getItem = function (id) {
        var selectedItem = _.find(this._allItems, function (i) { return i.id == id; });
        return Promise.resolve(selectedItem);
    };
    BacklogService.prototype.updatePtItem = function (item) {
    };
    BacklogService.prototype.filter = function (selectedViewIndex) {
        var filteredItems = [];
        switch (selectedViewIndex) {
            case 0:
                filteredItems = this._allItems.filter(function (i) { return i.assignee.fullName === 'Alex Ziskind'; });
                break;
            case 1:
                filteredItems = this._allItems.filter(function (i) { return i.status === static_data_1.StatusEnum.Open || i.status === static_data_1.StatusEnum.ReOpened; });
                break;
            case 2:
                filteredItems = this._allItems.filter(function (i) { return i.status === static_data_1.StatusEnum.Closed; });
                break;
            default:
                filteredItems = this._allItems;
        }
        this._filteredItems = filteredItems;
    };
    return BacklogService;
}());
BacklogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [mock_data_service_1.MockDataService,
        user_service_1.UserService])
], BacklogService);
exports.BacklogService = BacklogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2xvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2xvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFFM0MsMEJBQTRCO0FBRTVCLCtDQUE2QztBQUM3Qyx5REFBc0Q7QUFDdEQscURBQStFO0FBTS9FLElBQWEsY0FBYztJQVl2Qix3QkFDWSxlQUFnQyxFQUNoQyxXQUF3QjtRQUR4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFiNUIsY0FBUyxHQUFtQixFQUFFLENBQUM7UUFDL0IsbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBY3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQWJELHNCQUFXLGlDQUFLO2FBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx5Q0FBYTthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBU00sZ0NBQU8sR0FBZCxVQUFlLEVBQVU7UUFDckIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLHFDQUFZLEdBQW5CLFVBQW9CLElBQWE7SUFFakMsQ0FBQztJQUVNLCtCQUFNLEdBQWIsVUFBYyxpQkFBeUI7UUFDbkMsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFLLENBQUM7Z0JBQ0YsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssY0FBYyxFQUF0QyxDQUFzQyxDQUFDLENBQUM7Z0JBQ25GLEtBQUssQ0FBQztZQUNWLEtBQUssQ0FBQztnQkFDRixhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxLQUFLLHdCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssd0JBQVUsQ0FBQyxRQUFRLEVBQWhFLENBQWdFLENBQUMsQ0FBQztnQkFDN0csS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLEtBQUssd0JBQVUsQ0FBQyxNQUFNLEVBQTlCLENBQThCLENBQUMsQ0FBQztnQkFDM0UsS0FBSyxDQUFDO1lBQ1Y7Z0JBQ0ksYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkMsQ0FBQztRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO0lBQ3hDLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUE3Q0QsSUE2Q0M7QUE3Q1ksY0FBYztJQUQxQixpQkFBVSxFQUFFO3FDQWNvQixtQ0FBZTtRQUNuQiwwQkFBVztHQWQzQixjQUFjLENBNkMxQjtBQTdDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tEYXRhU2VydmljZSB9IGZyb20gJy4vbW9jay1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgSXRlbVR5cGVFbnVtLCBQcmlvcml0eUVudW0sIFN0YXR1c0VudW0gfSBmcm9tICcuLi9zaGFyZWQvc3RhdGljLWRhdGEnO1xuaW1wb3J0IHsgUFREb21haW4gfSBmcm9tICcuLi90eXBpbmdzL2RvbWFpbic7XG5pbXBvcnQgSVBUSXRlbSA9IFBURG9tYWluLklQVEl0ZW07XG5pbXBvcnQgSVVzZXIgPSBQVERvbWFpbi5JVXNlcjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhY2tsb2dTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9hbGxJdGVtczogQXJyYXk8SVBUSXRlbT4gPSBbXTtcbiAgICBwcml2YXRlIF9maWx0ZXJlZEl0ZW1zOiBBcnJheTxJUFRJdGVtPiA9IFtdO1xuXG4gICAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZmlsdGVyZWRJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcmVkSXRlbXM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbW9ja0RhdGFTZXJ2aWNlOiBNb2NrRGF0YVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2FsbEl0ZW1zID0gbW9ja0RhdGFTZXJ2aWNlLmdlbmVyYXRlUFRJdGVtcyh1c2VyU2VydmljZS51c2Vycyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEl0ZW0oaWQ6IHN0cmluZykge1xuICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gXy5maW5kKHRoaXMuX2FsbEl0ZW1zLCBpID0+IGkuaWQgPT0gaWQpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGVjdGVkSXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVB0SXRlbShpdGVtOiBJUFRJdGVtKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZmlsdGVyKHNlbGVjdGVkVmlld0luZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGZpbHRlcmVkSXRlbXMgPSBbXTtcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZFZpZXdJbmRleCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMgPSB0aGlzLl9hbGxJdGVtcy5maWx0ZXIoaSA9PiBpLmFzc2lnbmVlLmZ1bGxOYW1lID09PSAnQWxleCBaaXNraW5kJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2FsbEl0ZW1zLmZpbHRlcihpID0+IGkuc3RhdHVzID09PSBTdGF0dXNFbnVtLk9wZW4gfHwgaS5zdGF0dXMgPT09IFN0YXR1c0VudW0uUmVPcGVuZWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMgPSB0aGlzLl9hbGxJdGVtcy5maWx0ZXIoaSA9PiBpLnN0YXR1cyA9PT0gU3RhdHVzRW51bS5DbG9zZWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5fYWxsSXRlbXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IGZpbHRlcmVkSXRlbXM7XG4gICAgfVxufVxuIl19