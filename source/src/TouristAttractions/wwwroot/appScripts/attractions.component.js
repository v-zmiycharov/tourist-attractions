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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmFjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2NyaXB0cy9hdHRyYWN0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFDLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVuRCxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN6RCxrQ0FBdUIsNEJBQTRCLENBQUMsQ0FBQTtBQUNwRCw0Q0FBMEMsK0JBQStCLENBQUMsQ0FBQTtBQVExRTtJQUtJLDhCQUNZLE1BQWMsRUFDZCxpQkFBb0M7UUFEcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFKaEQscUJBQWdCLEdBQUcsS0FBSyxDQUFDO0lBSTJCLENBQUM7SUFDckQsNkNBQWMsR0FBZDtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUNELHVDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELHVDQUFRLEdBQVIsVUFBUyxVQUFzQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzFFLHlDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVELDRDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELG9DQUFLLEdBQUwsVUFBTSxlQUEyQjtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxxQ0FBTSxHQUFOLFVBQU8sVUFBc0IsRUFBRSxLQUFVO1FBQXpDLGlCQVNDO1FBUkcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUI7YUFDakIsTUFBTSxDQUFDLFVBQVUsQ0FBQzthQUNsQixJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxVQUFVLEVBQWhCLENBQWdCLENBQUMsQ0FBQztZQUNsRSxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsa0JBQWtCLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFBQyxLQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1lBQUMsQ0FBQztRQUNuRixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDLENBQUMsOEJBQThCO0lBQzNFLENBQUM7SUE1Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUseUNBQXlDO1lBQ3RELFVBQVUsRUFBRSxDQUFDLHVEQUF5QixDQUFDO1NBQzFDLENBQUM7OzRCQUFBO0lBMENGLDJCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQXhDWSw0QkFBb0IsdUJBd0NoQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXR0cmFjdGlvbiB9IGZyb20gJy4vYXR0cmFjdGlvbic7XHJcbmltcG9ydCB7IEF0dHJhY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9hdHRyYWN0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcbmltcG9ydCB7IEF0dHJhY3Rpb25EZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2F0dHJhY3Rpb24tZGV0YWlsLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXR0cmFjdGlvbnMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHBUZW1wbGF0ZXMvYXR0cmFjdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW0F0dHJhY3Rpb25EZXRhaWxDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXR0cmFjdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXR0cmFjdGlvbnM6IEF0dHJhY3Rpb25bXTtcclxuICAgIHNlbGVjdGVkQXR0cmFjdGlvbjogQXR0cmFjdGlvbjtcclxuICAgIGFkZGluZ0F0dHJhY3Rpb24gPSBmYWxzZTtcclxuICAgIGVycm9yOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgYXR0cmFjdGlvblNlcnZpY2U6IEF0dHJhY3Rpb25TZXJ2aWNlKSB7IH1cclxuICAgIGdldEF0dHJhY3Rpb25zKCkge1xyXG4gICAgICAgIHRoaXMuYXR0cmFjdGlvblNlcnZpY2UuZ2V0QXR0cmFjdGlvbnMoKS50aGVuKGF0dHJhY3Rpb25zID0+IHRoaXMuYXR0cmFjdGlvbnMgPSBhdHRyYWN0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldEF0dHJhY3Rpb25zKCk7XHJcbiAgICB9XHJcbiAgICBvblNlbGVjdChhdHRyYWN0aW9uOiBBdHRyYWN0aW9uKSB7IHRoaXMuc2VsZWN0ZWRBdHRyYWN0aW9uID0gYXR0cmFjdGlvbjsgfVxyXG4gICAgZ290b0RldGFpbCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0F0dHJhY3Rpb25EZXRhaWwnLCB7IGlkOiB0aGlzLnNlbGVjdGVkQXR0cmFjdGlvbi5hdHRyYWN0aW9uSWQgfV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEF0dHJhY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5hZGRpbmdBdHRyYWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQXR0cmFjdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2Uoc2F2ZWRBdHRyYWN0aW9uOiBBdHRyYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hZGRpbmdBdHRyYWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHNhdmVkQXR0cmFjdGlvbikgeyB0aGlzLmdldEF0dHJhY3Rpb25zKCk7IH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoYXR0cmFjdGlvbjogQXR0cmFjdGlvbiwgZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYXR0cmFjdGlvblNlcnZpY2VcclxuICAgICAgICAgICAgLmRlbGV0ZShhdHRyYWN0aW9uKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRyYWN0aW9ucyA9IHRoaXMuYXR0cmFjdGlvbnMuZmlsdGVyKGggPT4gaCAhPT0gYXR0cmFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEF0dHJhY3Rpb24gPT09IGF0dHJhY3Rpb24pIHsgdGhpcy5zZWxlY3RlZEF0dHJhY3Rpb24gPSBudWxsOyB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLmVycm9yID0gZXJyb3IpOyAvLyBUT0RPOiBEaXNwbGF5IGVycm9yIG1lc3NhZ2VcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==