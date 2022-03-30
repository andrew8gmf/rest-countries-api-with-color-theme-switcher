import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class CountryService {
    private baseUrl = 'https://restcountries.com/v3.1/';
    
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(this.baseUrl + 'all');
    }
    
}