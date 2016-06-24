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
var attraction_1 = require('./attraction');
var section_1 = require('./section');
var router_deprecated_1 = require('@angular/router-deprecated');
var attraction_service_1 = require('./attraction.service');
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
            templateUrl: 'appTemplates/attraction-detail.component.html'
        }), 
        __metadata('design:paramtypes', [attraction_service_1.AttractionService, router_deprecated_1.RouteParams])
    ], AttractionDetailComponent);
    return AttractionDetailComponent;
}());
exports.AttractionDetailComponent = AttractionDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmFjdGlvbi1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2NyaXB0cy9hdHRyYWN0aW9uLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFDLHFCQUErRCxlQUFlLENBQUMsQ0FBQTtBQUNoRiwyQkFBMkIsY0FBYyxDQUFDLENBQUE7QUFDMUMsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBQ3BDLGtDQUE0Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3pELG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBT3pEO0lBTUksbUNBQ1ksaUJBQW9DLEVBQ3BDLFdBQXdCO1FBRHhCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFOMUIsVUFBSyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRXJDLGNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyx5QkFBeUI7SUFLNUMsQ0FBQztJQUNELDRDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztpQkFDbkMsSUFBSSxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLEVBQTVCLENBQTRCLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQ3ZDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsd0NBQUksR0FBSjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGlCQUFpQjthQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNyQixJQUFJLENBQUMsVUFBQSxVQUFVO1lBQ1osS0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQyxpQ0FBaUM7WUFDL0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDLENBQUMsOEJBQThCO0lBQzNFLENBQUM7SUFFRCw4Q0FBVSxHQUFWO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxpREFBYSxHQUFiLFVBQWMsS0FBYTtRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCwwQ0FBTSxHQUFOLFVBQU8sZUFBa0M7UUFBbEMsK0JBQWtDLEdBQWxDLHNCQUFrQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFBQyxDQUFDO0lBQ2xELENBQUM7SUE3Q0Q7UUFBQyxZQUFLLEVBQUU7O2lFQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7OzREQUFBO0lBUGI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxXQUFXLEVBQUUsK0NBQStDO1NBQy9ELENBQUM7O2lDQUFBO0lBaURGLGdDQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DWSxpQ0FBeUIsNEJBK0NyQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBdHRyYWN0aW9uIH0gZnJvbSAnLi9hdHRyYWN0aW9uJztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4vc2VjdGlvbic7XHJcbmltcG9ydCB7IFJvdXRlUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xyXG5pbXBvcnQgeyBBdHRyYWN0aW9uU2VydmljZSB9IGZyb20gJy4vYXR0cmFjdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hdHRyYWN0aW9uLWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcFRlbXBsYXRlcy9hdHRyYWN0aW9uLWRldGFpbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBdHRyYWN0aW9uRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIGF0dHJhY3Rpb246IEF0dHJhY3Rpb247XHJcbiAgICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBlcnJvcjogYW55O1xyXG4gICAgbmF2aWdhdGVkID0gZmFsc2U7IC8vIHRydWUgaWYgbmF2aWdhdGVkIGhlcmVcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGF0dHJhY3Rpb25TZXJ2aWNlOiBBdHRyYWN0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucm91dGVQYXJhbXMuZ2V0KCdpZCcpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9ICt0aGlzLnJvdXRlUGFyYW1zLmdldCgnaWQnKTtcclxuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJhY3Rpb25TZXJ2aWNlLmdldEF0dHJhY3Rpb24oaWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbihhdHRyYWN0aW9uID0+IHRoaXMuYXR0cmFjdGlvbiA9IGF0dHJhY3Rpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmFjdGlvbiA9IG5ldyBBdHRyYWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICB0aGlzLmF0dHJhY3Rpb25TZXJ2aWNlXHJcbiAgICAgICAgICAgIC5zYXZlKHRoaXMuYXR0cmFjdGlvbilcclxuICAgICAgICAgICAgLnRoZW4oYXR0cmFjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dHJhY3Rpb24gPSBhdHRyYWN0aW9uOyAvLyBzYXZlZCBhdHRyYWN0aW9uLCB3LyBpZCBpZiBuZXdcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29CYWNrKGF0dHJhY3Rpb24pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdGhpcy5lcnJvciA9IGVycm9yKTsgLy8gVE9ETzogRGlzcGxheSBlcnJvciBtZXNzYWdlXHJcbiAgICB9XHJcblxyXG4gICAgYWRkU2VjdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5hdHRyYWN0aW9uLnNlY3Rpb25zID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRyYWN0aW9uLnNlY3Rpb25zID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJhY3Rpb24uc2VjdGlvbnMucHVzaChuZXcgU2VjdGlvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVTZWN0aW9uKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmF0dHJhY3Rpb24uc2VjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soc2F2ZWRBdHRyYWN0aW9uOiBBdHRyYWN0aW9uID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdChzYXZlZEF0dHJhY3Rpb24pO1xyXG4gICAgICAgIGlmICh0aGlzLm5hdmlnYXRlZCkgeyB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7IH1cclxuICAgIH1cclxufVxyXG4iXX0=