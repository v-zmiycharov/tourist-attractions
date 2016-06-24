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
var attraction_service_1 = require('../services/attraction.service');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL1RvdXJpc3RBdHRyYWN0aW9ucy5Gcm9udEVuZC9zY3JpcHRzL2NvbXBvbmVudHMvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUMscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBR25ELG1DQUFrQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBRW5FLGtDQUF1Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBT3BEO0lBRUksNEJBQ1ksTUFBYyxFQUNkLGlCQUFvQztRQURwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUhoRCxnQkFBVyxHQUFpQixFQUFFLENBQUM7SUFJL0IsQ0FBQztJQUNELHFDQUFRLEdBQVI7UUFBQSxpQkFHQztRQUZHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUU7YUFDbEMsSUFBSSxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFDRCx1Q0FBVSxHQUFWLFVBQVcsVUFBc0I7UUFDN0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBbEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSx1Q0FBdUM7U0FDdkQsQ0FBQzs7MEJBQUE7SUFnQkYseUJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLDBCQUFrQixxQkFjOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBdHRyYWN0aW9uIH0gZnJvbSAnLi4vZW50aXRpZXMvYXR0cmFjdGlvbic7XHJcbmltcG9ydCB7IEF0dHJhY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXR0cmFjdGlvbi5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1kYXNoYm9hcmQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHBUZW1wbGF0ZXMvZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhdHRyYWN0aW9uczogQXR0cmFjdGlvbltdID0gW107XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgYXR0cmFjdGlvblNlcnZpY2U6IEF0dHJhY3Rpb25TZXJ2aWNlKSB7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmF0dHJhY3Rpb25TZXJ2aWNlLmdldEF0dHJhY3Rpb25zKClcclxuICAgICAgICAgICAgLnRoZW4oYXR0cmFjdGlvbnMgPT4gdGhpcy5hdHRyYWN0aW9ucyA9IGF0dHJhY3Rpb25zLnNsaWNlKDEsIDUpKTtcclxuICAgIH1cclxuICAgIGdvdG9EZXRhaWwoYXR0cmFjdGlvbjogQXR0cmFjdGlvbikge1xyXG4gICAgICAgIGxldCBsaW5rID0gWydBdHRyYWN0aW9uRGV0YWlsJywgeyBpZDogYXR0cmFjdGlvbi5hdHRyYWN0aW9uSWQgfV07XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUobGluayk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==