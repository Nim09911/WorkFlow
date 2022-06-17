import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  theme : boolean = false;
  themeName : string = 'Light';
  @Output() setTheme = new EventEmitter<string>();
  
  ngOnInit(): void {

  }

  toggleTheme() {
    this.theme = !this.theme;
    if(this.theme) {
      this.setTheme.emit('theme-dark');
      this.themeName = 'Dark';
    }
    else {
      this.setTheme.emit('theme-light');
      this.themeName = 'Light';
    }
    console.log(this.theme);
  }
}
