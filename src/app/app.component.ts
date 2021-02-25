import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
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

    authService.list();

  }

  loading = true;

  ngOnInit(): void {
    this.matDrawerService.setSidenav(this.matDrawer);

    this.authService.signedIn$.subscribe(res => {

      // get userId from firebase Auth
      this.authService.getUserState().subscribe(usrState => {
        this.authService.AuthData = usrState;
        // get userData from fireStore
        this.authService.getUserDataFS(usrState.uid).subscribe(uData => {
          // Assign to variable
          /** WARN : will have to remove it in future, as variable may get bigger with time */
          this.authService.userData = uData;

          // Conditions
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

        })
      })

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
