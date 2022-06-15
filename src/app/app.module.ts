import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/fixed/nav/nav.component';
import { ToolbarComponent } from './components/fixed/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//services
import { SidenavService } from './services/sidenavService/sidenav.service';
import { Page1Component } from './components/pages/page1/page1.component';
import { Page2Component } from './components/pages/page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ToolbarComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatListModule,
    BrowserAnimationsModule,
  ],
  providers: [
    SidenavService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
