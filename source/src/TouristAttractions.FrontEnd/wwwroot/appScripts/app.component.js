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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NjcmlwdHMvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUMscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2pELG1DQUFzQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzdELHFDQUFtQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzVELHFDQUFtQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzVELHNDQUFxQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQy9ELG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzNELDRDQUEwQywrQkFBK0IsQ0FBQyxDQUFBO0FBQzFFLGtDQUFpRSw0QkFBNEIsQ0FBQyxDQUFBO0FBbUM5RjtJQUFBO0lBQTJCLENBQUM7SUFqQzVCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsVUFBVSxFQUFFO2dCQUNSLHFDQUFpQjtnQkFDakIseUNBQWtCO2dCQUNsQix5Q0FBa0I7YUFDckI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asb0NBQWdCO2dCQUNoQixzQ0FBaUI7YUFDcEI7U0FDSixDQUFDO1FBRUQsK0JBQVcsQ0FBQztZQUNUO2dCQUNJLElBQUksRUFBRSxjQUFjO2dCQUNwQixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsU0FBUyxFQUFFLDRDQUFvQjthQUNsQztZQUNEO2dCQUNJLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsV0FBVztnQkFDakIsU0FBUyxFQUFFLHdDQUFrQjtnQkFDN0IsWUFBWSxFQUFFLElBQUk7YUFDckI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLHVEQUF5QjthQUN2QztTQUNKLENBQUM7O29CQUFBO0lBRXlCLG1CQUFDO0FBQUQsQ0FBQyxBQUE1QixJQUE0QjtBQUFmLG9CQUFZLGVBQUcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7IENvbXBvbmVudCB9ICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBdHRyYWN0aW9uU2VydmljZSB9ICAgICBmcm9tICcuL2F0dHJhY3Rpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLWhlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1mb290ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXR0cmFjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2F0dHJhY3Rpb25zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF0dHJhY3Rpb25EZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2F0dHJhY3Rpb24tZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHBUZW1wbGF0ZXMvYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtcclxuICAgICAgICBST1VURVJfRElSRUNUSVZFUyxcclxuICAgICAgICBBcHBIZWFkZXJDb21wb25lbnQsXHJcbiAgICAgICAgQXBwRm9vdGVyQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgUk9VVEVSX1BST1ZJREVSUyxcclxuICAgICAgICBBdHRyYWN0aW9uU2VydmljZVxyXG4gICAgXVxyXG59KVxyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnL2F0dHJhY3Rpb25zJyxcclxuICAgICAgICBuYW1lOiAnQXR0cmFjdGlvbnMnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQXR0cmFjdGlvbnNDb21wb25lbnRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9kYXNoYm9hcmQnLFxyXG4gICAgICAgIG5hbWU6ICdEYXNoYm9hcmQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50LFxyXG4gICAgICAgIHVzZUFzRGVmYXVsdDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnL2RldGFpbC86aWQnLFxyXG4gICAgICAgIG5hbWU6ICdBdHRyYWN0aW9uRGV0YWlsJyxcclxuICAgICAgICBjb21wb25lbnQ6IEF0dHJhY3Rpb25EZXRhaWxDb21wb25lbnRcclxuICAgIH0sXHJcbl0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHt9XHJcbiJdfQ==