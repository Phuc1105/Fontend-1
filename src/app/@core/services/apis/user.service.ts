import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from "../common/api.service";
import { UserProfile } from "../../model/user-info.model";
import { API_ENDPOINT } from "../../config/api-endpoint.config";
import Ap
@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiService {

  constructor(
    private _http: HttpClient,
  ) {
    super(_http);
  }
  getUsers(): Observable<any> {
    return this._http.get(API_USER);
  }


  updateProfile(): Observable<UserProfile[]> {
    return this.get(API_ENDPOINT.auth.updateProfile);
  }
}
