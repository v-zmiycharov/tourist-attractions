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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmFjdGlvbi1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vVG91cmlzdEF0dHJhY3Rpb25zLkZyb250RW5kL3NjcmlwdHMvYXR0cmFjdGlvbi1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQyxxQkFBK0QsZUFBZSxDQUFDLENBQUE7QUFDaEYsMkJBQTJCLGNBQWMsQ0FBQyxDQUFBO0FBQzFDLHdCQUF3QixXQUFXLENBQUMsQ0FBQTtBQUNwQyxrQ0FBNEIsNEJBQTRCLENBQUMsQ0FBQTtBQUN6RCxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQU96RDtJQU1JLG1DQUNZLGlCQUFvQyxFQUNwQyxXQUF3QjtRQUR4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTjFCLFVBQUssR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUVyQyxjQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMseUJBQXlCO0lBSzVDLENBQUM7SUFDRCw0Q0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7aUJBQ25DLElBQUksQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxFQUE1QixDQUE0QixDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUN2QyxDQUFDO0lBQ0wsQ0FBQztJQUNELHdDQUFJLEdBQUo7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxpQkFBaUI7YUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDckIsSUFBSSxDQUFDLFVBQUEsVUFBVTtZQUNaLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsaUNBQWlDO1lBQy9ELEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDLDhCQUE4QjtJQUMzRSxDQUFDO0lBRUQsOENBQVUsR0FBVjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLENBQUM7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsaURBQWEsR0FBYixVQUFjLEtBQWE7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsMENBQU0sR0FBTixVQUFPLGVBQWtDO1FBQWxDLCtCQUFrQyxHQUFsQyxzQkFBa0M7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQUMsQ0FBQztJQUNsRCxDQUFDO0lBN0NEO1FBQUMsWUFBSyxFQUFFOztpRUFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzs0REFBQTtJQVBiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLCtDQUErQztTQUMvRCxDQUFDOztpQ0FBQTtJQWlERixnQ0FBQztBQUFELENBQUMsQUEvQ0QsSUErQ0M7QUEvQ1ksaUNBQXlCLDRCQStDckMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXR0cmFjdGlvbiB9IGZyb20gJy4vYXR0cmFjdGlvbic7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuL3NlY3Rpb24nO1xyXG5pbXBvcnQgeyBSb3V0ZVBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuaW1wb3J0IHsgQXR0cmFjdGlvblNlcnZpY2UgfSBmcm9tICcuL2F0dHJhY3Rpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXR0cmFjdGlvbi1kZXRhaWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHBUZW1wbGF0ZXMvYXR0cmFjdGlvbi1kZXRhaWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXR0cmFjdGlvbkRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBhdHRyYWN0aW9uOiBBdHRyYWN0aW9uO1xyXG4gICAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgZXJyb3I6IGFueTtcclxuICAgIG5hdmlnYXRlZCA9IGZhbHNlOyAvLyB0cnVlIGlmIG5hdmlnYXRlZCBoZXJlXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBhdHRyYWN0aW9uU2VydmljZTogQXR0cmFjdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJvdXRlUGFyYW1zLmdldCgnaWQnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSArdGhpcy5yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hdHRyYWN0aW9uU2VydmljZS5nZXRBdHRyYWN0aW9uKGlkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYXR0cmFjdGlvbiA9PiB0aGlzLmF0dHJhY3Rpb24gPSBhdHRyYWN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJhY3Rpb24gPSBuZXcgQXR0cmFjdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyYWN0aW9uU2VydmljZVxyXG4gICAgICAgICAgICAuc2F2ZSh0aGlzLmF0dHJhY3Rpb24pXHJcbiAgICAgICAgICAgIC50aGVuKGF0dHJhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRyYWN0aW9uID0gYXR0cmFjdGlvbjsgLy8gc2F2ZWQgYXR0cmFjdGlvbiwgdy8gaWQgaWYgbmV3XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvQmFjayhhdHRyYWN0aW9uKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuZXJyb3IgPSBlcnJvcik7IC8vIFRPRE86IERpc3BsYXkgZXJyb3IgbWVzc2FnZVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFNlY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXR0cmFjdGlvbi5zZWN0aW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmFjdGlvbi5zZWN0aW9ucyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdHRyYWN0aW9uLnNlY3Rpb25zLnB1c2gobmV3IFNlY3Rpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlU2VjdGlvbihpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyYWN0aW9uLnNlY3Rpb25zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKHNhdmVkQXR0cmFjdGlvbjogQXR0cmFjdGlvbiA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmNsb3NlLmVtaXQoc2F2ZWRBdHRyYWN0aW9uKTtcclxuICAgICAgICBpZiAodGhpcy5uYXZpZ2F0ZWQpIHsgd2luZG93Lmhpc3RvcnkuYmFjaygpOyB9XHJcbiAgICB9XHJcbn1cclxuIl19