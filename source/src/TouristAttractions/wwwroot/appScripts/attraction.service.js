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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmFjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vVG91cmlzdEF0dHJhY3Rpb25zLkZyb250RW5kL3NjcmlwdHMvYXR0cmFjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQyxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFNUMscUJBQXdDLGVBQWUsQ0FBQyxDQUFBO0FBR3hELFFBQU8sNkJBQTZCLENBQUMsQ0FBQTtBQUdyQztJQUNJLDJCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUN0QixtQkFBYyxHQUFHLGtCQUFrQixDQUFDLENBQUUsaUJBQWlCO0lBRDdCLENBQUM7SUFJbkMsMENBQWMsR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ3BDLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sdUNBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUdELHlDQUFhLEdBQWIsVUFBYyxFQUFVO1FBQ3BCLElBQUksR0FBRyxHQUFNLElBQUksQ0FBQyxjQUFjLFNBQUksRUFBSSxDQUFDO1FBRXpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDUixTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHFCQUFxQjtJQUNiLGdDQUFJLEdBQVosVUFBYSxVQUFzQjtRQUMvQixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQztZQUN0QixjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDM0UsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2QkFBNkI7SUFDckIsK0JBQUcsR0FBWCxVQUFZLFVBQXNCO1FBQzlCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDO1lBQ3RCLGNBQWMsRUFBRSxrQkFBa0I7U0FDckMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLEdBQU0sSUFBSSxDQUFDLGNBQWMsU0FBSSxVQUFVLENBQUMsWUFBYyxDQUFDO1FBRTlELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUMxRCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsY0FBTSxPQUFBLFVBQVUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLGtDQUFNLEdBQU4sVUFBTyxVQUFzQjtRQUN6QixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQztZQUN0QixjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxHQUFNLElBQUksQ0FBQyxjQUFjLFNBQUksVUFBVSxDQUFDLFlBQWMsQ0FBQztRQUU5RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDWCxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQzthQUNwQixTQUFTLEVBQUU7YUFDWCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQkFBb0I7SUFDcEIsZ0NBQUksR0FBSixVQUFLLFVBQXNCO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBN0VMO1FBQUMsaUJBQVUsRUFBRTs7eUJBQUE7SUE4RWIsd0JBQUM7QUFBRCxDQUFDLEFBN0VELElBNkVDO0FBN0VZLHlCQUFpQixvQkE2RTdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBBdHRyYWN0aW9uIH0gICAgIGZyb20gJy4vYXR0cmFjdGlvbic7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdHRyYWN0aW9uU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG4gICAgcHJpdmF0ZSBhdHRyYWN0aW9uc1VybCA9ICcvYXBpL2F0dHJhY3Rpb25zJzsgIC8vIFVSTCB0byB3ZWIgQVBJXHJcblxyXG5cclxuICAgIGdldEF0dHJhY3Rpb25zKCk6IFByb21pc2U8QXR0cmFjdGlvbltdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hdHRyYWN0aW9uc1VybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldEF0dHJhY3Rpb24oaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHt0aGlzLmF0dHJhY3Rpb25zVXJsfS8ke2lkfWA7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQWRkIG5ldyBBdHRyYWN0aW9uXHJcbiAgICBwcml2YXRlIHBvc3QoYXR0cmFjdGlvbjogQXR0cmFjdGlvbik6IFByb21pc2U8QXR0cmFjdGlvbj4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3QodGhpcy5hdHRyYWN0aW9uc1VybCwgSlNPTi5zdHJpbmdpZnkoYXR0cmFjdGlvbiksIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgZXhpc3RpbmcgQXR0cmFjdGlvblxyXG4gICAgcHJpdmF0ZSBwdXQoYXR0cmFjdGlvbjogQXR0cmFjdGlvbikge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSBgJHt0aGlzLmF0dHJhY3Rpb25zVXJsfS8ke2F0dHJhY3Rpb24uYXR0cmFjdGlvbklkfWA7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnB1dCh1cmwsIEpTT04uc3RyaW5naWZ5KGF0dHJhY3Rpb24pLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IGF0dHJhY3Rpb24pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWxldGUgYXR0cmFjdGlvblxyXG4gICAgZGVsZXRlKGF0dHJhY3Rpb246IEF0dHJhY3Rpb24pIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdXJsID0gYCR7dGhpcy5hdHRyYWN0aW9uc1VybH0vJHthdHRyYWN0aW9uLmF0dHJhY3Rpb25JZH1gO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5kZWxldGUodXJsLCBoZWFkZXJzKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNhdmUgPSBQb3N0ICsgUHV0XHJcbiAgICBzYXZlKGF0dHJhY3Rpb246IEF0dHJhY3Rpb24pOiBQcm9taXNlPEF0dHJhY3Rpb24+IHtcclxuICAgICAgICBpZiAoYXR0cmFjdGlvbi5hdHRyYWN0aW9uSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHV0KGF0dHJhY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KGF0dHJhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==