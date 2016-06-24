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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RvdXJpc3RBdHRyYWN0aW9ucy5Gcm9udEVuZC9zY3JpcHRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFDLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCxtQ0FBc0Msc0JBQXNCLENBQUMsQ0FBQTtBQUM3RCxxQ0FBbUMsd0JBQXdCLENBQUMsQ0FBQTtBQUM1RCxxQ0FBbUMsd0JBQXdCLENBQUMsQ0FBQTtBQUM1RCxzQ0FBcUMseUJBQXlCLENBQUMsQ0FBQTtBQUMvRCxvQ0FBbUMsdUJBQXVCLENBQUMsQ0FBQTtBQUMzRCw0Q0FBMEMsK0JBQStCLENBQUMsQ0FBQTtBQUMxRSxrQ0FBaUUsNEJBQTRCLENBQUMsQ0FBQTtBQW1DOUY7SUFBQTtJQUEyQixDQUFDO0lBakM1QjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFVBQVUsRUFBRTtnQkFDUixxQ0FBaUI7Z0JBQ2pCLHlDQUFrQjtnQkFDbEIseUNBQWtCO2FBQ3JCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLG9DQUFnQjtnQkFDaEIsc0NBQWlCO2FBQ3BCO1NBQ0osQ0FBQztRQUVELCtCQUFXLENBQUM7WUFDVDtnQkFDSSxJQUFJLEVBQUUsY0FBYztnQkFDcEIsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLFNBQVMsRUFBRSw0Q0FBb0I7YUFDbEM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFNBQVMsRUFBRSx3Q0FBa0I7Z0JBQzdCLFlBQVksRUFBRSxJQUFJO2FBQ3JCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLFNBQVMsRUFBRSx1REFBeUI7YUFDdkM7U0FDSixDQUFDOztvQkFBQTtJQUV5QixtQkFBQztBQUFELENBQUMsQUFBNUIsSUFBNEI7QUFBZixvQkFBWSxlQUFHLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQgeyBDb21wb25lbnQgfSAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXR0cmFjdGlvblNlcnZpY2UgfSAgICAgZnJvbSAnLi9hdHRyYWN0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtZm9vdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF0dHJhY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9hdHRyYWN0aW9ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdHRyYWN0aW9uRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9hdHRyYWN0aW9uLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwVGVtcGxhdGVzL2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbXHJcbiAgICAgICAgUk9VVEVSX0RJUkVDVElWRVMsXHJcbiAgICAgICAgQXBwSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgICAgIEFwcEZvb3RlckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFJPVVRFUl9QUk9WSURFUlMsXHJcbiAgICAgICAgQXR0cmFjdGlvblNlcnZpY2VcclxuICAgIF1cclxufSlcclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9hdHRyYWN0aW9ucycsXHJcbiAgICAgICAgbmFtZTogJ0F0dHJhY3Rpb25zJyxcclxuICAgICAgICBjb21wb25lbnQ6IEF0dHJhY3Rpb25zQ29tcG9uZW50XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvZGFzaGJvYXJkJyxcclxuICAgICAgICBuYW1lOiAnRGFzaGJvYXJkJyxcclxuICAgICAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCxcclxuICAgICAgICB1c2VBc0RlZmF1bHQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9kZXRhaWwvOmlkJyxcclxuICAgICAgICBuYW1lOiAnQXR0cmFjdGlvbkRldGFpbCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBBdHRyYWN0aW9uRGV0YWlsQ29tcG9uZW50XHJcbiAgICB9LFxyXG5dKVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7fVxyXG4iXX0=