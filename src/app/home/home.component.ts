import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user.service";
import { User } from "app/user";
import { PhotoService } from "app/photo.service";
import { Photo } from "app/photo";
import { AuthService } from 'app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  inputs: ['photos']
})
export class HomeComponent implements OnInit {
  public users: Object;
  public photos: any[];

  constructor(private _photoService: PhotoService,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    //get photos
    this._photoService.getPhotos()
      .subscribe((response: any) => {
        this.photos = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
    //get uer
    this.userService.getUsers()
      .subscribe(response => {
        this.users = response;
      },
      err => {
        console.log(err);
        return false;
      });
  }

}
