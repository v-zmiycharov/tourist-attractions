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
        this.attraction.sections.splice(index);
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
            templateUrl: 'appTemplates/attraction-detail.component.html',
            styleUrls: ['appStyles/attraction-detail.component.css']
        }), 
        __metadata('design:paramtypes', [attraction_service_1.AttractionService, router_deprecated_1.RouteParams])
    ], AttractionDetailComponent);
    return AttractionDetailComponent;
}());
exports.AttractionDetailComponent = AttractionDetailComponent;
//# sourceMappingURL=attraction-detail.component.js.map