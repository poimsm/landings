import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  createLead(body) {
    let url = 'https://joopiterweb.com/landing/crear-lead';
    // let url = 'http://localhost:3000/landing/crear-lead';

    return this.http.post(url, body).toPromise();
  }
}
