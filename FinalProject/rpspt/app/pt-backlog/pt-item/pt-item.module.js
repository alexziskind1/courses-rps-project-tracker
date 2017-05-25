"use strict";
//angular imports
var core_1 = require("@angular/core");
//nativescript imports
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var ns_module_factory_loader_1 = require("../../shared/ns-module-factory-loader");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
//app imports
var backlog_service_1 = require("../../services/backlog.service");
var pt_item_details_component_1 = require("./pt-item-details.component");
var pt_item_tasks_component_1 = require("./pt-item-tasks.component");
var pt_item_chitchat_component_1 = require("./pt-item-chitchat.component");
var inc_dec_component_1 = require("../shared/inc-dec.component");
var item_type_picker_modal_component_1 = require("../shared/item-type-picker-modal.component");
var user_picker_modal_component_1 = require("../shared/user-picker-modal.component");
var pipes_module_1 = require("../pipes/pipes.module");
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
        declarations: [
            pt_item_details_component_1.PTItemDetailsComponent,
            pt_item_tasks_component_1.PTItemTasksComponent,
            pt_item_chitchat_component_1.PTItemChitchatComponent,
            inc_dec_component_1.IncDecComponent,
            item_type_picker_modal_component_1.ItemTypePickerModalComponent,
            user_picker_modal_component_1.UserPickerModalComponent
        ],
        entryComponents: [
            item_type_picker_modal_component_1.ItemTypePickerModalComponent,
            user_picker_modal_component_1.UserPickerModalComponent
        ],
        providers: [
            backlog_service_1.BacklogService,
            modal_dialog_1.ModalDialogService,
            { provide: core_1.NgModuleFactoryLoader, useClass: ns_module_factory_loader_1.NSModuleFactoryLoader }
        ]
    })
], PTItemModule);
exports.PTItemModule = PTItemModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1pdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBQWlCO0FBQ2pCLHNDQUFnRTtBQUVoRSxzQkFBc0I7QUFDdEIsMERBQW1FO0FBQ25FLG9EQUFxRTtBQUNyRSxrRkFBOEU7QUFDOUUsa0VBQXVFO0FBSXZFLGFBQWE7QUFDYixrRUFBZ0U7QUFFaEUseUVBQXFFO0FBQ3JFLHFFQUFpRTtBQUNqRSwyRUFBdUU7QUFDdkUsaUVBQThEO0FBQzlELCtGQUEwRjtBQUMxRixxRkFBaUY7QUFDakYsc0RBQW9EO0FBMkJwRCxJQUFhLFlBQVk7SUFBekI7SUFBNEIsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUE3QixJQUE2QjtBQUFoQixZQUFZO0lBeEJ4QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCw2QkFBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLDBCQUFXO1NBQ2Q7UUFDRCxZQUFZLEVBQUU7WUFDVixrREFBc0I7WUFDdEIsOENBQW9CO1lBQ3BCLG9EQUF1QjtZQUN2QixtQ0FBZTtZQUNmLCtEQUE0QjtZQUM1QixzREFBd0I7U0FDM0I7UUFDRCxlQUFlLEVBQUU7WUFDYiwrREFBNEI7WUFDNUIsc0RBQXdCO1NBQUM7UUFDN0IsU0FBUyxFQUFFO1lBQ1AsZ0NBQWM7WUFDZCxpQ0FBa0I7WUFDbEIsRUFBRSxPQUFPLEVBQUUsNEJBQXFCLEVBQUUsUUFBUSxFQUFFLGdEQUFxQixFQUFFO1NBRXRFO0tBQ0osQ0FBQztHQUNXLFlBQVksQ0FBSTtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vYW5ndWxhciBpbXBvcnRzXG5pbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLy9uYXRpdmVzY3JpcHQgaW1wb3J0c1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTlNNb2R1bGVGYWN0b3J5TG9hZGVyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ucy1tb2R1bGUtZmFjdG9yeS1sb2FkZXJcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuXG4vL2FwcCBpbXBvcnRzXG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2JhY2tsb2cuc2VydmljZSc7XG5cbmltcG9ydCB7IFBUSXRlbURldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3B0LWl0ZW0tZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUFRJdGVtVGFza3NDb21wb25lbnQgfSBmcm9tICcuL3B0LWl0ZW0tdGFza3MuY29tcG9uZW50JztcbmltcG9ydCB7IFBUSXRlbUNoaXRjaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtLWNoaXRjaGF0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmNEZWNDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvaW5jLWRlYy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9pdGVtLXR5cGUtcGlja2VyLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyUGlja2VyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvdXNlci1waWNrZXItbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vcGlwZXMvcGlwZXMubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgUGlwZXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQVEl0ZW1EZXRhaWxzQ29tcG9uZW50LFxuICAgICAgICBQVEl0ZW1UYXNrc0NvbXBvbmVudCxcbiAgICAgICAgUFRJdGVtQ2hpdGNoYXRDb21wb25lbnQsXG4gICAgICAgIEluY0RlY0NvbXBvbmVudCxcbiAgICAgICAgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCxcbiAgICAgICAgVXNlclBpY2tlck1vZGFsQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgSXRlbVR5cGVQaWNrZXJNb2RhbENvbXBvbmVudCxcbiAgICAgICAgVXNlclBpY2tlck1vZGFsQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQmFja2xvZ1NlcnZpY2UsXG4gICAgICAgIE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIHVzZUNsYXNzOiBOU01vZHVsZUZhY3RvcnlMb2FkZXIgfVxuXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQVEl0ZW1Nb2R1bGUgeyB9XG4iXX0=