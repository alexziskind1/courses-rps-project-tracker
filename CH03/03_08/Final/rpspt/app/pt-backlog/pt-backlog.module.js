"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
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
        providers: [],
    })
], PtBacklogModule);
exports.PtBacklogModule = PtBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLDBEQUFtRTtBQUVuRSwrREFBNEQ7QUFDNUQsMkRBQXdEO0FBQ3hELHFEQUFtRDtBQUNuRCxnRkFBNEU7QUFlNUUsSUFBYSxlQUFlO0lBQTVCO0lBQStCLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFBaEMsSUFBZ0M7QUFBbkIsZUFBZTtJQWIzQixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCw2QkFBa0I7WUFDbEIsNkJBQVk7WUFDWiwwQkFBVztTQUNkO1FBQ0QsT0FBTyxFQUFFLENBQUMseUNBQWtCLENBQUM7UUFDN0IsWUFBWSxFQUFFO1lBQ1YseUNBQWtCO1lBQ2xCLDRDQUFtQjtTQUN0QjtRQUNELFNBQVMsRUFBRSxFQUFFO0tBQ2hCLENBQUM7R0FDVyxlQUFlLENBQUk7QUFBbkIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybSc7XG5cbmltcG9ydCB7IFB0QmFja2xvZ0NvbXBvbmVudCB9IGZyb20gJy4vcHQtYmFja2xvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUFRJdGVtTW9kdWxlIH0gZnJvbSAnLi9wdC1pdGVtL3B0LWl0ZW0ubW9kdWxlJztcbmltcG9ydCB7IFBpcGVzTW9kdWxlIH0gZnJvbSAnLi9waXBlcy9waXBlcy5tb2R1bGUnO1xuaW1wb3J0IHsgUFRJdGVtTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcHQtaXRlbS1saXN0L3B0LWl0ZW0tbGlzdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBQVEl0ZW1Nb2R1bGUsXG4gICAgICAgIFBpcGVzTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbUHRCYWNrbG9nQ29tcG9uZW50XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUHRCYWNrbG9nQ29tcG9uZW50LFxuICAgICAgICBQVEl0ZW1MaXN0Q29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBQdEJhY2tsb2dNb2R1bGUgeyB9XG4iXX0=