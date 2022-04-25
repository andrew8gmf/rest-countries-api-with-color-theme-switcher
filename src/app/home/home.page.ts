import { Component } from '@angular/core';
import { CountryService } from '../country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  countries = [];

  filterTerm: string = '';
  filteredCountries = [];

  regionTerm: string = '';
  regionCountries = [];

  constructor(private countryService: CountryService, private router: Router) {
    this.getAllCountries();
  }

  getAllCountries() {
    this.countryService.getAll().subscribe(countries => {
      for (var country in countries) {
        this.countries.push(countries[country]);
      }
      return this.countries;
    });
  }

  ionViewDidEnter(){
    this.filteredCountries = this.countries;
  }

  setFilter(){
    this.filteredCountries = this.countries.filter((country) => {
      return country.name.official.toLowerCase().indexOf(this.filterTerm.toLowerCase()) > -1;
    });
  }

  setRegion() {
    this.regionCountries = [];
    this.countryService.getRegion(this.regionTerm).subscribe(countries => {
      for (var country in countries) {
        this.regionCountries.push(countries[country]);
      }
      this.countries = this.regionCountries;
      return this.setFilter();
    });
  }

  navigate(x){
    this.router.navigate(['/country/' + x])
  }

}
