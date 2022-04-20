import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public darkMode: boolean = false;

  constructor(private theme: ThemeService) { }

  ngOnInit() {
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
