"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var pt_backlog_component_1 = require("./pt-backlog.component");
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
            pipes_module_1.PipesModule
        ],
        exports: [pt_backlog_component_1.PtBacklogComponent],
        declarations: [
            pt_backlog_component_1.PtBacklogComponent,
            pt_item_list_component_1.PTItemListComponent
        ],
        providers: [],
    })
], PtBacklogModule);
exports.PtBacklogModule = PtBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLDBEQUFtRTtBQUVuRSwrREFBNEQ7QUFDNUQscURBQW1EO0FBQ25ELGdGQUE0RTtBQWM1RSxJQUFhLGVBQWU7SUFBNUI7SUFBK0IsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUFoQyxJQUFnQztBQUFuQixlQUFlO0lBWjNCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLDZCQUFrQjtZQUNsQiwwQkFBVztTQUNWO1FBQ0wsT0FBTyxFQUFFLENBQUMseUNBQWtCLENBQUM7UUFDN0IsWUFBWSxFQUFFO1lBQ1YseUNBQWtCO1lBQ2xCLDRDQUFtQjtTQUNsQjtRQUNMLFNBQVMsRUFBRSxFQUFFO0tBQ2hCLENBQUM7R0FDVyxlQUFlLENBQUk7QUFBbkIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybSc7XG5cbmltcG9ydCB7IFB0QmFja2xvZ0NvbXBvbmVudCB9IGZyb20gJy4vcHQtYmFja2xvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGlwZXNNb2R1bGUgfSBmcm9tICcuL3BpcGVzL3BpcGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBQVEl0ZW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtLWxpc3QvcHQtaXRlbS1saXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIFBpcGVzTW9kdWxlXG4gICAgICAgIF0sXG4gICAgZXhwb3J0czogW1B0QmFja2xvZ0NvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFB0QmFja2xvZ0NvbXBvbmVudCxcbiAgICAgICAgUFRJdGVtTGlzdENvbXBvbmVudFxuICAgICAgICBdLFxuICAgIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFB0QmFja2xvZ01vZHVsZSB7IH1cbiJdfQ==