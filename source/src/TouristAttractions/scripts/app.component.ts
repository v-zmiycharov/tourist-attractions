import { Component }       from '@angular/core';
import { AttractionService }     from './attraction.service';
import { Router } from '@angular/router-deprecated';
import { Http, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import { AttractionsComponent } from './attractions.component';
import { DashboardComponent } from './dashboard.component';
import { AttractionDetailComponent } from './attraction-detail.component';

import { LoginComponent } from './login.component';
import { SignUpComponent } from './signup.component';
import { AuthorizedOutlet } from './authorized-outlet';

import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Attractions']">Attractions</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['appStyles/app.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        AuthorizedOutlet
    ],
    providers: [
        AttractionService
    ]
})

@RouteConfig([
    {
        path: '/attractions',
        name: 'Attractions',
        component: AttractionsComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'AttractionDetail',
        component: AttractionDetailComponent
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUpComponent
    },
])

export class AppComponent {
    jwt: string;
    decodedJwt: string;
    constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
        // We get the JWT from localStorage
        this.jwt = localStorage.getItem('jwt');
        // We also store the decoded JSON from this JWT
        this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
    }

    title = 'Tour of Attractions';

    logout() {
        // Method to be called when the user wants to logout
        // Logging out means just deleting the JWT from localStorage and redirecting the user to the Login page
        localStorage.removeItem('jwt');
        this.router.parent.navigateByUrl('/login');
    }
}
