import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import { Attraction }     from './attraction';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AttractionService {
    constructor(private http: Http) { }
    private attractionsUrl = '/api/attractions';  // URL to web API


    getAttractions(): Promise<Attraction[]> {
        return this.http.get(this.attractionsUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


    getAttraction(id: number) {
        let url = `${this.attractionsUrl}/${id}`;

        return this.http
            .get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    
    // Add new Attraction
    private post(attraction: Attraction): Promise<Attraction> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.attractionsUrl, JSON.stringify(attraction), { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    // Update existing Attraction
    private put(attraction: Attraction) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let url = `${this.attractionsUrl}/${attraction.attractionId}`;

        return this.http
            .put(url, JSON.stringify(attraction), { headers: headers })
            .toPromise()
            .then(() => attraction)
            .catch(this.handleError);
    }

    // Delete attraction
    delete(attraction: Attraction) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let url = `${this.attractionsUrl}/${attraction.attractionId}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    // Save = Post + Put
    save(attraction: Attraction): Promise<Attraction> {
        if (attraction.attractionId) {
            return this.put(attraction);
        }
        return this.post(attraction);
    }
}
