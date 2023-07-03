import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { User } from 'src/models/User';
import { AuthToken } from 'src/models/AuthToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'auth_token';
  private accessToken: string | undefined;
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  get token(){
    return sessionStorage.getItem(this.TOKEN_NAME);
  }

  constructor(
    private httpService: HttpService,
    private router: Router) {
    this._isLoggedIn$.next(!!this.token);
  }

  login(loginRequestModel: User) {
    return this.httpService.login(loginRequestModel).pipe(
      tap((response: string) => {
        this._isLoggedIn$.next(true);
        this.accessToken = response;
        sessionStorage.setItem(this.TOKEN_NAME, this.accessToken);
      })
    );
  }

  logout(){
    this._isLoggedIn$.next(false);
    sessionStorage.clear();
  }
}

