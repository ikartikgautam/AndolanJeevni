import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  userData = null

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {

      var id = params.id;

      this.authService.getUserDataFS(id).subscribe(res => {

        this.userData = res;

      })

    })
  }

}
