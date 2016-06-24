import { Component, OnInit } from '@angular/core';

import { Attraction } from '../entities/attraction';
import { AttractionService } from '../services/attraction.service';

import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'appTemplates/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    attractions: Attraction[] = [];
    constructor(
        private router: Router,
        private attractionService: AttractionService) {
    }
    ngOnInit() {
        this.attractionService.getAttractions()
            .then(attractions => this.attractions = attractions.slice(1, 5));
    }
    gotoDetail(attraction: Attraction) {
        let link = ['AttractionDetail', { id: attraction.attractionId }];
        this.router.navigate(link);
    }
}

