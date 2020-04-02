import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoPage } from './demo.page';

const routes: Routes = [
  {
    path: '',
    component: DemoPage,
    children: [
      {
        path: 'first-tab/:paramId',
        loadChildren: () => import('./first-tab/first-tab.module').then( m => m.FirstTabPageModule)
      },
      {
        path: 'second-tab/:paramId',
        loadChildren: () => import('./second-tab/second-tab.module').then( m => m.SecondTabPageModule)
      },
      {
        path: 'third-tab/:paramId',
        loadChildren: () => import('./third-tab/third-tab.module').then( m => m.ThirdTabPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoPageRoutingModule {}
