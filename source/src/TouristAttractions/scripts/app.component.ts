import { Component }       from '@angular/core';
import { AttractionService }     from './attraction.service';
import { AppHeaderComponent } from './app-header.component';
import { AppFooterComponent } from './app-footer.component';
import { AttractionsComponent } from './attractions.component';
import { DashboardComponent } from './dashboard.component';
import { AttractionDetailComponent } from './attraction-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    templateUrl: 'appTemplates/app.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        AppHeaderComponent,
        AppFooterComponent
    ],
    providers: [
        ROUTER_PROVIDERS,
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
])

export class AppComponent {}
