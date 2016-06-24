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
var attraction_1 = require('../entities/attraction');
var section_1 = require('../entities/section');
var router_deprecated_1 = require('@angular/router-deprecated');
var attraction_service_1 = require('../services/attraction.service');
var AttractionDetailComponent = (function () {
    function AttractionDetailComponent(attractionService, routeParams) {
        this.attractionService = attractionService;
        this.routeParams = routeParams;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    AttractionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeParams.get('id') !== null) {
            var id = +this.routeParams.get('id');
            this.navigated = true;
            this.attractionService.getAttraction(id)
                .then(function (attraction) { return _this.attraction = attraction; });
        }
        else {
            this.navigated = false;
            this.attraction = new attraction_1.Attraction();
        }
    };
    AttractionDetailComponent.prototype.save = function () {
        var _this = this;
        this.attractionService
            .save(this.attraction)
            .then(function (attraction) {
            _this.attraction = attraction; // saved attraction, w/ id if new
            _this.goBack(attraction);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    AttractionDetailComponent.prototype.addSection = function () {
        if (this.attraction.sections == null) {
            this.attraction.sections = [];
        }
        this.attraction.sections.push(new section_1.Section());
    };
    AttractionDetailComponent.prototype.deleteSection = function (index) {
        this.attraction.sections.splice(index, 1);
    };
    AttractionDetailComponent.prototype.goBack = function (savedAttraction) {
        if (savedAttraction === void 0) { savedAttraction = null; }
        this.close.emit(savedAttraction);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', attraction_1.Attraction)
    ], AttractionDetailComponent.prototype, "attraction", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AttractionDetailComponent.prototype, "close", void 0);
    AttractionDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-attraction-detail',
            moduleId: module.id,
            templateUrl: 'attraction-detail.component.html'
        }), 
        __metadata('design:paramtypes', [attraction_service_1.AttractionService, router_deprecated_1.RouteParams])
    ], AttractionDetailComponent);
    return AttractionDetailComponent;
}());
exports.AttractionDetailComponent = AttractionDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmFjdGlvbi1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vVG91cmlzdEF0dHJhY3Rpb25zLkZyb250RW5kL3NjcmlwdHMvY29tcG9uZW50cy9hdHRyYWN0aW9uLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFDLHFCQUErRCxlQUFlLENBQUMsQ0FBQTtBQUNoRiwyQkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQUNwRCx3QkFBd0IscUJBQXFCLENBQUMsQ0FBQTtBQUM5QyxrQ0FBNEIsNEJBQTRCLENBQUMsQ0FBQTtBQUN6RCxtQ0FBa0MsZ0NBQWdDLENBQUMsQ0FBQTtBQVFuRTtJQU1JLG1DQUNZLGlCQUFvQyxFQUNwQyxXQUF3QjtRQUR4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTjFCLFVBQUssR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUVyQyxjQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMseUJBQXlCO0lBSzVDLENBQUM7SUFDRCw0Q0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7aUJBQ25DLElBQUksQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxFQUE1QixDQUE0QixDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUN2QyxDQUFDO0lBQ0wsQ0FBQztJQUNELHdDQUFJLEdBQUo7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxpQkFBaUI7YUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDckIsSUFBSSxDQUFDLFVBQUEsVUFBVTtZQUNaLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsaUNBQWlDO1lBQy9ELEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDLDhCQUE4QjtJQUMzRSxDQUFDO0lBRUQsOENBQVUsR0FBVjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLENBQUM7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsaURBQWEsR0FBYixVQUFjLEtBQWE7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsMENBQU0sR0FBTixVQUFPLGVBQWtDO1FBQWxDLCtCQUFrQyxHQUFsQyxzQkFBa0M7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQUMsQ0FBQztJQUNsRCxDQUFDO0lBN0NEO1FBQUMsWUFBSyxFQUFFOztpRUFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzs0REFBQTtJQVJiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxrQ0FBa0M7U0FDbEQsQ0FBQzs7aUNBQUE7SUFpREYsZ0NBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDO0FBL0NZLGlDQUF5Qiw0QkErQ3JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF0dHJhY3Rpb24gfSBmcm9tICcuLi9lbnRpdGllcy9hdHRyYWN0aW9uJztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uL2VudGl0aWVzL3NlY3Rpb24nO1xyXG5pbXBvcnQgeyBSb3V0ZVBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuaW1wb3J0IHsgQXR0cmFjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdHRyYWN0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWF0dHJhY3Rpb24tZGV0YWlsJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2F0dHJhY3Rpb24tZGV0YWlsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF0dHJhY3Rpb25EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgYXR0cmFjdGlvbjogQXR0cmFjdGlvbjtcclxuICAgIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIGVycm9yOiBhbnk7XHJcbiAgICBuYXZpZ2F0ZWQgPSBmYWxzZTsgLy8gdHJ1ZSBpZiBuYXZpZ2F0ZWQgaGVyZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYXR0cmFjdGlvblNlcnZpY2U6IEF0dHJhY3Rpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKSB7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5yb3V0ZVBhcmFtcy5nZXQoJ2lkJykgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGlkID0gK3RoaXMucm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xyXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmFjdGlvblNlcnZpY2UuZ2V0QXR0cmFjdGlvbihpZClcclxuICAgICAgICAgICAgICAgIC50aGVuKGF0dHJhY3Rpb24gPT4gdGhpcy5hdHRyYWN0aW9uID0gYXR0cmFjdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hdHRyYWN0aW9uID0gbmV3IEF0dHJhY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIHRoaXMuYXR0cmFjdGlvblNlcnZpY2VcclxuICAgICAgICAgICAgLnNhdmUodGhpcy5hdHRyYWN0aW9uKVxyXG4gICAgICAgICAgICAudGhlbihhdHRyYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0cmFjdGlvbiA9IGF0dHJhY3Rpb247IC8vIHNhdmVkIGF0dHJhY3Rpb24sIHcvIGlkIGlmIG5ld1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb0JhY2soYXR0cmFjdGlvbik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLmVycm9yID0gZXJyb3IpOyAvLyBUT0RPOiBEaXNwbGF5IGVycm9yIG1lc3NhZ2VcclxuICAgIH1cclxuXHJcbiAgICBhZGRTZWN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF0dHJhY3Rpb24uc2VjdGlvbnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJhY3Rpb24uc2VjdGlvbnMgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmFjdGlvbi5zZWN0aW9ucy5wdXNoKG5ldyBTZWN0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVNlY3Rpb24oaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYXR0cmFjdGlvbi5zZWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjayhzYXZlZEF0dHJhY3Rpb246IEF0dHJhY3Rpb24gPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZS5lbWl0KHNhdmVkQXR0cmFjdGlvbik7XHJcbiAgICAgICAgaWYgKHRoaXMubmF2aWdhdGVkKSB7IHdpbmRvdy5oaXN0b3J5LmJhY2soKTsgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==