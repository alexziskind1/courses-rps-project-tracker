"use strict";
var core_1 = require("@angular/core");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1pbWFnZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHlwZS1pbWFnZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBb0Q7QUFFcEQsd0RBQXdEO0FBTXhELElBQWEsYUFBYTtJQUExQjtJQUlBLENBQUM7SUFIRyxpQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixNQUFNLENBQUMsMEJBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxhQUFhO0lBSnpCLFdBQUksQ0FBQztRQUNGLElBQUksRUFBRSxXQUFXO0tBQ3BCLENBQUM7R0FFVyxhQUFhLENBSXpCO0FBSlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEl0ZW1UeXBlRW51bSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zdGF0aWMtZGF0YSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAndHlwZUltYWdlJ1xufSlcblxuZXhwb3J0IGNsYXNzIFR5cGVJbWFnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlcik6IGFueSB7XG4gICAgICAgIHJldHVybiBJdGVtVHlwZUVudW0uZ2V0SW1hZ2UodmFsdWUpO1xuICAgIH1cbn0iXX0=