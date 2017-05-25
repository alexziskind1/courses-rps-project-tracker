"use strict";
var core_1 = require("@angular/core");
var IncDecComponent = (function () {
    function IncDecComponent() {
        this.notifyIncDecTapped = new core_1.EventEmitter();
        this.decEnabled = true;
        this.incEnabled = true;
    }
    IncDecComponent.prototype.decTap = function () {
        //Emit event
        this.notifyIncDecTapped.emit(false);
    };
    IncDecComponent.prototype.incTap = function () {
        //Emit event
        this.notifyIncDecTapped.emit(true);
    };
    return IncDecComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IncDecComponent.prototype, "notifyIncDecTapped", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], IncDecComponent.prototype, "decEnabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], IncDecComponent.prototype, "incEnabled", void 0);
IncDecComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'inc-dec',
        templateUrl: 'inc-dec.component.html',
        styleUrls: ['inc-dec.component.css']
    })
], IncDecComponent);
exports.IncDecComponent = IncDecComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jLWRlYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmMtZGVjLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXVFO0FBU3ZFLElBQWEsZUFBZTtJQU41QjtRQVFjLHVCQUFrQixHQUEwQixJQUFJLG1CQUFZLEVBQVcsQ0FBQztRQUN6RSxlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBWSxJQUFJLENBQUM7SUFXeEMsQ0FBQztJQVRVLGdDQUFNLEdBQWI7UUFDSSxZQUFZO1FBQ1osSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sZ0NBQU0sR0FBYjtRQUNJLFlBQVk7UUFDWixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBYmE7SUFBVCxhQUFNLEVBQUU7OEJBQXFCLG1CQUFZOzJEQUF3QztBQUN6RTtJQUFSLFlBQUssRUFBRTs7bURBQTRCO0FBQzNCO0lBQVIsWUFBSyxFQUFFOzttREFBNEI7QUFKM0IsZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDdkMsQ0FBQztHQUNXLGVBQWUsQ0FlM0I7QUFmWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnaW5jLWRlYycsXG4gICAgdGVtcGxhdGVVcmw6ICdpbmMtZGVjLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnaW5jLWRlYy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5jRGVjQ29tcG9uZW50IHtcblxuICAgIEBPdXRwdXQoKSBub3RpZnlJbmNEZWNUYXBwZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICBASW5wdXQoKSBkZWNFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBpbmNFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBkZWNUYXAoKSB7XG4gICAgICAgIC8vRW1pdCBldmVudFxuICAgICAgICB0aGlzLm5vdGlmeUluY0RlY1RhcHBlZC5lbWl0KGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5jVGFwKCkge1xuICAgICAgICAvL0VtaXQgZXZlbnRcbiAgICAgICAgdGhpcy5ub3RpZnlJbmNEZWNUYXBwZWQuZW1pdCh0cnVlKTtcbiAgICB9XG59XG5cbiJdfQ==