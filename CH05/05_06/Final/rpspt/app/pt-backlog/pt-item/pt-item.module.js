"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var pt_item_component_1 = require("./pt-item.component");
var pt_item_details_component_1 = require("./pt-item-details.component");
var item_type_picker_modal_component_1 = require("../shared/item-type-picker-modal.component");
var PTItemModule = (function () {
    function PTItemModule() {
    }
    return PTItemModule;
}());
PTItemModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule
        ],
        exports: [pt_item_component_1.PTItemComponent],
        declarations: [
            pt_item_component_1.PTItemComponent,
            pt_item_details_component_1.PTItemDetailsComponent,
            item_type_picker_modal_component_1.ItemTypePickerModalComponent
        ],
        providers: [],
        entryComponents: [
            item_type_picker_modal_component_1.ItemTypePickerModalComponent
        ]
    })
], PTItemModule);
exports.PTItemModule = PTItemModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLDBEQUFtRTtBQUNuRSxvREFBcUU7QUFFckUseURBQXNEO0FBQ3RELHlFQUFxRTtBQUNyRSwrRkFBMEY7QUFrQjFGLElBQWEsWUFBWTtJQUF6QjtJQUE0QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTdCLElBQTZCO0FBQWhCLFlBQVk7SUFoQnhCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLDZCQUFrQjtZQUNsQiwrQkFBdUI7U0FDMUI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO1FBQzFCLFlBQVksRUFBRTtZQUNWLG1DQUFlO1lBQ2Ysa0RBQXNCO1lBQ3RCLCtEQUE0QjtTQUMvQjtRQUNELFNBQVMsRUFBRSxFQUFFO1FBQ2IsZUFBZSxFQUFFO1lBQ2IsK0RBQTRCO1NBQy9CO0tBQ0osQ0FBQztHQUNXLFlBQVksQ0FBSTtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgUFRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQVEl0ZW1EZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtLWRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvaXRlbS10eXBlLXBpY2tlci1tb2RhbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1BUSXRlbUNvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFBUSXRlbUNvbXBvbmVudCxcbiAgICAgICAgUFRJdGVtRGV0YWlsc0NvbXBvbmVudCxcbiAgICAgICAgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUFRJdGVtTW9kdWxlIHsgfVxuIl19