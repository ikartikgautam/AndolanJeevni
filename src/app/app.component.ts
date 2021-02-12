import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatDrawerService } from './services/mat-drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'andolanJeevni';

  @ViewChild("drawer", { static: true }) public matDrawer: MatDrawer;

  constructor(private matDrawerService: MatDrawerService) {

  }

  ngOnInit(): void {
    this.matDrawerService.setSidenav(this.matDrawer);
  }

}
