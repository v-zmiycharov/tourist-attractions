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
            templateUrl: 'appTemplates/app-header.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());
exports.AppHeaderComponent = AppHeaderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9Ub3VyaXN0QXR0cmFjdGlvbnMuRnJvbnRFbmQvc2NyaXB0cy9jb21wb25lbnRzL2FwcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQyxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDM0Msa0NBQTRELDRCQUE0QixDQUFDLENBQUE7QUFVekY7SUFDSSw0QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDbEMsVUFBSyxHQUFHLHFCQUFxQixDQUFDO0lBRFEsQ0FBQztJQUV2QywwQ0FBYSxHQUFiLFVBQWMsV0FBa0I7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQWJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsVUFBVSxFQUFFO2dCQUNSLHFDQUFpQjthQUNwQjtTQUNKLENBQUM7OzBCQUFBO0lBUUYseUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLDBCQUFrQixxQkFNOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHBUZW1wbGF0ZXMvYXBwLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbXHJcbiAgICAgICAgUk9VVEVSX0RJUkVDVElWRVNcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBIZWFkZXJDb21wb25lbnQgeyBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG4gICAgdGl0bGUgPSAnVG91ciBvZiBBdHRyYWN0aW9ucyc7XHJcbiAgICBpc0FjdGl2ZVJvdXRlKGluc3RydWN0aW9uOiBhbnlbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlci5pc1JvdXRlQWN0aXZlKHRoaXMucm91dGVyLmdlbmVyYXRlKGluc3RydWN0aW9uKSk7XHJcbiAgICB9XHJcbn1cclxuIl19