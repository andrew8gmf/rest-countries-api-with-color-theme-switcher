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

  filterTerm: string = '';
  filteredCountries = [];

  regionTerm: string = '';
  regionCountries = [];

  constructor(private theme: ThemeService, private countryService: CountryService) {
    this.dynamicTheme();
    this.getAllCountries();
  }

  dynamicTheme() {
    this.theme.activeTheme(this.darkMode);
  }

  changeTheme() {
    this.darkMode = !this.darkMode;
    this.dynamicTheme();
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
    console.log(this.regionTerm);
    this.countryService.getRegion(this.regionTerm).subscribe(countries => {
      for (var country in countries) {
        this.regionCountries.push(countries[country]);
      }
      this.countries = this.regionCountries;
      return this.setFilter();
    });
  }

}
