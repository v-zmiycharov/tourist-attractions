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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmFjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vVG91cmlzdEF0dHJhY3Rpb25zLkZyb250RW5kL3NjcmlwdHMvc2VydmljZXMvYXR0cmFjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQyxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFNUMscUJBQXdDLGVBQWUsQ0FBQyxDQUFBO0FBR3hELFFBQU8sNkJBQTZCLENBQUMsQ0FBQTtBQUdyQztJQUNJLDJCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUN0QixtQkFBYyxHQUFHLGtCQUFrQixDQUFDLENBQUUsaUJBQWlCO0lBRDdCLENBQUM7SUFJbkMsMENBQWMsR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ3BDLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sdUNBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUdELHlDQUFhLEdBQWIsVUFBYyxFQUFVO1FBQ3BCLElBQUksR0FBRyxHQUFNLElBQUksQ0FBQyxjQUFjLFNBQUksRUFBSSxDQUFDO1FBRXpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDUixTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHFCQUFxQjtJQUNiLGdDQUFJLEdBQVosVUFBYSxVQUFzQjtRQUMvQixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQztZQUN0QixjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDM0UsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2QkFBNkI7SUFDckIsK0JBQUcsR0FBWCxVQUFZLFVBQXNCO1FBQzlCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDO1lBQ3RCLGNBQWMsRUFBRSxrQkFBa0I7U0FDckMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLEdBQU0sSUFBSSxDQUFDLGNBQWMsU0FBSSxVQUFVLENBQUMsWUFBYyxDQUFDO1FBRTlELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUMxRCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsY0FBTSxPQUFBLFVBQVUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLGtDQUFNLEdBQU4sVUFBTyxVQUFzQjtRQUN6QixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQztZQUN0QixjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxHQUFNLElBQUksQ0FBQyxjQUFjLFNBQUksVUFBVSxDQUFDLFlBQWMsQ0FBQztRQUU5RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDWCxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQzthQUNwQixTQUFTLEVBQUU7YUFDWCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQkFBb0I7SUFDcEIsZ0NBQUksR0FBSixVQUFLLFVBQXNCO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBN0VMO1FBQUMsaUJBQVUsRUFBRTs7eUJBQUE7SUE4RWIsd0JBQUM7QUFBRCxDQUFDLEFBN0VELElBNkVDO0FBN0VZLHlCQUFpQixvQkE2RTdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBBdHRyYWN0aW9uIH0gICAgIGZyb20gJy4uL2VudGl0aWVzL2F0dHJhY3Rpb24nO1xyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXR0cmFjdGlvblNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuICAgIHByaXZhdGUgYXR0cmFjdGlvbnNVcmwgPSAnL2FwaS9hdHRyYWN0aW9ucyc7ICAvLyBVUkwgdG8gd2ViIEFQSVxyXG5cclxuXHJcbiAgICBnZXRBdHRyYWN0aW9ucygpOiBQcm9taXNlPEF0dHJhY3Rpb25bXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXR0cmFjdGlvbnNVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRBdHRyYWN0aW9uKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7dGhpcy5hdHRyYWN0aW9uc1VybH0vJHtpZH1gO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFkZCBuZXcgQXR0cmFjdGlvblxyXG4gICAgcHJpdmF0ZSBwb3N0KGF0dHJhY3Rpb246IEF0dHJhY3Rpb24pOiBQcm9taXNlPEF0dHJhY3Rpb24+IHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0KHRoaXMuYXR0cmFjdGlvbnNVcmwsIEpTT04uc3RyaW5naWZ5KGF0dHJhY3Rpb24pLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIGV4aXN0aW5nIEF0dHJhY3Rpb25cclxuICAgIHByaXZhdGUgcHV0KGF0dHJhY3Rpb246IEF0dHJhY3Rpb24pIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdXJsID0gYCR7dGhpcy5hdHRyYWN0aW9uc1VybH0vJHthdHRyYWN0aW9uLmF0dHJhY3Rpb25JZH1gO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wdXQodXJsLCBKU09OLnN0cmluZ2lmeShhdHRyYWN0aW9uKSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBhdHRyYWN0aW9uKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVsZXRlIGF0dHJhY3Rpb25cclxuICAgIGRlbGV0ZShhdHRyYWN0aW9uOiBBdHRyYWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHVybCA9IGAke3RoaXMuYXR0cmFjdGlvbnNVcmx9LyR7YXR0cmFjdGlvbi5hdHRyYWN0aW9uSWR9YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAuZGVsZXRlKHVybCwgaGVhZGVycylcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTYXZlID0gUG9zdCArIFB1dFxyXG4gICAgc2F2ZShhdHRyYWN0aW9uOiBBdHRyYWN0aW9uKTogUHJvbWlzZTxBdHRyYWN0aW9uPiB7XHJcbiAgICAgICAgaWYgKGF0dHJhY3Rpb24uYXR0cmFjdGlvbklkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1dChhdHRyYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdChhdHRyYWN0aW9uKTtcclxuICAgIH1cclxufVxyXG4iXX0=