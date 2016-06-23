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
var attractions_component_1 = require('./attractions.component');
var dashboard_component_1 = require('./dashboard.component');
var attraction_detail_component_1 = require('./attraction-detail.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Attractions';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'appTemplates/app.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                attraction_service_1.AttractionService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/attractions',
                name: 'Attractions',
                component: attractions_component_1.AttractionsComponent
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/detail/:id',
                name: 'AttractionDetail',
                component: attraction_detail_component_1.AttractionDetailComponent
            },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NjcmlwdHMvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUMscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2pELG1DQUFzQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzdELHNDQUFxQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQy9ELG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzNELDRDQUEwQywrQkFBK0IsQ0FBQyxDQUFBO0FBQzFFLGtDQUFpRSw0QkFBNEIsQ0FBQyxDQUFBO0FBK0I5RjtJQUFBO1FBQ0ksVUFBSyxHQUFHLHFCQUFxQixDQUFDO0lBQ2xDLENBQUM7SUEvQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQztZQUMvQixTQUFTLEVBQUU7Z0JBQ1Asb0NBQWdCO2dCQUNoQixzQ0FBaUI7YUFDcEI7U0FDSixDQUFDO1FBRUQsK0JBQVcsQ0FBQztZQUNUO2dCQUNJLElBQUksRUFBRSxjQUFjO2dCQUNwQixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsU0FBUyxFQUFFLDRDQUFvQjthQUNsQztZQUNEO2dCQUNJLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsV0FBVztnQkFDakIsU0FBUyxFQUFFLHdDQUFrQjtnQkFDN0IsWUFBWSxFQUFFLElBQUk7YUFDckI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLHVEQUF5QjthQUN2QztTQUNKLENBQUM7O29CQUFBO0lBSUYsbUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQgeyBDb21wb25lbnQgfSAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXR0cmFjdGlvblNlcnZpY2UgfSAgICAgZnJvbSAnLi9hdHRyYWN0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdHRyYWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vYXR0cmFjdGlvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXR0cmFjdGlvbkRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vYXR0cmFjdGlvbi1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcFRlbXBsYXRlcy9hcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFJPVVRFUl9QUk9WSURFUlMsXHJcbiAgICAgICAgQXR0cmFjdGlvblNlcnZpY2VcclxuICAgIF1cclxufSlcclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9hdHRyYWN0aW9ucycsXHJcbiAgICAgICAgbmFtZTogJ0F0dHJhY3Rpb25zJyxcclxuICAgICAgICBjb21wb25lbnQ6IEF0dHJhY3Rpb25zQ29tcG9uZW50XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvZGFzaGJvYXJkJyxcclxuICAgICAgICBuYW1lOiAnRGFzaGJvYXJkJyxcclxuICAgICAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCxcclxuICAgICAgICB1c2VBc0RlZmF1bHQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9kZXRhaWwvOmlkJyxcclxuICAgICAgICBuYW1lOiAnQXR0cmFjdGlvbkRldGFpbCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBBdHRyYWN0aW9uRGV0YWlsQ29tcG9uZW50XHJcbiAgICB9LFxyXG5dKVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICB0aXRsZSA9ICdUb3VyIG9mIEF0dHJhY3Rpb25zJztcclxufVxyXG4iXX0=