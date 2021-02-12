import { Component, OnInit } from '@angular/core';
import { MatDrawerService } from '../services/mat-drawer.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  constructor(public matDrawerService: MatDrawerService) { }

  ngOnInit(): void {
  }

}
