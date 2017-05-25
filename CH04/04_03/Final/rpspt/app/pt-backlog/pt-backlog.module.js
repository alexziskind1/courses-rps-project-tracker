"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
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
            pt_item_list_component_1.PTItemListComponent
        ],
        providers: [
            backlog_service_1.BacklogService
        ],
    })
], PtBacklogModule);
exports.PtBacklogModule = PtBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLDBEQUFtRTtBQUVuRSwrREFBNkQ7QUFDN0QsK0RBQTREO0FBQzVELDJEQUF3RDtBQUN4RCxxREFBbUQ7QUFDbkQsZ0ZBQTRFO0FBaUI1RSxJQUFhLGVBQWU7SUFBNUI7SUFBK0IsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUFoQyxJQUFnQztBQUFuQixlQUFlO0lBZjNCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLDZCQUFrQjtZQUNsQiw2QkFBWTtZQUNaLDBCQUFXO1NBQ2Q7UUFDRCxPQUFPLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztRQUM3QixZQUFZLEVBQUU7WUFDVix5Q0FBa0I7WUFDbEIsNENBQW1CO1NBQ3RCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsZ0NBQWM7U0FDakI7S0FDSixDQUFDO0dBQ1csZUFBZSxDQUFJO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0nO1xuXG5pbXBvcnQgeyBCYWNrbG9nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2JhY2tsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBQdEJhY2tsb2dDb21wb25lbnQgfSBmcm9tICcuL3B0LWJhY2tsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFBUSXRlbU1vZHVsZSB9IGZyb20gJy4vcHQtaXRlbS9wdC1pdGVtLm1vZHVsZSc7XG5pbXBvcnQgeyBQaXBlc01vZHVsZSB9IGZyb20gJy4vcGlwZXMvcGlwZXMubW9kdWxlJztcbmltcG9ydCB7IFBUSXRlbUxpc3RDb21wb25lbnQgfSBmcm9tICcuL3B0LWl0ZW0tbGlzdC9wdC1pdGVtLWxpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgUFRJdGVtTW9kdWxlLFxuICAgICAgICBQaXBlc01vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1B0QmFja2xvZ0NvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFB0QmFja2xvZ0NvbXBvbmVudCxcbiAgICAgICAgUFRJdGVtTGlzdENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEJhY2tsb2dTZXJ2aWNlXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHRCYWNrbG9nTW9kdWxlIHsgfVxuIl19