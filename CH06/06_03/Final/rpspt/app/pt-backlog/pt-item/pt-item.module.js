"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var pipes_module_1 = require("../pipes/pipes.module");
var pt_item_component_1 = require("./pt-item.component");
var pt_item_details_component_1 = require("./pt-item-details.component");
var item_type_picker_modal_component_1 = require("../shared/item-type-picker-modal.component");
var inc_dec_component_1 = require("../shared/inc-dec.component");
var PTItemModule = (function () {
    function PTItemModule() {
    }
    return PTItemModule;
}());
PTItemModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            pipes_module_1.PipesModule
        ],
        exports: [pt_item_component_1.PTItemComponent],
        declarations: [
            pt_item_component_1.PTItemComponent,
            pt_item_details_component_1.PTItemDetailsComponent,
            item_type_picker_modal_component_1.ItemTypePickerModalComponent,
            inc_dec_component_1.IncDecComponent
        ],
        providers: [],
        entryComponents: [
            item_type_picker_modal_component_1.ItemTypePickerModalComponent
        ]
    })
], PTItemModule);
exports.PTItemModule = PTItemModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLDBEQUFtRTtBQUNuRSxvREFBcUU7QUFFckUsc0RBQW9EO0FBQ3BELHlEQUFzRDtBQUN0RCx5RUFBcUU7QUFDckUsK0ZBQTBGO0FBQzFGLGlFQUE4RDtBQXFCOUQsSUFBYSxZQUFZO0lBQXpCO0lBQTRCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFBN0IsSUFBNkI7QUFBaEIsWUFBWTtJQWxCeEIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsNkJBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2QiwwQkFBVztTQUNkO1FBQ0QsT0FBTyxFQUFFLENBQUMsbUNBQWUsQ0FBQztRQUMxQixZQUFZLEVBQUU7WUFDVixtQ0FBZTtZQUNmLGtEQUFzQjtZQUN0QiwrREFBNEI7WUFDNUIsbUNBQWU7U0FDbEI7UUFDRCxTQUFTLEVBQUUsRUFBRTtRQUNiLGVBQWUsRUFBRTtZQUNiLCtEQUE0QjtTQUMvQjtLQUNKLENBQUM7R0FDVyxZQUFZLENBQUk7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IFBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vcGlwZXMvcGlwZXMubW9kdWxlJztcbmltcG9ydCB7IFBUSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vcHQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUFRJdGVtRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vcHQtaXRlbS1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2l0ZW0tdHlwZS1waWNrZXItbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEluY0RlY0NvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9pbmMtZGVjLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIFBpcGVzTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbUFRJdGVtQ29tcG9uZW50XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUFRJdGVtQ29tcG9uZW50LFxuICAgICAgICBQVEl0ZW1EZXRhaWxzQ29tcG9uZW50LFxuICAgICAgICBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50LFxuICAgICAgICBJbmNEZWNDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBUSXRlbU1vZHVsZSB7IH1cbiJdfQ==