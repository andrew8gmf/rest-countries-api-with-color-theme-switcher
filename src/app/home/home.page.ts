import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public darkMode: boolean = false;

  constructor(private theme: ThemeService) {
    this.dynamicTheme();
  }

  dynamicTheme() {
    this.theme.activeTheme(this.darkMode);
  }

  changeTheme() {
    this.darkMode = !this.darkMode;
    this.dynamicTheme();
  }

}
