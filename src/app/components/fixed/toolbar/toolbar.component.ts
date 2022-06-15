import { Component, Input, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenavService/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Input() name: string = '';
  @Input() customer: string = 'Customer';
  constructor(private sidenav: SidenavService) {}

  toggleRightSidenav() {
    this.sidenav.toggle();
  }
  ngOnInit(): void {}
}
