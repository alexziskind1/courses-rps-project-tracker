"use strict";
var core_1 = require("@angular/core");
var IncDecComponent = (function () {
    function IncDecComponent() {
        this.notifyIncDecTapped = new core_1.EventEmitter();
        this.decEnabled = true;
        this.incEnabled = true;
    }
    IncDecComponent.prototype.decTap = function () {
        this.notifyIncDecTapped.emit(false);
    };
    IncDecComponent.prototype.incTap = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jLWRlYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmMtZGVjLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXVFO0FBU3ZFLElBQWEsZUFBZTtJQU41QjtRQVFjLHVCQUFrQixHQUEwQixJQUFJLG1CQUFZLEVBQVcsQ0FBQztRQUN6RSxlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBWSxJQUFJLENBQUM7SUFTeEMsQ0FBQztJQVBVLGdDQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQVhhO0lBQVQsYUFBTSxFQUFFOzhCQUFxQixtQkFBWTsyREFBd0M7QUFDekU7SUFBUixZQUFLLEVBQUU7O21EQUE0QjtBQUMzQjtJQUFSLFlBQUssRUFBRTs7bURBQTRCO0FBSjNCLGVBQWU7SUFOM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO0tBQ3ZDLENBQUM7R0FDVyxlQUFlLENBYTNCO0FBYlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2luYy1kZWMnLFxuICAgIHRlbXBsYXRlVXJsOiAnaW5jLWRlYy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2luYy1kZWMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEluY0RlY0NvbXBvbmVudCB7XG5cbiAgICBAT3V0cHV0KCkgbm90aWZ5SW5jRGVjVGFwcGVkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgQElucHV0KCkgZGVjRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgaW5jRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwdWJsaWMgZGVjVGFwKCkge1xuICAgICAgICB0aGlzLm5vdGlmeUluY0RlY1RhcHBlZC5lbWl0KGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5jVGFwKCkge1xuICAgICAgICB0aGlzLm5vdGlmeUluY0RlY1RhcHBlZC5lbWl0KHRydWUpO1xuICAgIH1cbn1cblxuIl19