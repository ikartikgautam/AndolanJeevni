
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  constructor(public authService: AuthService, private route: Router) { }

  ngOnInit(): void {

  }

  // login() {
  //   this.authService.login('gautam.kartik05@gmail.com', 'spongybb').then((res) => {
  //     console.log(res)
  //     this.route.navigate(['/']);
  //   })
  // }

  login = false;
  signup = false;

}
