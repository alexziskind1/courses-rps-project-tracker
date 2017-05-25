"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
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
        imports: [platform_1.NativeScriptModule],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLDBEQUFtRTtBQUVuRSx5REFBc0Q7QUFDdEQseUVBQXFFO0FBQ3JFLCtGQUEwRjtBQWUxRixJQUFhLFlBQVk7SUFBekI7SUFBNEIsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUE3QixJQUE2QjtBQUFoQixZQUFZO0lBYnhCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLDZCQUFrQixDQUFDO1FBQzdCLE9BQU8sRUFBRSxDQUFDLG1DQUFlLENBQUM7UUFDMUIsWUFBWSxFQUFFO1lBQ1YsbUNBQWU7WUFDZixrREFBc0I7WUFDdEIsK0RBQTRCO1NBQy9CO1FBQ0QsU0FBUyxFQUFFLEVBQUU7UUFDYixlQUFlLEVBQUU7WUFDYiwrREFBNEI7U0FDL0I7S0FDSixDQUFDO0dBQ1csWUFBWSxDQUFJO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5cbmltcG9ydCB7IFBUSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vcHQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUFRJdGVtRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vcHQtaXRlbS1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2l0ZW0tdHlwZS1waWNrZXItbW9kYWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlXSxcbiAgICBleHBvcnRzOiBbUFRJdGVtQ29tcG9uZW50XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUFRJdGVtQ29tcG9uZW50LFxuICAgICAgICBQVEl0ZW1EZXRhaWxzQ29tcG9uZW50LFxuICAgICAgICBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQVEl0ZW1Nb2R1bGUgeyB9XG4iXX0=