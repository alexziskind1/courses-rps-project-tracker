"use strict";
var core_1 = require("@angular/core");
//nativescript imports
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var services_1 = require("../services");
var mock_data_service_1 = require("../services/mock-data.service");
var pt_backlog_component_1 = require("./pt-backlog.component");
var pt_item_list_component_1 = require("./pt-item-list/pt-item-list.component");
var pt_item_module_1 = require("./pt-item/pt-item.module");
var add_item_modal_component_1 = require("./shared/add-item-modal.component");
var pipes_module_1 = require("./pipes/pipes.module");
var PtBacklogModule = (function () {
    function PtBacklogModule() {
    }
    return PtBacklogModule;
}());
PtBacklogModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            pt_item_module_1.PTItemModule,
            pipes_module_1.PipesModule
        ],
        exports: [pt_backlog_component_1.PTBacklogComponent],
        declarations: [
            angular_1.SIDEDRAWER_DIRECTIVES,
            pt_backlog_component_1.PTBacklogComponent,
            pt_item_list_component_1.PTItemListComponent,
            add_item_modal_component_1.AddItemModalComponent
        ],
        entryComponents: [
            add_item_modal_component_1.AddItemModalComponent
        ],
        providers: [
            services_1.BacklogService,
            mock_data_service_1.MockDataService
        ],
    })
], PtBacklogModule);
exports.PtBacklogModule = PtBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLHNCQUFzQjtBQUN0QiwwREFBbUU7QUFDbkUsb0RBQXFFO0FBQ3JFLHNFQUFtRjtBQUVuRix3Q0FBNkM7QUFDN0MsbUVBQWdFO0FBQ2hFLCtEQUE0RDtBQUM1RCxnRkFBNEU7QUFDNUUsMkRBQXdEO0FBQ3hELDhFQUEwRTtBQUMxRSxxREFBbUQ7QUF3Qm5ELElBQWEsZUFBZTtJQUE1QjtJQUErQixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBQWhDLElBQWdDO0FBQW5CLGVBQWU7SUF0QjNCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLDZCQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsNkJBQVk7WUFDWiwwQkFBVztTQUNkO1FBQ0QsT0FBTyxFQUFFLENBQUMseUNBQWtCLENBQUM7UUFDN0IsWUFBWSxFQUFFO1lBQ1YsK0JBQXFCO1lBQ3JCLHlDQUFrQjtZQUNsQiw0Q0FBbUI7WUFDbkIsZ0RBQXFCO1NBQ3hCO1FBQ0QsZUFBZSxFQUFFO1lBQ2IsZ0RBQXFCO1NBQ3hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AseUJBQWM7WUFDZCxtQ0FBZTtTQUNsQjtLQUNKLENBQUM7R0FDVyxlQUFlLENBQUk7QUFBbkIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vL25hdGl2ZXNjcmlwdCBpbXBvcnRzXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTSURFRFJBV0VSX0RJUkVDVElWRVMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IEJhY2tsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgTW9ja0RhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbW9jay1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgUFRCYWNrbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wdC1iYWNrbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQVEl0ZW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtLWxpc3QvcHQtaXRlbS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQVEl0ZW1Nb2R1bGUgfSBmcm9tICcuL3B0LWl0ZW0vcHQtaXRlbS5tb2R1bGUnO1xuaW1wb3J0IHsgQWRkSXRlbU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvYWRkLWl0ZW0tbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFBpcGVzTW9kdWxlIH0gZnJvbSAnLi9waXBlcy9waXBlcy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgUFRJdGVtTW9kdWxlLFxuICAgICAgICBQaXBlc01vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1BUQmFja2xvZ0NvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNJREVEUkFXRVJfRElSRUNUSVZFUyxcbiAgICAgICAgUFRCYWNrbG9nQ29tcG9uZW50LFxuICAgICAgICBQVEl0ZW1MaXN0Q29tcG9uZW50LFxuICAgICAgICBBZGRJdGVtTW9kYWxDb21wb25lbnRcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBBZGRJdGVtTW9kYWxDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBCYWNrbG9nU2VydmljZSxcbiAgICAgICAgTW9ja0RhdGFTZXJ2aWNlXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHRCYWNrbG9nTW9kdWxlIHsgfVxuIl19