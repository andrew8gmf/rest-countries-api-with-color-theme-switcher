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
  country = {};
  render:boolean = false;

  constructor(private route: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.getCountry();
  }

  async getCountry() {
    await this.countryService.getName(this.name).subscribe(countries => {
      this.country = countries[0];
      this.render = true;

      return this.country, this.render;
    });
  }

}
