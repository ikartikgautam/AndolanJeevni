import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-draft-new',
  templateUrl: './draft-new.component.html',
  styleUrls: ['./draft-new.component.scss']
})
export class DraftNewComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  formDet = new FormGroup({
    tweet: new FormControl(''),
  })

  submit() {

    var tweet = this.formDet.get('tweet').value;

    this.authService.postTweet(tweet).then(res => {
      console.log(res)
    })

  }

  closeEditor() {
    document.querySelector(".editNew").classList.remove("appearEditor")
  }

}
