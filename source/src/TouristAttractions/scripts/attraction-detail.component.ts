import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Attraction } from './attraction';
import { Section } from './section';
import { RouteParams } from '@angular/router-deprecated';
import { AttractionService } from './attraction.service';

@Component({
    selector: 'my-attraction-detail',
    templateUrl: 'appTemplates/attraction-detail.component.html',
    styleUrls: ['appStyles/attraction-detail.component.css']
})

export class AttractionDetailComponent implements OnInit {
    @Input() attraction: Attraction;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    constructor(
        private attractionService: AttractionService,
        private routeParams: RouteParams) {
    }
    ngOnInit() {
        if (this.routeParams.get('id') !== null) {
            let id = +this.routeParams.get('id');
            this.navigated = true;
            this.attractionService.getAttraction(id)
                .then(attraction => this.attraction = attraction);
        } else {
            this.navigated = false;
            this.attraction = new Attraction();
        }
    }
    save() {
        this.attractionService
            .save(this.attraction)
            .then(attraction => {
                this.attraction = attraction; // saved attraction, w/ id if new
                this.goBack(attraction);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    addSection() {
        if (this.attraction.sections == null) {
            this.attraction.sections = [];
        }

        this.attraction.sections.push(new Section());
    }

    deleteSection(index: number) {
        this.attraction.sections.splice(index);
    }

    goBack(savedAttraction: Attraction = null) {
        this.close.emit(savedAttraction);
        if (this.navigated) { window.history.back(); }
    }
}
