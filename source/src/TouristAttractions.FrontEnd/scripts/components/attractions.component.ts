import { Component, OnInit } from '@angular/core';
import { Attraction } from '../entities/attraction';
import { AttractionService } from '../services/attraction.service';
import { Router } from '@angular/router-deprecated';
import { AttractionDetailComponent } from './attraction-detail.component';

@Component({
    selector: 'my-attractions',
    templateUrl: 'appTemplates/attractions.component.html',
    directives: [AttractionDetailComponent]
})

export class AttractionsComponent implements OnInit {
    attractions: Attraction[];
    selectedAttraction: Attraction;
    addingAttraction = false;
    error: any;
    constructor(
        private router: Router,
        private attractionService: AttractionService) { }
    getAttractions() {
        this.attractionService.getAttractions().then(attractions => this.attractions = attractions);
    }
    ngOnInit() {
        this.getAttractions();
    }
    onSelect(attraction: Attraction) { this.selectedAttraction = attraction; }
    gotoDetail() {
        this.router.navigate(['AttractionDetail', { id: this.selectedAttraction.attractionId }]);
    }

    addAttraction() {
        this.addingAttraction = true;
        this.selectedAttraction = null;
    }

    close(savedAttraction: Attraction) {
        this.addingAttraction = false;
        if (savedAttraction) { this.getAttractions(); }
    }

    delete(attraction: Attraction, event: any) {
        event.stopPropagation();
        this.attractionService
            .delete(attraction)
            .then(res => {
                this.attractions = this.attractions.filter(h => h !== attraction);
                if (this.selectedAttraction === attraction) { this.selectedAttraction = null; }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

}

