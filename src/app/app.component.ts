import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatDrawerService } from './services/mat-drawer.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'andolanJeevni';

  @ViewChild("drawer", { static: true }) public matDrawer: MatDrawer;

  constructor(private matDrawerService: MatDrawerService, public authService: AuthService, public route: Router) {

    // authService.login('gautam.kartik05@gmail.com', 'spongybb').then((res) => {
    //   console.log(res)
    // })
    authService.list();

  }

  loading = true;

  ngOnInit(): void {
    this.matDrawerService.setSidenav(this.matDrawer);

    this.authService.signedIn$.subscribe(res => {
      if (res) {
        this.loading = false;
      }
      else if (res == undefined) {
        this.loading = true;
      }
      else {
        this.route.navigate(['login']);
        this.loading = false;
      }
      // console.log("*******", res)
    })

  }

  logout() {
    this.authService.logout().then(res => {
      console.log(res)
    })
  }

  createNew() {
    document.querySelector(".editNew").classList.add("appearEditor")
  }

}
