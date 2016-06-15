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
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var attractions_component_1 = require('./attractions.component');
var dashboard_component_1 = require('./dashboard.component');
var attraction_detail_component_1 = require('./attraction-detail.component');
var login_component_1 = require('./login.component');
var signup_component_1 = require('./signup.component');
var authorized_outlet_1 = require('./authorized-outlet');
var router_deprecated_2 = require('@angular/router-deprecated');
var AppComponent = (function () {
    function AppComponent(router, http, authHttp) {
        this.router = router;
        this.http = http;
        this.authHttp = authHttp;
        this.title = 'Tour of Attractions';
        // We get the JWT from localStorage
        this.jwt = localStorage.getItem('jwt');
        // We also store the decoded JSON from this JWT
        // this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
    }
    AppComponent.prototype.logout = function () {
        // Method to be called when the user wants to logout
        // Logging out means just deleting the JWT from localStorage and redirecting the user to the Login page
        localStorage.removeItem('jwt');
        this.router.parent.navigateByUrl('/login');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <nav>\n            <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n            <a [routerLink]=\"['Attractions']\">Attractions</a>\n        </nav>\n        <router-outlet></router-outlet>\n    ",
            styleUrls: ['appStyles/app.component.css'],
            directives: [
                router_deprecated_2.ROUTER_DIRECTIVES,
                authorized_outlet_1.AuthorizedOutlet
            ],
            providers: [
                attraction_service_1.AttractionService
            ]
        }),
        router_deprecated_2.RouteConfig([
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
            {
                path: '/login',
                name: 'Login',
                component: login_component_1.LoginComponent
            },
            {
                path: '/signup',
                name: 'SignUp',
                component: signup_component_1.SignUpComponent
            },
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, http_1.Http, angular2_jwt_1.AuthHttp])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map