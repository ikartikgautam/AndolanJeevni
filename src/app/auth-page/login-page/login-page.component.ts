import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(public authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  formDet = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
  })

  submit() {

    this.authService.login(this.formDet.get('email').value, this.formDet.get('pass').value).then((res) => {
      console.log(res)
      this.route.navigate(['/']);
    })

  }

}
