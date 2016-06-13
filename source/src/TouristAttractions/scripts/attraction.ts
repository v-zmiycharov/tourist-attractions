import { Section } from './section';

export class Attraction {
    id: number;
    name: string;
    longitude: number;
    latitude: number;
    city: string;
    country: string;
    sections: Section[];

    constructor() {
        this.sections = [new Section()];
    }
}
