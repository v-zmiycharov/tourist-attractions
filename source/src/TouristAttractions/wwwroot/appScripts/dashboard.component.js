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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RvdXJpc3RBdHRyYWN0aW9ucy5Gcm9udEVuZC9zY3JpcHRzL2Rhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFDLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUduRCxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUV6RCxrQ0FBdUIsNEJBQTRCLENBQUMsQ0FBQTtBQU9wRDtJQUVJLDRCQUNZLE1BQWMsRUFDZCxpQkFBb0M7UUFEcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFIaEQsZ0JBQVcsR0FBaUIsRUFBRSxDQUFDO0lBSS9CLENBQUM7SUFDRCxxQ0FBUSxHQUFSO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFO2FBQ2xDLElBQUksQ0FBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQTFDLENBQTBDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsdUNBQVUsR0FBVixVQUFXLFVBQXNCO1FBQzdCLElBQUksSUFBSSxHQUFHLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQWxCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsdUNBQXVDO1NBQ3ZELENBQUM7OzBCQUFBO0lBZ0JGLHlCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSwwQkFBa0IscUJBYzlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQXR0cmFjdGlvbiB9IGZyb20gJy4vYXR0cmFjdGlvbic7XHJcbmltcG9ydCB7IEF0dHJhY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9hdHRyYWN0aW9uLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWRhc2hib2FyZCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcFRlbXBsYXRlcy9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGF0dHJhY3Rpb25zOiBBdHRyYWN0aW9uW10gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBhdHRyYWN0aW9uU2VydmljZTogQXR0cmFjdGlvblNlcnZpY2UpIHtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuYXR0cmFjdGlvblNlcnZpY2UuZ2V0QXR0cmFjdGlvbnMoKVxyXG4gICAgICAgICAgICAudGhlbihhdHRyYWN0aW9ucyA9PiB0aGlzLmF0dHJhY3Rpb25zID0gYXR0cmFjdGlvbnMuc2xpY2UoMSwgNSkpO1xyXG4gICAgfVxyXG4gICAgZ290b0RldGFpbChhdHRyYWN0aW9uOiBBdHRyYWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IGxpbmsgPSBbJ0F0dHJhY3Rpb25EZXRhaWwnLCB7IGlkOiBhdHRyYWN0aW9uLmF0dHJhY3Rpb25JZCB9XTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShsaW5rKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19