import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'page2',
    component:AppComponent,
  },
  {
    path: 'page3',
    component:AppComponent,
  },
  {
    path: 'page4',
    component:AppComponent,
  },
  {
    path: 'page5',
    component:AppComponent,
  },
  {
    path: 'page6',
    component:AppComponent,
  },
  {
    path: 'page7',
    component:AppComponent,
  },
  {
    path: 'page8',
    component:AppComponent,
  },
  {
    path: 'page9',
    component:AppComponent,
  },
  {
    path: 'page10',
    component: AppComponent,
  },
  {
    path: 'page11',
    component: AppComponent,
  },
  {
    path: 'page12',
    component: AppComponent,
  },
  {
    path: 'page13',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
