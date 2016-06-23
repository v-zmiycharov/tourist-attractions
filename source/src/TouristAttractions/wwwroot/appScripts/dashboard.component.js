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
var attraction_service_1 = require('./attraction.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var DashboardComponent = (function () {
    function DashboardComponent(router, attractionService) {
        this.router = router;
        this.attractionService = attractionService;
        this.attractions = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.attractionService.getAttractions()
            .then(function (attractions) { return _this.attractions = attractions.slice(1, 5); });
    };
    DashboardComponent.prototype.gotoDetail = function (attraction) {
        var link = ['AttractionDetail', { id: attraction.attractionId }];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'appTemplates/dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, attraction_service_1.AttractionService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NjcmlwdHMvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUMscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBR25ELG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBRXpELGtDQUF1Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBT3BEO0lBRUksNEJBQ1ksTUFBYyxFQUNkLGlCQUFvQztRQURwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUhoRCxnQkFBVyxHQUFpQixFQUFFLENBQUM7SUFJL0IsQ0FBQztJQUNELHFDQUFRLEdBQVI7UUFBQSxpQkFHQztRQUZHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUU7YUFDbEMsSUFBSSxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFDRCx1Q0FBVSxHQUFWLFVBQVcsVUFBc0I7UUFDN0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBbEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSx1Q0FBdUM7U0FDdkQsQ0FBQzs7MEJBQUE7SUFnQkYseUJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLDBCQUFrQixxQkFjOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBdHRyYWN0aW9uIH0gZnJvbSAnLi9hdHRyYWN0aW9uJztcclxuaW1wb3J0IHsgQXR0cmFjdGlvblNlcnZpY2UgfSBmcm9tICcuL2F0dHJhY3Rpb24uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktZGFzaGJvYXJkJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwVGVtcGxhdGVzL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXR0cmFjdGlvbnM6IEF0dHJhY3Rpb25bXSA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGF0dHJhY3Rpb25TZXJ2aWNlOiBBdHRyYWN0aW9uU2VydmljZSkge1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyYWN0aW9uU2VydmljZS5nZXRBdHRyYWN0aW9ucygpXHJcbiAgICAgICAgICAgIC50aGVuKGF0dHJhY3Rpb25zID0+IHRoaXMuYXR0cmFjdGlvbnMgPSBhdHRyYWN0aW9ucy5zbGljZSgxLCA1KSk7XHJcbiAgICB9XHJcbiAgICBnb3RvRGV0YWlsKGF0dHJhY3Rpb246IEF0dHJhY3Rpb24pIHtcclxuICAgICAgICBsZXQgbGluayA9IFsnQXR0cmFjdGlvbkRldGFpbCcsIHsgaWQ6IGF0dHJhY3Rpb24uYXR0cmFjdGlvbklkIH1dO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKGxpbmspO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=