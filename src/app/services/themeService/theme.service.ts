import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  
  storedTheme : string | any = 'theme-light';

  setTheme(theme : string | any) {
    theme = localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');
    console.log(this.storedTheme);
  }
}
