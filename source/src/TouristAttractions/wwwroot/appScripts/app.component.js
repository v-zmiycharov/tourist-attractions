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
            template: "\n        <h1>{{title}}</h1>\n        <nav>\n            <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n            <a [routerLink]=\"['Attractions']\">Attractions</a>\n        </nav>\n        <router-outlet></router-outlet>\n    ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NjcmlwdHMvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUMscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2pELG1DQUFzQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzdELHNDQUFxQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQy9ELG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzNELDRDQUEwQywrQkFBK0IsQ0FBQyxDQUFBO0FBQzFFLGtDQUFpRSw0QkFBNEIsQ0FBQyxDQUFBO0FBc0M5RjtJQUFBO1FBQ0ksVUFBSyxHQUFHLHFCQUFxQixDQUFDO0lBQ2xDLENBQUM7SUF0Q0Q7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDBPQU9UO1lBQ0QsVUFBVSxFQUFFLENBQUMscUNBQWlCLENBQUM7WUFDL0IsU0FBUyxFQUFFO2dCQUNQLG9DQUFnQjtnQkFDaEIsc0NBQWlCO2FBQ3BCO1NBQ0osQ0FBQztRQUVELCtCQUFXLENBQUM7WUFDVDtnQkFDSSxJQUFJLEVBQUUsY0FBYztnQkFDcEIsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLFNBQVMsRUFBRSw0Q0FBb0I7YUFDbEM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFNBQVMsRUFBRSx3Q0FBa0I7Z0JBQzdCLFlBQVksRUFBRSxJQUFJO2FBQ3JCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLFNBQVMsRUFBRSx1REFBeUI7YUFDdkM7U0FDSixDQUFDOztvQkFBQTtJQUlGLG1CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxvQkFBWSxlQUV4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHsgQ29tcG9uZW50IH0gICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF0dHJhY3Rpb25TZXJ2aWNlIH0gICAgIGZyb20gJy4vYXR0cmFjdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXR0cmFjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2F0dHJhY3Rpb25zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF0dHJhY3Rpb25EZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2F0dHJhY3Rpb24tZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aDE+e3t0aXRsZX19PC9oMT5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ0Rhc2hib2FyZCddXCI+RGFzaGJvYXJkPC9hPlxyXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ0F0dHJhY3Rpb25zJ11cIj5BdHRyYWN0aW9uczwvYT5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFJPVVRFUl9QUk9WSURFUlMsXHJcbiAgICAgICAgQXR0cmFjdGlvblNlcnZpY2VcclxuICAgIF1cclxufSlcclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9hdHRyYWN0aW9ucycsXHJcbiAgICAgICAgbmFtZTogJ0F0dHJhY3Rpb25zJyxcclxuICAgICAgICBjb21wb25lbnQ6IEF0dHJhY3Rpb25zQ29tcG9uZW50XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvZGFzaGJvYXJkJyxcclxuICAgICAgICBuYW1lOiAnRGFzaGJvYXJkJyxcclxuICAgICAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCxcclxuICAgICAgICB1c2VBc0RlZmF1bHQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9kZXRhaWwvOmlkJyxcclxuICAgICAgICBuYW1lOiAnQXR0cmFjdGlvbkRldGFpbCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBBdHRyYWN0aW9uRGV0YWlsQ29tcG9uZW50XHJcbiAgICB9LFxyXG5dKVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICB0aXRsZSA9ICdUb3VyIG9mIEF0dHJhY3Rpb25zJztcclxufVxyXG4iXX0=