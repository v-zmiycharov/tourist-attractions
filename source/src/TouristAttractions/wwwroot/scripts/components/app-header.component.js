"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var AppHeaderComponent = (function () {
    function AppHeaderComponent(router) {
        this.router = router;
        this.title = 'Tour of Attractions';
    }
    AppHeaderComponent.prototype.isActiveRoute = function (instruction) {
        return this.router.isRouteActive(this.router.generate(instruction));
    };
    AppHeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            moduleId: module.id,
            templateUrl: 'app-header.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());
exports.AppHeaderComponent = AppHeaderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9Ub3VyaXN0QXR0cmFjdGlvbnMuRnJvbnRFbmQvc2NyaXB0cy9jb21wb25lbnRzL2FwcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQyxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDM0Msa0NBQTRELDRCQUE0QixDQUFDLENBQUE7QUFXekY7SUFDSSw0QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDbEMsVUFBSyxHQUFHLHFCQUFxQixDQUFDO0lBRFEsQ0FBQztJQUV2QywwQ0FBYSxHQUFiLFVBQWMsV0FBa0I7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQWRMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFVBQVUsRUFBRTtnQkFDUixxQ0FBaUI7YUFDcEI7U0FDSixDQUFDOzswQkFBQTtJQVFGLHlCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSwwQkFBa0IscUJBTTlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1xyXG4gICAgICAgIFJPVVRFUl9ESVJFQ1RJVkVTXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwSGVhZGVyQ29tcG9uZW50IHsgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuICAgIHRpdGxlID0gJ1RvdXIgb2YgQXR0cmFjdGlvbnMnO1xyXG4gICAgaXNBY3RpdmVSb3V0ZShpbnN0cnVjdGlvbjogYW55W10pOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIuaXNSb3V0ZUFjdGl2ZSh0aGlzLnJvdXRlci5nZW5lcmF0ZShpbnN0cnVjdGlvbikpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==