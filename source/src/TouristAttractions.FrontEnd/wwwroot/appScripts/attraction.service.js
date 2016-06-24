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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmFjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2NyaXB0cy9hdHRyYWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFDLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUU1QyxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFHeEQsUUFBTyw2QkFBNkIsQ0FBQyxDQUFBO0FBR3JDO0lBQ0ksMkJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ3RCLG1CQUFjLEdBQUcsa0JBQWtCLENBQUMsQ0FBRSxpQkFBaUI7SUFEN0IsQ0FBQztJQUluQywwQ0FBYyxHQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDcEMsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTyx1Q0FBVyxHQUFuQixVQUFvQixLQUFVO1FBQzFCLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBR0QseUNBQWEsR0FBYixVQUFjLEVBQVU7UUFDcEIsSUFBSSxHQUFHLEdBQU0sSUFBSSxDQUFDLGNBQWMsU0FBSSxFQUFJLENBQUM7UUFFekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ1gsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUNSLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQscUJBQXFCO0lBQ2IsZ0NBQUksR0FBWixVQUFhLFVBQXNCO1FBQy9CLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDO1lBQ3RCLGNBQWMsRUFBRSxrQkFBa0I7U0FDckMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUMzRSxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDZCQUE2QjtJQUNyQiwrQkFBRyxHQUFYLFVBQVksVUFBc0I7UUFDOUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUM7WUFDdEIsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQyxDQUFDLENBQUM7UUFFSCxJQUFJLEdBQUcsR0FBTSxJQUFJLENBQUMsY0FBYyxTQUFJLFVBQVUsQ0FBQyxZQUFjLENBQUM7UUFFOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ1gsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQzFELFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxjQUFNLE9BQUEsVUFBVSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQkFBb0I7SUFDcEIsa0NBQU0sR0FBTixVQUFPLFVBQXNCO1FBQ3pCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDO1lBQ3RCLGNBQWMsRUFBRSxrQkFBa0I7U0FDckMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLEdBQU0sSUFBSSxDQUFDLGNBQWMsU0FBSSxVQUFVLENBQUMsWUFBYyxDQUFDO1FBRTlELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO2FBQ3BCLFNBQVMsRUFBRTthQUNYLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELG9CQUFvQjtJQUNwQixnQ0FBSSxHQUFKLFVBQUssVUFBc0I7UUFDdkIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUE3RUw7UUFBQyxpQkFBVSxFQUFFOzt5QkFBQTtJQThFYix3QkFBQztBQUFELENBQUMsQUE3RUQsSUE2RUM7QUE3RVkseUJBQWlCLG9CQTZFN0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEF0dHJhY3Rpb24gfSAgICAgZnJvbSAnLi9hdHRyYWN0aW9uJztcclxuXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF0dHJhY3Rpb25TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcbiAgICBwcml2YXRlIGF0dHJhY3Rpb25zVXJsID0gJy9hcGkvYXR0cmFjdGlvbnMnOyAgLy8gVVJMIHRvIHdlYiBBUElcclxuXHJcblxyXG4gICAgZ2V0QXR0cmFjdGlvbnMoKTogUHJvbWlzZTxBdHRyYWN0aW9uW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmF0dHJhY3Rpb25zVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkJywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0QXR0cmFjdGlvbihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke3RoaXMuYXR0cmFjdGlvbnNVcmx9LyR7aWR9YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBZGQgbmV3IEF0dHJhY3Rpb25cclxuICAgIHByaXZhdGUgcG9zdChhdHRyYWN0aW9uOiBBdHRyYWN0aW9uKTogUHJvbWlzZTxBdHRyYWN0aW9uPiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdCh0aGlzLmF0dHJhY3Rpb25zVXJsLCBKU09OLnN0cmluZ2lmeShhdHRyYWN0aW9uKSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSBleGlzdGluZyBBdHRyYWN0aW9uXHJcbiAgICBwcml2YXRlIHB1dChhdHRyYWN0aW9uOiBBdHRyYWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHVybCA9IGAke3RoaXMuYXR0cmFjdGlvbnNVcmx9LyR7YXR0cmFjdGlvbi5hdHRyYWN0aW9uSWR9YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucHV0KHVybCwgSlNPTi5zdHJpbmdpZnkoYXR0cmFjdGlvbiksIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gYXR0cmFjdGlvbilcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlbGV0ZSBhdHRyYWN0aW9uXHJcbiAgICBkZWxldGUoYXR0cmFjdGlvbjogQXR0cmFjdGlvbikge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSBgJHt0aGlzLmF0dHJhY3Rpb25zVXJsfS8ke2F0dHJhY3Rpb24uYXR0cmFjdGlvbklkfWA7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmRlbGV0ZSh1cmwsIGhlYWRlcnMpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2F2ZSA9IFBvc3QgKyBQdXRcclxuICAgIHNhdmUoYXR0cmFjdGlvbjogQXR0cmFjdGlvbik6IFByb21pc2U8QXR0cmFjdGlvbj4ge1xyXG4gICAgICAgIGlmIChhdHRyYWN0aW9uLmF0dHJhY3Rpb25JZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXQoYXR0cmFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoYXR0cmFjdGlvbik7XHJcbiAgICB9XHJcbn1cclxuIl19