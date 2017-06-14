import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';
import { Photo } from "app/photo";
import { PhotoService } from "app/photo.service";
import { error } from "protractor/built";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user_id = localStorage.getItem('user_id');
  user: Object;
  public photos: any[];
  //photo: any;
  checkUserId: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessages: FlashMessagesService,
    private _photoService: PhotoService
  ) { }

  ngOnInit() {
    // get an user 
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
      err => {
        console.log(err);
        return false;
      });
    // get photos
    this._photoService.getPhotos()
      .subscribe((response: any) => {
        this.photos = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }
  onLogoutClick() {
    this.authService.logout();
    this.flashMessages.show('you are logout', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/']);
    return false;
  }
}
