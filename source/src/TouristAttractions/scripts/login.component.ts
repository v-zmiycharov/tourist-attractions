import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'login',
    directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl: 'appTemplates/login.component.html',
})
export class LoginComponent {
    constructor(public router: Router, public http: Http) { }

    login(event, username, password) {
        event.preventDefault();
        let body = JSON.stringify({ username, password });
        let contentHeaders = new Headers({
            'Content-Type': 'application/json'
        });
        this.http.post('/api/login', body, { headers: contentHeaders })
            .subscribe(
            response => {
                localStorage.setItem('jwt', response.json().id_token);
                this.router.parent.navigateByUrl('/dashboard');
            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );
    }

    signup(event) {
        event.preventDefault();
        this.router.parent.navigateByUrl('/signup');
    }
}