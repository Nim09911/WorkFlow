import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SidenavService } from './services/sidenavService/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';

export interface List {
  path: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  title = 'Workflow';
  storedTheme : string | any = 'theme-light';

  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(private sidenavService: SidenavService) {}

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  recvTheme($event : any) {
    this.storedTheme = $event;
    console.log($event);
  }

  list: List[] = [
    { path: '', name: 'Workflow' },
    { path: 'page2', name: 'Client Dashboard' },
    { path: 'page3', name: 'Asset Mode' },
    { path: 'page4', name: 'Portfolio View' },
    { path: 'page5', name: 'Target Allocation' },
    { path: 'page6', name: 'Global Margin Dashboard' },
    { path: 'page7', name: 'Corporate Action Diary' },
    { path: 'page8', name: 'Cusomer PnL' },
    { path: 'page9', name: 'Account Statement' },
    { path: 'page10', name: 'Trade Summary' },
    { path: 'page11', name: 'Post Trade Event Calender' },
    { path: 'page12', name: 'Fee & Revenue Report' },
    { path: 'page13', name: 'Client Scorecard' },
  ];
}
