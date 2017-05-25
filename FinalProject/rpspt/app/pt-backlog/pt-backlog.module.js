"use strict";
//angular imports
var core_1 = require("@angular/core");
//nativescript imports
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
//app imports
var pt_backlog_routing_1 = require("./pt-backlog.routing");
var backlog_service_1 = require("../services/backlog.service");
var mock_data_service_1 = require("../services/mock-data.service");
var pt_backlog_component_1 = require("./pt-backlog.component");
var pt_item_list_component_1 = require("./pt-item-list/pt-item-list.component");
var pt_item_component_1 = require("./pt-item/pt-item.component");
var pt_item_module_1 = require("./pt-item/pt-item.module");
var add_item_modal_component_1 = require("./shared/add-item-modal.component");
var pipes_module_1 = require("./pipes/pipes.module");
var PTBacklogModule = (function () {
    function PTBacklogModule() {
    }
    return PTBacklogModule;
}());
PTBacklogModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            pt_backlog_routing_1.BacklogRoutingModule,
            pt_item_module_1.PTItemModule,
            pipes_module_1.PipesModule
        ],
        declarations: [
            pt_backlog_component_1.PTBacklogComponent,
            pt_item_list_component_1.PTItemListComponent,
            pt_item_component_1.PTItemComponent,
            add_item_modal_component_1.AddItemModalComponent,
            angular_1.SIDEDRAWER_DIRECTIVES
        ],
        entryComponents: [
            add_item_modal_component_1.AddItemModalComponent
        ],
        providers: [
            backlog_service_1.BacklogService,
            mock_data_service_1.MockDataService
        ]
    })
], PTBacklogModule);
exports.PTBacklogModule = PTBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBQWlCO0FBQ2pCLHNDQUF5QztBQUV6QyxzQkFBc0I7QUFDdEIsMERBQW1FO0FBQ25FLG9EQUFxRTtBQUNyRSxzRUFBbUY7QUFFbkYsYUFBYTtBQUNiLDJEQUE0RDtBQUM1RCwrREFBNkQ7QUFDN0QsbUVBQWdFO0FBQ2hFLCtEQUE0RDtBQUM1RCxnRkFBNEU7QUFDNUUsaUVBQThEO0FBQzlELDJEQUF3RDtBQUN4RCw4RUFBMEU7QUFDMUUscURBQW1EO0FBMEJuRCxJQUFhLGVBQWU7SUFBNUI7SUFBK0IsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUFoQyxJQUFnQztBQUFuQixlQUFlO0lBdkIzQixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCw2QkFBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLHlDQUFvQjtZQUNwQiw2QkFBWTtZQUNaLDBCQUFXO1NBQ2Q7UUFDRCxZQUFZLEVBQUU7WUFDVix5Q0FBa0I7WUFDbEIsNENBQW1CO1lBQ25CLG1DQUFlO1lBQ2YsZ0RBQXFCO1lBQ3JCLCtCQUFxQjtTQUN4QjtRQUNELGVBQWUsRUFBRTtZQUNiLGdEQUFxQjtTQUN4QjtRQUNELFNBQVMsRUFBRTtZQUNQLGdDQUFjO1lBQ2QsbUNBQWU7U0FDbEI7S0FDSixDQUFDO0dBQ1csZUFBZSxDQUFJO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLy9hbmd1bGFyIGltcG9ydHNcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLy9uYXRpdmVzY3JpcHQgaW1wb3J0c1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU0lERURSQVdFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuXG4vL2FwcCBpbXBvcnRzXG5pbXBvcnQgeyBCYWNrbG9nUm91dGluZ01vZHVsZSB9IGZyb20gJy4vcHQtYmFja2xvZy5yb3V0aW5nJztcbmltcG9ydCB7IEJhY2tsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYmFja2xvZy5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tEYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21vY2stZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFBUQmFja2xvZ0NvbXBvbmVudCB9IGZyb20gJy4vcHQtYmFja2xvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUFRJdGVtTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcHQtaXRlbS1saXN0L3B0LWl0ZW0tbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUFRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtL3B0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFBUSXRlbU1vZHVsZSB9IGZyb20gJy4vcHQtaXRlbS9wdC1pdGVtLm1vZHVsZSc7XG5pbXBvcnQgeyBBZGRJdGVtTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9hZGQtaXRlbS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGlwZXNNb2R1bGUgfSBmcm9tICcuL3BpcGVzL3BpcGVzLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIEJhY2tsb2dSb3V0aW5nTW9kdWxlLFxuICAgICAgICBQVEl0ZW1Nb2R1bGUsXG4gICAgICAgIFBpcGVzTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUFRCYWNrbG9nQ29tcG9uZW50LFxuICAgICAgICBQVEl0ZW1MaXN0Q29tcG9uZW50LFxuICAgICAgICBQVEl0ZW1Db21wb25lbnQsXG4gICAgICAgIEFkZEl0ZW1Nb2RhbENvbXBvbmVudCxcbiAgICAgICAgU0lERURSQVdFUl9ESVJFQ1RJVkVTXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgQWRkSXRlbU1vZGFsQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQmFja2xvZ1NlcnZpY2UsXG4gICAgICAgIE1vY2tEYXRhU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUFRCYWNrbG9nTW9kdWxlIHsgfVxuIl19