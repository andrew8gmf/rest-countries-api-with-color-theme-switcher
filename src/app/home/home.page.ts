import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public selectedTheme;

  constructor(private theme: ThemeService) {
    this.selectedTheme = 'light';
    this.dynamicTheme()
  }

  dynamicTheme() {
    this.theme.activeTheme(this.selectedTheme);
  }

}
