import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
    selector: 'app-header',
    moduleId: module.id,
    templateUrl: 'app-header.component.html',
    directives: [
        ROUTER_DIRECTIVES
    ]
})

export class AppHeaderComponent { 
    constructor(private router: Router) { }
    title = 'Tour of Attractions';
    isActiveRoute(instruction: any[]): boolean {
        return this.router.isRouteActive(this.router.generate(instruction));
    }
}
