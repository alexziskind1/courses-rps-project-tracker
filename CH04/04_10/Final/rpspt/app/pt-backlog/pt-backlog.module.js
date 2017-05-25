"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var backlog_service_1 = require("../services/backlog.service");
var pt_backlog_component_1 = require("./pt-backlog.component");
var pt_item_module_1 = require("./pt-item/pt-item.module");
var pipes_module_1 = require("./pipes/pipes.module");
var pt_item_list_component_1 = require("./pt-item-list/pt-item-list.component");
var PtBacklogModule = (function () {
    function PtBacklogModule() {
    }
    return PtBacklogModule;
}());
PtBacklogModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule,
            pt_item_module_1.PTItemModule,
            pipes_module_1.PipesModule
        ],
        exports: [pt_backlog_component_1.PtBacklogComponent],
        declarations: [
            pt_backlog_component_1.PtBacklogComponent,
            pt_item_list_component_1.PTItemListComponent,
            angular_1.SIDEDRAWER_DIRECTIVES
        ],
        providers: [
            backlog_service_1.BacklogService
        ],
    })
], PtBacklogModule);
exports.PtBacklogModule = PtBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLDBEQUFtRTtBQUNuRSxzRUFBbUY7QUFFbkYsK0RBQTZEO0FBQzdELCtEQUE0RDtBQUM1RCwyREFBd0Q7QUFDeEQscURBQW1EO0FBQ25ELGdGQUE0RTtBQWtCNUUsSUFBYSxlQUFlO0lBQTVCO0lBQStCLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFBaEMsSUFBZ0M7QUFBbkIsZUFBZTtJQWhCM0IsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsNkJBQWtCO1lBQ2xCLDZCQUFZO1lBQ1osMEJBQVc7U0FDZDtRQUNELE9BQU8sRUFBRSxDQUFDLHlDQUFrQixDQUFDO1FBQzdCLFlBQVksRUFBRTtZQUNWLHlDQUFrQjtZQUNsQiw0Q0FBbUI7WUFDbkIsK0JBQXFCO1NBQ3hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsZ0NBQWM7U0FDakI7S0FDSixDQUFDO0dBQ1csZUFBZSxDQUFJO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0nO1xuaW1wb3J0IHsgU0lERURSQVdFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyJztcblxuaW1wb3J0IHsgQmFja2xvZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9iYWNrbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHRCYWNrbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wdC1iYWNrbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQVEl0ZW1Nb2R1bGUgfSBmcm9tICcuL3B0LWl0ZW0vcHQtaXRlbS5tb2R1bGUnO1xuaW1wb3J0IHsgUGlwZXNNb2R1bGUgfSBmcm9tICcuL3BpcGVzL3BpcGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBQVEl0ZW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtLWxpc3QvcHQtaXRlbS1saXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIFBUSXRlbU1vZHVsZSxcbiAgICAgICAgUGlwZXNNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtQdEJhY2tsb2dDb21wb25lbnRdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQdEJhY2tsb2dDb21wb25lbnQsXG4gICAgICAgIFBUSXRlbUxpc3RDb21wb25lbnQsXG4gICAgICAgIFNJREVEUkFXRVJfRElSRUNUSVZFU1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEJhY2tsb2dTZXJ2aWNlXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHRCYWNrbG9nTW9kdWxlIHsgfVxuIl19