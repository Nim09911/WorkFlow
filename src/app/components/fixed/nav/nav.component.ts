import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  theme : boolean = false;
  @Output() setTheme = new EventEmitter<string>();
  
  ngOnInit(): void {

  }

  onChangeToggle() {
    this.theme = !this.theme;
    if(this.theme) {
      this.setTheme.emit('theme-dark');
    }
    else {
      this.setTheme.emit('theme-light');
    }
    console.log(this.theme);
  }
}
