import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Photo } from "app/photo";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhotoService {

  private _getAllPhotosUrl = "/photo_api/photos";
  private _postAPhotoUrl = "/photo_api/photo";
  private _putAPhotoUrl = "/photo_api/photo/";
  private _getPhotosByUserId = "/photo_api/photos/:user_id"
  constructor(private _http: Http) { }
  // get get photos
  getPhotos(): Observable<any[]> {
    return this._http
      .get(this._getAllPhotosUrl)
      .map((response: Response) => response.json())
      
  }
  
  // get photo with user_id
  getPhotoByUserId(): Observable<any[]> {
    return this._http
    .get(this._getPhotosByUserId)
    .map((response : Response) => response.json());
  }
  // end get photos

 /* addPhoto(photo: Photo) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._postUrl, JSON.stringify(photo), options)
      .map((response: Response) => response.json());
  } */
  addPhoto(photo){
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.post(this._postAPhotoUrl, photo, {headers: headers})
    .map(res => res.json());

  }

  updatePhoto(photo: Photo) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let option = new RequestOptions({ headers: headers });
    return this._http.put(this._putAPhotoUrl + photo._id, JSON.stringify(photo), option)
      .map((response: Response) => response.json());
  }


}