"use strict";
var core_1 = require("@angular/core");
//nativescript imports
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var pt_backlog_routing_1 = require("./pt-backlog.routing");
var services_1 = require("../services");
var mock_data_service_1 = require("../services/mock-data.service");
var pt_backlog_component_1 = require("./pt-backlog.component");
var pt_item_component_1 = require("./pt-item/pt-item.component");
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
            pt_backlog_routing_1.BacklogRoutingModule,
            pt_item_module_1.PTItemModule,
            pipes_module_1.PipesModule
        ],
        exports: [pt_backlog_component_1.PTBacklogComponent],
        declarations: [
            angular_1.SIDEDRAWER_DIRECTIVES,
            pt_item_component_1.PTItemComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLHNCQUFzQjtBQUN0QiwwREFBbUU7QUFDbkUsb0RBQXFFO0FBQ3JFLHNFQUFtRjtBQUVuRiwyREFBNEQ7QUFDNUQsd0NBQTZDO0FBQzdDLG1FQUFnRTtBQUNoRSwrREFBNEQ7QUFDNUQsaUVBQThEO0FBQzlELGdGQUE0RTtBQUM1RSwyREFBd0Q7QUFDeEQsOEVBQTBFO0FBQzFFLHFEQUFtRDtBQTBCbkQsSUFBYSxlQUFlO0lBQTVCO0lBQStCLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFBaEMsSUFBZ0M7QUFBbkIsZUFBZTtJQXhCM0IsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsNkJBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qix5Q0FBb0I7WUFDcEIsNkJBQVk7WUFDWiwwQkFBVztTQUNkO1FBQ0QsT0FBTyxFQUFFLENBQUMseUNBQWtCLENBQUM7UUFDN0IsWUFBWSxFQUFFO1lBQ1YsK0JBQXFCO1lBQ3JCLG1DQUFlO1lBQ2YseUNBQWtCO1lBQ2xCLDRDQUFtQjtZQUNuQixnREFBcUI7U0FDeEI7UUFDRCxlQUFlLEVBQUU7WUFDYixnREFBcUI7U0FDeEI7UUFDRCxTQUFTLEVBQUU7WUFDUCx5QkFBYztZQUNkLG1DQUFlO1NBQ2xCO0tBQ0osQ0FBQztHQUNXLGVBQWUsQ0FBSTtBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vbmF0aXZlc2NyaXB0IGltcG9ydHNcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFNJREVEUkFXRVJfRElSRUNUSVZFUyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgQmFja2xvZ1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3B0LWJhY2tsb2cucm91dGluZyc7XG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IE1vY2tEYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21vY2stZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFBUQmFja2xvZ0NvbXBvbmVudCB9IGZyb20gJy4vcHQtYmFja2xvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUFRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtL3B0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFBUSXRlbUxpc3RDb21wb25lbnQgfSBmcm9tICcuL3B0LWl0ZW0tbGlzdC9wdC1pdGVtLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFBUSXRlbU1vZHVsZSB9IGZyb20gJy4vcHQtaXRlbS9wdC1pdGVtLm1vZHVsZSc7XG5pbXBvcnQgeyBBZGRJdGVtTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9hZGQtaXRlbS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGlwZXNNb2R1bGUgfSBmcm9tICcuL3BpcGVzL3BpcGVzLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBCYWNrbG9nUm91dGluZ01vZHVsZSxcbiAgICAgICAgUFRJdGVtTW9kdWxlLFxuICAgICAgICBQaXBlc01vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1BUQmFja2xvZ0NvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNJREVEUkFXRVJfRElSRUNUSVZFUyxcbiAgICAgICAgUFRJdGVtQ29tcG9uZW50LFxuICAgICAgICBQVEJhY2tsb2dDb21wb25lbnQsXG4gICAgICAgIFBUSXRlbUxpc3RDb21wb25lbnQsXG4gICAgICAgIEFkZEl0ZW1Nb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIEFkZEl0ZW1Nb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEJhY2tsb2dTZXJ2aWNlLFxuICAgICAgICBNb2NrRGF0YVNlcnZpY2VcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQdEJhY2tsb2dNb2R1bGUgeyB9XG4iXX0=