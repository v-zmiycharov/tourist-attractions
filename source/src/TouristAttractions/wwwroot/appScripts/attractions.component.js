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
//# sourceMappingURL=attractions.component.js.map