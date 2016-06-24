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
var attraction_detail_component_1 = require('./attraction-detail.component');
var AttractionsComponent = (function () {
    function AttractionsComponent(router, attractionService) {
        this.router = router;
        this.attractionService = attractionService;
        this.addingAttraction = false;
    }
    AttractionsComponent.prototype.getAttractions = function () {
        var _this = this;
        this.attractionService.getAttractions().then(function (attractions) { return _this.attractions = attractions; });
    };
    AttractionsComponent.prototype.ngOnInit = function () {
        this.getAttractions();
    };
    AttractionsComponent.prototype.onSelect = function (attraction) { this.selectedAttraction = attraction; };
    AttractionsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['AttractionDetail', { id: this.selectedAttraction.attractionId }]);
    };
    AttractionsComponent.prototype.addAttraction = function () {
        this.addingAttraction = true;
        this.selectedAttraction = null;
    };
    AttractionsComponent.prototype.close = function (savedAttraction) {
        this.addingAttraction = false;
        if (savedAttraction) {
            this.getAttractions();
        }
    };
    AttractionsComponent.prototype.delete = function (attraction, event) {
        var _this = this;
        event.stopPropagation();
        this.attractionService
            .delete(attraction)
            .then(function (res) {
            _this.attractions = _this.attractions.filter(function (h) { return h !== attraction; });
            if (_this.selectedAttraction === attraction) {
                _this.selectedAttraction = null;
            }
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    AttractionsComponent = __decorate([
        core_1.Component({
            selector: 'my-attractions',
            templateUrl: 'appTemplates/attractions.component.html',
            directives: [attraction_detail_component_1.AttractionDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, attraction_service_1.AttractionService])
    ], AttractionsComponent);
    return AttractionsComponent;
}());
exports.AttractionsComponent = AttractionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmFjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vVG91cmlzdEF0dHJhY3Rpb25zLkZyb250RW5kL3NjcmlwdHMvYXR0cmFjdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQyxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbkQsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFDekQsa0NBQXVCLDRCQUE0QixDQUFDLENBQUE7QUFDcEQsNENBQTBDLCtCQUErQixDQUFDLENBQUE7QUFRMUU7SUFLSSw4QkFDWSxNQUFjLEVBQ2QsaUJBQW9DO1FBRHBDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBSmhELHFCQUFnQixHQUFHLEtBQUssQ0FBQztJQUkyQixDQUFDO0lBQ3JELDZDQUFjLEdBQWQ7UUFBQSxpQkFFQztRQURHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFDRCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCx1Q0FBUSxHQUFSLFVBQVMsVUFBc0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMxRSx5Q0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRCw0Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCxvQ0FBSyxHQUFMLFVBQU0sZUFBMkI7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQscUNBQU0sR0FBTixVQUFPLFVBQXNCLEVBQUUsS0FBVTtRQUF6QyxpQkFTQztRQVJHLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCO2FBQ2pCLE1BQU0sQ0FBQyxVQUFVLENBQUM7YUFDbEIsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNMLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssVUFBVSxFQUFoQixDQUFnQixDQUFDLENBQUM7WUFDbEUsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGtCQUFrQixLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsS0FBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztZQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDLDhCQUE4QjtJQUMzRSxDQUFDO0lBNUNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLHlDQUF5QztZQUN0RCxVQUFVLEVBQUUsQ0FBQyx1REFBeUIsQ0FBQztTQUMxQyxDQUFDOzs0QkFBQTtJQTBDRiwyQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUF4Q1ksNEJBQW9CLHVCQXdDaEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF0dHJhY3Rpb24gfSBmcm9tICcuL2F0dHJhY3Rpb24nO1xyXG5pbXBvcnQgeyBBdHRyYWN0aW9uU2VydmljZSB9IGZyb20gJy4vYXR0cmFjdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xyXG5pbXBvcnQgeyBBdHRyYWN0aW9uRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9hdHRyYWN0aW9uLWRldGFpbC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWF0dHJhY3Rpb25zJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwVGVtcGxhdGVzL2F0dHJhY3Rpb25zLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtBdHRyYWN0aW9uRGV0YWlsQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF0dHJhY3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGF0dHJhY3Rpb25zOiBBdHRyYWN0aW9uW107XHJcbiAgICBzZWxlY3RlZEF0dHJhY3Rpb246IEF0dHJhY3Rpb247XHJcbiAgICBhZGRpbmdBdHRyYWN0aW9uID0gZmFsc2U7XHJcbiAgICBlcnJvcjogYW55O1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGF0dHJhY3Rpb25TZXJ2aWNlOiBBdHRyYWN0aW9uU2VydmljZSkgeyB9XHJcbiAgICBnZXRBdHRyYWN0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmF0dHJhY3Rpb25TZXJ2aWNlLmdldEF0dHJhY3Rpb25zKCkudGhlbihhdHRyYWN0aW9ucyA9PiB0aGlzLmF0dHJhY3Rpb25zID0gYXR0cmFjdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBdHRyYWN0aW9ucygpO1xyXG4gICAgfVxyXG4gICAgb25TZWxlY3QoYXR0cmFjdGlvbjogQXR0cmFjdGlvbikgeyB0aGlzLnNlbGVjdGVkQXR0cmFjdGlvbiA9IGF0dHJhY3Rpb247IH1cclxuICAgIGdvdG9EZXRhaWwoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydBdHRyYWN0aW9uRGV0YWlsJywgeyBpZDogdGhpcy5zZWxlY3RlZEF0dHJhY3Rpb24uYXR0cmFjdGlvbklkIH1dKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBdHRyYWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYWRkaW5nQXR0cmFjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEF0dHJhY3Rpb24gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKHNhdmVkQXR0cmFjdGlvbjogQXR0cmFjdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWRkaW5nQXR0cmFjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChzYXZlZEF0dHJhY3Rpb24pIHsgdGhpcy5nZXRBdHRyYWN0aW9ucygpOyB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKGF0dHJhY3Rpb246IEF0dHJhY3Rpb24sIGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmF0dHJhY3Rpb25TZXJ2aWNlXHJcbiAgICAgICAgICAgIC5kZWxldGUoYXR0cmFjdGlvbilcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0cmFjdGlvbnMgPSB0aGlzLmF0dHJhY3Rpb25zLmZpbHRlcihoID0+IGggIT09IGF0dHJhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRBdHRyYWN0aW9uID09PSBhdHRyYWN0aW9uKSB7IHRoaXMuc2VsZWN0ZWRBdHRyYWN0aW9uID0gbnVsbDsgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdGhpcy5lcnJvciA9IGVycm9yKTsgLy8gVE9ETzogRGlzcGxheSBlcnJvciBtZXNzYWdlXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0=