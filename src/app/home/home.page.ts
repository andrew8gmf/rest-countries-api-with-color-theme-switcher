import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public darkMode: boolean = false;
  countries = [];
  filterTerm: string;
  filteredCountries = [];

  constructor(private theme: ThemeService, private countryService: CountryService) {
    this.dynamicTheme();
    this.getAll();
  }

  dynamicTheme() {
    this.theme.activeTheme(this.darkMode);
  }

  changeTheme() {
    this.darkMode = !this.darkMode;
    this.dynamicTheme();
  }

  getAll() {
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

}
