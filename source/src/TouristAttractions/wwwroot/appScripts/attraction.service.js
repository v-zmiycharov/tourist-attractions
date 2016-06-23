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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var AttractionService = (function () {
    function AttractionService(http) {
        this.http = http;
        this.attractionsUrl = '/api/attractions'; // URL to web API
    }
    AttractionService.prototype.getAttractions = function () {
        return this.http.get(this.attractionsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AttractionService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AttractionService.prototype.getAttraction = function (id) {
        var url = this.attractionsUrl + "/" + id;
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Add new Attraction
    AttractionService.prototype.post = function (attraction) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.attractionsUrl, JSON.stringify(attraction), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Update existing Attraction
    AttractionService.prototype.put = function (attraction) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var url = this.attractionsUrl + "/" + attraction.attractionId;
        return this.http
            .put(url, JSON.stringify(attraction), { headers: headers })
            .toPromise()
            .then(function () { return attraction; })
            .catch(this.handleError);
    };
    // Delete attraction
    AttractionService.prototype.delete = function (attraction) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var url = this.attractionsUrl + "/" + attraction.attractionId;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    // Save = Post + Put
    AttractionService.prototype.save = function (attraction) {
        if (attraction.attractionId) {
            return this.put(attraction);
        }
        return this.post(attraction);
    };
    AttractionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AttractionService);
    return AttractionService;
}());
exports.AttractionService = AttractionService;
//# sourceMappingURL=attraction.service.js.map