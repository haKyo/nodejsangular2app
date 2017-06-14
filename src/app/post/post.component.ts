import { Component, OnInit, Injectable } from '@angular/core';
import { PhotoService } from "app/photo.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from "app/auth.service";
import { ValidateService } from "app/validate.service";

@Injectable()
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  user_id = localStorage.getItem('user_id');
  caption: String;
  image_path: String;
  date = Date.now();
  hidden: false;
  constructor(
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private photoService: PhotoService,
    private validateSerVice: ValidateService
  ) { }

  ngOnInit() {
  }
  onPostSubmitPhoto() {
    const photo = {
      caption: this.caption,
      user_id: this.user_id,
      image_path: this.image_path,
      date: this.date
    }
    if (!this.validateSerVice.validatePostPhoto(photo)) {
      this.flashMessagesService.show('please fill in all field', { cssClass: 'alert-danger', timeout: 300 });
      return false;
    }
    this.photoService.addPhoto(photo).subscribe(data => {
      if (data) {
        this.flashMessagesService.show('post success', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/home']);
      } else {
        this.flashMessagesService.show('false to upload', { cssClass: 'alert-danger', timeout: 3000 });
        return false;
      }
    });
  
  }
  goToHomePage() {
    this.router.navigate(['/home']);
  }

}

