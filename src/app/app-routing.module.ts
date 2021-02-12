import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsPageComponent } from './alerts-page/alerts-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ToolkitsPageComponent } from './toolkits-page/toolkits-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'alerts', component: AlertsPageComponent },
  { path: 'toolkits', component: ToolkitsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
