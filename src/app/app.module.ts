// Standard Modules and Components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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

//fixed components
import { NavComponent } from './components/fixed/nav/nav.component';
import { ToolbarComponent } from './components/fixed/toolbar/toolbar.component';

//page components
import { Page1Component } from './components/pages/page1/page1.component';
import { Page2Component } from './components/pages/page2/page2.component';


//services
import { SidenavService } from './services/sidenavService/sidenav.service';
import { WorkflowComponent } from './components/pages/workflow/workflow.component';
import { WorkflowNavComponent } from './components/pages/workflow/workflow-nav/workflow-nav.component';
import { WorkflowSidenavComponent } from './components/pages/workflow/workflow-sidenav/workflow-sidenav.component';
import { WorkflowMainComponent } from './components/pages/workflow/workflow-main/workflow-main.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ToolbarComponent,
    Page1Component,
    Page2Component,
    WorkflowComponent,
    WorkflowNavComponent,
    WorkflowSidenavComponent,
    WorkflowMainComponent,
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
