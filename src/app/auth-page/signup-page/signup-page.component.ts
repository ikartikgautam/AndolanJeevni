import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor(public authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  formDet = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    pass: new FormControl(''),
  })

  submit() {

    this.authService.signUp(this.formDet.get('email').value, this.formDet.get('pass').value).then((res) => {
      console.log(res.user.uid)
      var userId = this.getUsername(this.formDet.get('name').value);

      this.authService.upload('prod/' + res.user.uid, { name: this.formDet.get('name').value, contact: this.formDet.get('phone').value, username: userId }).then((resDb) => {
        console.log(resDb)
        this.route.navigate(['/']);
      })

    })

  }

  getUsername(name) {
    return name.toLowerCase().split(' ').join('_');
  }

}
