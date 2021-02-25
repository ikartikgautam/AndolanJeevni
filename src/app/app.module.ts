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
import { TopSearchBarComponent } from './search-page/top-search-bar/top-search-bar.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginPageComponent } from './auth-page/login-page/login-page.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupPageComponent } from './auth-page/signup-page/signup-page.component';
import { DraftNewComponent } from './draft-new/draft-new.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ProfileViewComponent } from './profile-view/profile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavBarComponent,
    TopHeaderComponent,
    HomePageComponent,
    SearchPageComponent,
    AlertsPageComponent,
    ToolkitsPageComponent,
    TopSearchBarComponent,
    AuthPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    DraftNewComponent,
    ProfileViewComponent
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
  ],
  providers: [
    MatDrawerService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
