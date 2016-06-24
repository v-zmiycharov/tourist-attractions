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
            moduleId: module.id,
            templateUrl: 'app.component.html',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL1RvdXJpc3RBdHRyYWN0aW9ucy5Gcm9udEVuZC9zY3JpcHRzL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUMscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2pELG1DQUFzQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3ZFLHFDQUFtQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzVELHFDQUFtQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzVELHNDQUFxQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQy9ELG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzNELDRDQUEwQywrQkFBK0IsQ0FBQyxDQUFBO0FBQzFFLGtDQUFpRSw0QkFBNEIsQ0FBQyxDQUFBO0FBb0M5RjtJQUFBO0lBQTJCLENBQUM7SUFsQzVCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFVBQVUsRUFBRTtnQkFDUixxQ0FBaUI7Z0JBQ2pCLHlDQUFrQjtnQkFDbEIseUNBQWtCO2FBQ3JCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLG9DQUFnQjtnQkFDaEIsc0NBQWlCO2FBQ3BCO1NBQ0osQ0FBQztRQUVELCtCQUFXLENBQUM7WUFDVDtnQkFDSSxJQUFJLEVBQUUsY0FBYztnQkFDcEIsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLFNBQVMsRUFBRSw0Q0FBb0I7YUFDbEM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFNBQVMsRUFBRSx3Q0FBa0I7Z0JBQzdCLFlBQVksRUFBRSxJQUFJO2FBQ3JCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLFNBQVMsRUFBRSx1REFBeUI7YUFDdkM7U0FDSixDQUFDOztvQkFBQTtJQUV5QixtQkFBQztBQUFELENBQUMsQUFBNUIsSUFBNEI7QUFBZixvQkFBWSxlQUFHLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQgeyBDb21wb25lbnQgfSAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXR0cmFjdGlvblNlcnZpY2UgfSAgICAgZnJvbSAnLi4vc2VydmljZXMvYXR0cmFjdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLWZvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdHRyYWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vYXR0cmFjdGlvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXR0cmFjdGlvbkRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vYXR0cmFjdGlvbi1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1xyXG4gICAgICAgIFJPVVRFUl9ESVJFQ1RJVkVTLFxyXG4gICAgICAgIEFwcEhlYWRlckNvbXBvbmVudCxcclxuICAgICAgICBBcHBGb290ZXJDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBST1VURVJfUFJPVklERVJTLFxyXG4gICAgICAgIEF0dHJhY3Rpb25TZXJ2aWNlXHJcbiAgICBdXHJcbn0pXHJcblxyXG5AUm91dGVDb25maWcoW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvYXR0cmFjdGlvbnMnLFxyXG4gICAgICAgIG5hbWU6ICdBdHRyYWN0aW9ucycsXHJcbiAgICAgICAgY29tcG9uZW50OiBBdHRyYWN0aW9uc0NvbXBvbmVudFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnL2Rhc2hib2FyZCcsXHJcbiAgICAgICAgbmFtZTogJ0Rhc2hib2FyZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICAgICAgdXNlQXNEZWZhdWx0OiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvZGV0YWlsLzppZCcsXHJcbiAgICAgICAgbmFtZTogJ0F0dHJhY3Rpb25EZXRhaWwnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQXR0cmFjdGlvbkRldGFpbENvbXBvbmVudFxyXG4gICAgfSxcclxuXSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge31cclxuIl19