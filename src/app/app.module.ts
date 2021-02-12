import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BottomNavBarComponent } from './bottom-nav-bar/bottom-nav-bar.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDrawerService } from './services/mat-drawer.service';
import { SearchPageComponent } from './search-page/search-page.component';
import { AlertsPageComponent } from './alerts-page/alerts-page.component';
import { ToolkitsPageComponent } from './toolkits-page/toolkits-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavBarComponent,
    TopHeaderComponent,
    HomePageComponent,
    SearchPageComponent,
    AlertsPageComponent,
    ToolkitsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  providers: [
    MatDrawerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
