import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../country.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  name;
  
  country:any = {};
  renderCountry:boolean = false;

  borderCountries:any = [];

  constructor(private route: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.getCountry();
  }

  async getCountry() {
    await this.countryService.getName(this.name).subscribe(countries => {
      this.country = countries[0];
      this.renderCountry = true;

      return this.country, this.renderCountry, this.getBorderCountries();
    });
  }

  async getBorderCountries() {
    for (var index in this.country.borders) {
      await this.countryService.getCode(this.country.borders[index]).subscribe(country => {
        this.borderCountries.push(country[0].name.common);
      });
    }
  }

}
