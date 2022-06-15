import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/themeService/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}
  theme :boolean = true;
  selectedTheme = new ThemeService();

  ngOnInit(): void {
    this.selectTheme();
  }

  selectTheme() {
    this.theme = !this.theme;
    if(this.theme) {
      this.selectedTheme.setTheme('theme-dark');
    }
    else {
      this.selectedTheme.setTheme('theme-light');
    }
  }
}
