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
var attraction_service_1 = require('../services/attraction.service');
var app_header_component_1 = require('./app-header.component');
var app_footer_component_1 = require('./app-footer.component');
var attractions_component_1 = require('./attractions.component');
var dashboard_component_1 = require('./dashboard.component');
var attraction_detail_component_1 = require('./attraction-detail.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'appTemplates/app.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                app_header_component_1.AppHeaderComponent,
                app_footer_component_1.AppFooterComponent
            ],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL1RvdXJpc3RBdHRyYWN0aW9ucy5Gcm9udEVuZC9zY3JpcHRzL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUMscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2pELG1DQUFzQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3ZFLHFDQUFtQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzVELHFDQUFtQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzVELHNDQUFxQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQy9ELG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzNELDRDQUEwQywrQkFBK0IsQ0FBQyxDQUFBO0FBQzFFLGtDQUFpRSw0QkFBNEIsQ0FBQyxDQUFBO0FBbUM5RjtJQUFBO0lBQTJCLENBQUM7SUFqQzVCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsVUFBVSxFQUFFO2dCQUNSLHFDQUFpQjtnQkFDakIseUNBQWtCO2dCQUNsQix5Q0FBa0I7YUFDckI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asb0NBQWdCO2dCQUNoQixzQ0FBaUI7YUFDcEI7U0FDSixDQUFDO1FBRUQsK0JBQVcsQ0FBQztZQUNUO2dCQUNJLElBQUksRUFBRSxjQUFjO2dCQUNwQixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsU0FBUyxFQUFFLDRDQUFvQjthQUNsQztZQUNEO2dCQUNJLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsV0FBVztnQkFDakIsU0FBUyxFQUFFLHdDQUFrQjtnQkFDN0IsWUFBWSxFQUFFLElBQUk7YUFDckI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLHVEQUF5QjthQUN2QztTQUNKLENBQUM7O29CQUFBO0lBRXlCLG1CQUFDO0FBQUQsQ0FBQyxBQUE1QixJQUE0QjtBQUFmLG9CQUFZLGVBQUcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7IENvbXBvbmVudCB9ICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBdHRyYWN0aW9uU2VydmljZSB9ICAgICBmcm9tICcuLi9zZXJ2aWNlcy9hdHRyYWN0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtZm9vdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF0dHJhY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9hdHRyYWN0aW9ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdHRyYWN0aW9uRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9hdHRyYWN0aW9uLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwVGVtcGxhdGVzL2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbXHJcbiAgICAgICAgUk9VVEVSX0RJUkVDVElWRVMsXHJcbiAgICAgICAgQXBwSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgICAgIEFwcEZvb3RlckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFJPVVRFUl9QUk9WSURFUlMsXHJcbiAgICAgICAgQXR0cmFjdGlvblNlcnZpY2VcclxuICAgIF1cclxufSlcclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9hdHRyYWN0aW9ucycsXHJcbiAgICAgICAgbmFtZTogJ0F0dHJhY3Rpb25zJyxcclxuICAgICAgICBjb21wb25lbnQ6IEF0dHJhY3Rpb25zQ29tcG9uZW50XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvZGFzaGJvYXJkJyxcclxuICAgICAgICBuYW1lOiAnRGFzaGJvYXJkJyxcclxuICAgICAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCxcclxuICAgICAgICB1c2VBc0RlZmF1bHQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9kZXRhaWwvOmlkJyxcclxuICAgICAgICBuYW1lOiAnQXR0cmFjdGlvbkRldGFpbCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBBdHRyYWN0aW9uRGV0YWlsQ29tcG9uZW50XHJcbiAgICB9LFxyXG5dKVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7fVxyXG4iXX0=