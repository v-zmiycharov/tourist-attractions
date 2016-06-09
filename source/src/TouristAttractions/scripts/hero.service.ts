import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Hero }     from './hero';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {
    constructor(private http: Http) { }
    private heroesUrl = '/api/heroes';  // URL to web API
    
    getHeroes() {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError)
            .toPromise();
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }

}
