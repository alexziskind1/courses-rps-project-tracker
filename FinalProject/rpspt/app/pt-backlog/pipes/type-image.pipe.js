"use strict";
//angular imports
var core_1 = require("@angular/core");
//app imports
var static_data_1 = require("../../shared/static-data");
var TypeImagePipe = (function () {
    function TypeImagePipe() {
    }
    TypeImagePipe.prototype.transform = function (value) {
        return static_data_1.ItemTypeEnum.getImage(value);
    };
    return TypeImagePipe;
}());
TypeImagePipe = __decorate([
    core_1.Pipe({
        name: 'typeImage'
    })
], TypeImagePipe);
exports.TypeImagePipe = TypeImagePipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1pbWFnZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHlwZS1pbWFnZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQkFBaUI7QUFDakIsc0NBQW9EO0FBR3BELGFBQWE7QUFDYix3REFBd0Q7QUFLeEQsSUFBYSxhQUFhO0lBQTFCO0lBSUEsQ0FBQztJQUhHLGlDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ25CLE1BQU0sQ0FBQywwQkFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLGFBQWE7SUFIekIsV0FBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLFdBQVc7S0FDcEIsQ0FBQztHQUNXLGFBQWEsQ0FJekI7QUFKWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vYW5ndWxhciBpbXBvcnRzXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuLy9hcHAgaW1wb3J0c1xuaW1wb3J0IHsgSXRlbVR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICd0eXBlSW1hZ2UnXG59KVxuZXhwb3J0IGNsYXNzIFR5cGVJbWFnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBJdGVtVHlwZUVudW0uZ2V0SW1hZ2UodmFsdWUpO1xuICAgIH1cbn0iXX0=