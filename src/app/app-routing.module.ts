import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './components/pages/page1/page1.component';
import { Page2Component } from './components/pages/page2/page2.component';

const routes: Routes = [
  {
    path: '',
    component: Page1Component,
  },
  {
    path: 'page2',
    component:Page2Component,
  },
  {
    path: 'page3',
    component:Page1Component,
  },
  {
    path: 'page4',
    component:Page1Component,
  },
  {
    path: 'page5',
    component:Page1Component,
  },
  {
    path: 'page6',
    component:Page1Component,
  },
  {
    path: 'page7',
    component:Page1Component,
  },
  {
    path: 'page8',
    component:Page1Component,
  },
  {
    path: 'page9',
    component:Page1Component,
  },
  {
    path: 'page10',
    component: Page1Component,
  },
  {
    path: 'page11',
    component: Page1Component,
  },
  {
    path: 'page12',
    component: Page1Component,
  },
  {
    path: 'page13',
    component: Page1Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
