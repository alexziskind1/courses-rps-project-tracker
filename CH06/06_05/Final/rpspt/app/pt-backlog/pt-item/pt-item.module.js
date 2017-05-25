"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var pipes_module_1 = require("../pipes/pipes.module");
//import { PTItemComponent } from './pt-item.component';
var pt_item_details_component_1 = require("./pt-item-details.component");
var pt_item_tasks_component_1 = require("./pt-item-tasks.component");
var pt_item_chitchat_component_1 = require("./pt-item-chitchat.component");
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
        exports: [],
        declarations: [
            //PTItemComponent,
            pt_item_details_component_1.PTItemDetailsComponent,
            pt_item_tasks_component_1.PTItemTasksComponent,
            pt_item_chitchat_component_1.PTItemChitchatComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLDBEQUFtRTtBQUNuRSxvREFBcUU7QUFFckUsc0RBQW9EO0FBQ3BELHdEQUF3RDtBQUN4RCx5RUFBcUU7QUFDckUscUVBQWlFO0FBQ2pFLDJFQUF1RTtBQUd2RSwrRkFBMEY7QUFDMUYsaUVBQThEO0FBeUI5RCxJQUFhLFlBQVk7SUFBekI7SUFBNEIsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUE3QixJQUE2QjtBQUFoQixZQUFZO0lBdEJ4QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCw2QkFBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLDBCQUFXO1NBQ2Q7UUFDRCxPQUFPLEVBQUUsRUFFUjtRQUNELFlBQVksRUFBRTtZQUNWLGtCQUFrQjtZQUNsQixrREFBc0I7WUFDdEIsOENBQW9CO1lBQ3BCLG9EQUF1QjtZQUN2QiwrREFBNEI7WUFDNUIsbUNBQWU7U0FDbEI7UUFDRCxTQUFTLEVBQUUsRUFBRTtRQUNiLGVBQWUsRUFBRTtZQUNiLCtEQUE0QjtTQUMvQjtLQUNKLENBQUM7R0FDVyxZQUFZLENBQUk7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IFBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vcGlwZXMvcGlwZXMubW9kdWxlJztcbi8vaW1wb3J0IHsgUFRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQVEl0ZW1EZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtLWRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IFBUSXRlbVRhc2tzQ29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtLXRhc2tzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQVEl0ZW1DaGl0Y2hhdENvbXBvbmVudCB9IGZyb20gJy4vcHQtaXRlbS1jaGl0Y2hhdC5jb21wb25lbnQnO1xuXG5cbmltcG9ydCB7IEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvaXRlbS10eXBlLXBpY2tlci1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5jRGVjQ29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2luYy1kZWMuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgUGlwZXNNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgLy9QVEl0ZW1Db21wb25lbnRcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICAvL1BUSXRlbUNvbXBvbmVudCxcbiAgICAgICAgUFRJdGVtRGV0YWlsc0NvbXBvbmVudCxcbiAgICAgICAgUFRJdGVtVGFza3NDb21wb25lbnQsXG4gICAgICAgIFBUSXRlbUNoaXRjaGF0Q29tcG9uZW50LFxuICAgICAgICBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50LFxuICAgICAgICBJbmNEZWNDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIEl0ZW1UeXBlUGlja2VyTW9kYWxDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBUSXRlbU1vZHVsZSB7IH1cbiJdfQ==