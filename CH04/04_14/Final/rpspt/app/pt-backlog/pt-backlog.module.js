"use strict";
var core_1 = require("@angular/core");
//nativescript imports
var platform_1 = require("nativescript-angular/platform");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var services_1 = require("../services");
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
            services_1.BacklogService
        ],
    })
], PtBacklogModule);
exports.PtBacklogModule = PtBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLHNCQUFzQjtBQUN0QiwwREFBbUU7QUFDbkUsc0VBQW1GO0FBRW5GLHdDQUE2QztBQUM3QywrREFBNEQ7QUFDNUQsZ0ZBQTRFO0FBQzVFLDJEQUF3RDtBQUN4RCw4RUFBMEU7QUFDMUUscURBQW1EO0FBc0JuRCxJQUFhLGVBQWU7SUFBNUI7SUFBK0IsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUFoQyxJQUFnQztBQUFuQixlQUFlO0lBcEIzQixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCw2QkFBa0I7WUFDbEIsNkJBQVk7WUFDWiwwQkFBVztTQUNkO1FBQ0QsT0FBTyxFQUFFLENBQUMseUNBQWtCLENBQUM7UUFDN0IsWUFBWSxFQUFFO1lBQ1YsK0JBQXFCO1lBQ3JCLHlDQUFrQjtZQUNsQiw0Q0FBbUI7WUFDbkIsZ0RBQXFCO1NBQ3hCO1FBQ0QsZUFBZSxFQUFFO1lBQ2IsZ0RBQXFCO1NBQ3hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AseUJBQWM7U0FDakI7S0FDSixDQUFDO0dBQ1csZUFBZSxDQUFJO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy9uYXRpdmVzY3JpcHQgaW1wb3J0c1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBTSURFRFJBV0VSX0RJUkVDVElWRVMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IEJhY2tsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgUFRCYWNrbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wdC1iYWNrbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQVEl0ZW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtLWxpc3QvcHQtaXRlbS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQVEl0ZW1Nb2R1bGUgfSBmcm9tICcuL3B0LWl0ZW0vcHQtaXRlbS5tb2R1bGUnO1xuaW1wb3J0IHsgQWRkSXRlbU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvYWRkLWl0ZW0tbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFBpcGVzTW9kdWxlIH0gZnJvbSAnLi9waXBlcy9waXBlcy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBQVEl0ZW1Nb2R1bGUsXG4gICAgICAgIFBpcGVzTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbUFRCYWNrbG9nQ29tcG9uZW50XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU0lERURSQVdFUl9ESVJFQ1RJVkVTLFxuICAgICAgICBQVEJhY2tsb2dDb21wb25lbnQsXG4gICAgICAgIFBUSXRlbUxpc3RDb21wb25lbnQsXG4gICAgICAgIEFkZEl0ZW1Nb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIEFkZEl0ZW1Nb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEJhY2tsb2dTZXJ2aWNlXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHRCYWNrbG9nTW9kdWxlIHsgfVxuIl19