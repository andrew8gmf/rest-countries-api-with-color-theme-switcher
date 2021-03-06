import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class CountryService {
    private baseUrl = 'https://restcountries.com/v3.1/';
    
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(this.baseUrl + 'all?fields=flags,name,population,region,capital');
    }

    getRegion(region) {
        return this.http.get(this.baseUrl + 'region/' + region);
    }

    getName(name) {
        return this.http.get(this.baseUrl + 'name/' + name);
    }

    getCode(code) {
        return this.http.get(this.baseUrl + 'alpha/' + code);
    }
    
}