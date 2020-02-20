import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'dynamic',
  component: DynamicComponent
}, {
  path: 'dashboard',
  component: DashboardComponent
},
  { path: 'custom', loadChildren: () => import('./custom/custom.module').then(m => m.CustomModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
