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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmFjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vVG91cmlzdEF0dHJhY3Rpb25zLkZyb250RW5kL3NjcmlwdHMvY29tcG9uZW50cy9hdHRyYWN0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFDLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVuRCxtQ0FBa0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUNuRSxrQ0FBdUIsNEJBQTRCLENBQUMsQ0FBQTtBQUNwRCw0Q0FBMEMsK0JBQStCLENBQUMsQ0FBQTtBQVExRTtJQUtJLDhCQUNZLE1BQWMsRUFDZCxpQkFBb0M7UUFEcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFKaEQscUJBQWdCLEdBQUcsS0FBSyxDQUFDO0lBSTJCLENBQUM7SUFDckQsNkNBQWMsR0FBZDtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUNELHVDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELHVDQUFRLEdBQVIsVUFBUyxVQUFzQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzFFLHlDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVELDRDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELG9DQUFLLEdBQUwsVUFBTSxlQUEyQjtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxxQ0FBTSxHQUFOLFVBQU8sVUFBc0IsRUFBRSxLQUFVO1FBQXpDLGlCQVNDO1FBUkcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUI7YUFDakIsTUFBTSxDQUFDLFVBQVUsQ0FBQzthQUNsQixJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxVQUFVLEVBQWhCLENBQWdCLENBQUMsQ0FBQztZQUNsRSxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsa0JBQWtCLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFBQyxLQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1lBQUMsQ0FBQztRQUNuRixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDLENBQUMsOEJBQThCO0lBQzNFLENBQUM7SUE1Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUseUNBQXlDO1lBQ3RELFVBQVUsRUFBRSxDQUFDLHVEQUF5QixDQUFDO1NBQzFDLENBQUM7OzRCQUFBO0lBMENGLDJCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQXhDWSw0QkFBb0IsdUJBd0NoQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXR0cmFjdGlvbiB9IGZyb20gJy4uL2VudGl0aWVzL2F0dHJhY3Rpb24nO1xyXG5pbXBvcnQgeyBBdHRyYWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F0dHJhY3Rpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuaW1wb3J0IHsgQXR0cmFjdGlvbkRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vYXR0cmFjdGlvbi1kZXRhaWwuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hdHRyYWN0aW9ucycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcFRlbXBsYXRlcy9hdHRyYWN0aW9ucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbQXR0cmFjdGlvbkRldGFpbENvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBdHRyYWN0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhdHRyYWN0aW9uczogQXR0cmFjdGlvbltdO1xyXG4gICAgc2VsZWN0ZWRBdHRyYWN0aW9uOiBBdHRyYWN0aW9uO1xyXG4gICAgYWRkaW5nQXR0cmFjdGlvbiA9IGZhbHNlO1xyXG4gICAgZXJyb3I6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBhdHRyYWN0aW9uU2VydmljZTogQXR0cmFjdGlvblNlcnZpY2UpIHsgfVxyXG4gICAgZ2V0QXR0cmFjdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyYWN0aW9uU2VydmljZS5nZXRBdHRyYWN0aW9ucygpLnRoZW4oYXR0cmFjdGlvbnMgPT4gdGhpcy5hdHRyYWN0aW9ucyA9IGF0dHJhY3Rpb25zKTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0QXR0cmFjdGlvbnMoKTtcclxuICAgIH1cclxuICAgIG9uU2VsZWN0KGF0dHJhY3Rpb246IEF0dHJhY3Rpb24pIHsgdGhpcy5zZWxlY3RlZEF0dHJhY3Rpb24gPSBhdHRyYWN0aW9uOyB9XHJcbiAgICBnb3RvRGV0YWlsKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnQXR0cmFjdGlvbkRldGFpbCcsIHsgaWQ6IHRoaXMuc2VsZWN0ZWRBdHRyYWN0aW9uLmF0dHJhY3Rpb25JZCB9XSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQXR0cmFjdGlvbigpIHtcclxuICAgICAgICB0aGlzLmFkZGluZ0F0dHJhY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRBdHRyYWN0aW9uID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZShzYXZlZEF0dHJhY3Rpb246IEF0dHJhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmFkZGluZ0F0dHJhY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICBpZiAoc2F2ZWRBdHRyYWN0aW9uKSB7IHRoaXMuZ2V0QXR0cmFjdGlvbnMoKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZShhdHRyYWN0aW9uOiBBdHRyYWN0aW9uLCBldmVudDogYW55KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5hdHRyYWN0aW9uU2VydmljZVxyXG4gICAgICAgICAgICAuZGVsZXRlKGF0dHJhY3Rpb24pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dHJhY3Rpb25zID0gdGhpcy5hdHRyYWN0aW9ucy5maWx0ZXIoaCA9PiBoICE9PSBhdHRyYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQXR0cmFjdGlvbiA9PT0gYXR0cmFjdGlvbikgeyB0aGlzLnNlbGVjdGVkQXR0cmFjdGlvbiA9IG51bGw7IH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuZXJyb3IgPSBlcnJvcik7IC8vIFRPRE86IERpc3BsYXkgZXJyb3IgbWVzc2FnZVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19