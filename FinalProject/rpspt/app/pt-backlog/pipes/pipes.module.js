"use strict";
//angular imports
var core_1 = require("@angular/core");
//nativescript imports
var platform_1 = require("nativescript-angular/platform");
//app imports
var _1 = require("./");
var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule
        ],
        declarations: [
            _1.TypeDisplayPipe,
            _1.TypeImagePipe,
            _1.PriorityDisplayPipe,
            _1.StatusDisplayPipe,
            _1.PriorityClassPipe,
            _1.EstimateDisplayPipe
        ],
        exports: [
            _1.TypeDisplayPipe,
            _1.TypeImagePipe,
            _1.PriorityDisplayPipe,
            _1.StatusDisplayPipe,
            _1.PriorityClassPipe,
            _1.EstimateDisplayPipe
        ]
    })
], PipesModule);
exports.PipesModule = PipesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGlwZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQkFBaUI7QUFDakIsc0NBQXlDO0FBRXpDLHNCQUFzQjtBQUN0QiwwREFBbUU7QUFFbkUsYUFBYTtBQUNiLHVCQU9ZO0FBd0JaLElBQWEsV0FBVztJQUF4QjtJQUEyQixDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBQTVCLElBQTRCO0FBQWYsV0FBVztJQXJCdkIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsNkJBQWtCO1NBQ3JCO1FBQ0QsWUFBWSxFQUFFO1lBQ1Ysa0JBQWU7WUFDZixnQkFBYTtZQUNiLHNCQUFtQjtZQUNuQixvQkFBaUI7WUFDakIsb0JBQWlCO1lBQ2pCLHNCQUFtQjtTQUN0QjtRQUNELE9BQU8sRUFBRTtZQUNMLGtCQUFlO1lBQ2YsZ0JBQWE7WUFDYixzQkFBbUI7WUFDbkIsb0JBQWlCO1lBQ2pCLG9CQUFpQjtZQUNqQixzQkFBbUI7U0FDdEI7S0FDSixDQUFDO0dBQ1csV0FBVyxDQUFJO0FBQWYsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvL2FuZ3VsYXIgaW1wb3J0c1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vL25hdGl2ZXNjcmlwdCBpbXBvcnRzXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuLy9hcHAgaW1wb3J0c1xuaW1wb3J0IHtcbiAgICBUeXBlRGlzcGxheVBpcGUsXG4gICAgRXN0aW1hdGVEaXNwbGF5UGlwZSxcbiAgICBQcmlvcml0eUNsYXNzUGlwZSxcbiAgICBQcmlvcml0eURpc3BsYXlQaXBlLFxuICAgIFR5cGVJbWFnZVBpcGUsXG4gICAgU3RhdHVzRGlzcGxheVBpcGVcbn0gZnJvbSAnLi8nO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBUeXBlRGlzcGxheVBpcGUsXG4gICAgICAgIFR5cGVJbWFnZVBpcGUsXG4gICAgICAgIFByaW9yaXR5RGlzcGxheVBpcGUsXG4gICAgICAgIFN0YXR1c0Rpc3BsYXlQaXBlLFxuICAgICAgICBQcmlvcml0eUNsYXNzUGlwZSxcbiAgICAgICAgRXN0aW1hdGVEaXNwbGF5UGlwZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBUeXBlRGlzcGxheVBpcGUsXG4gICAgICAgIFR5cGVJbWFnZVBpcGUsXG4gICAgICAgIFByaW9yaXR5RGlzcGxheVBpcGUsXG4gICAgICAgIFN0YXR1c0Rpc3BsYXlQaXBlLFxuICAgICAgICBQcmlvcml0eUNsYXNzUGlwZSxcbiAgICAgICAgRXN0aW1hdGVEaXNwbGF5UGlwZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGlwZXNNb2R1bGUgeyB9XG4iXX0=