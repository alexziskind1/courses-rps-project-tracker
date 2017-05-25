"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var pt_item_component_1 = require("./pt-item.component");
var item_type_picker_modal_component_1 = require("../shared/item-type-picker-modal.component");
var PTItemModule = (function () {
    function PTItemModule() {
    }
    return PTItemModule;
}());
PTItemModule = __decorate([
    core_1.NgModule({
        imports: [platform_1.NativeScriptModule],
        exports: [pt_item_component_1.PTItemComponent],
        declarations: [
            pt_item_component_1.PTItemComponent,
            item_type_picker_modal_component_1.ItemTypePickerModalComponent
        ],
        providers: [],
        entryComponents: [
            item_type_picker_modal_component_1.ItemTypePickerModalComponent
        ]
    })
], PTItemModule);
exports.PTItemModule = PTItemModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLDBEQUFtRTtBQUVuRSx5REFBc0Q7QUFDdEQsK0ZBQTBGO0FBYzFGLElBQWEsWUFBWTtJQUF6QjtJQUE0QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTdCLElBQTZCO0FBQWhCLFlBQVk7SUFaeEIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsNkJBQWtCLENBQUM7UUFDN0IsT0FBTyxFQUFFLENBQUMsbUNBQWUsQ0FBQztRQUMxQixZQUFZLEVBQUU7WUFDVixtQ0FBZTtZQUNmLCtEQUE0QjtTQUMvQjtRQUNELFNBQVMsRUFBRSxFQUFFO1FBQ2IsZUFBZSxFQUFFO1lBQ2IsK0RBQTRCO1NBQy9CO0tBQ0osQ0FBQztHQUNXLFlBQVksQ0FBSTtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuXG5pbXBvcnQgeyBQVEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3B0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvaXRlbS10eXBlLXBpY2tlci1tb2RhbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtQVEl0ZW1Db21wb25lbnRdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQVEl0ZW1Db21wb25lbnQsXG4gICAgICAgIEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBUSXRlbU1vZHVsZSB7IH1cbiJdfQ==