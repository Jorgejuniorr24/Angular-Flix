import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;

  constructor(private auth0Service: Auth0Service) {
    this.auth0Service.idTokenClaims$.subscribe(claims => {
      this.token = claims ? claims.__raw : null;
    });
  }

  loginWithGoogle() {
    this.auth0Service.loginWithRedirect({
      authorizationParams: {
        redirect_uri: window.location.origin,
        connection: 'google-oauth2'
      }
    });
  }

  loginWithFacebook() {
    this.auth0Service.loginWithRedirect({
      authorizationParams: {
        redirect_uri: window.location.origin,
        connection: 'facebook'
      }
    });
  }

  logout() {
    this.auth0Service.logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
  }

  isAuthenticated$(): Observable<boolean> {
    return this.auth0Service.isAuthenticated$;
  }

  getUser$() {
    return this.auth0Service.user$;
  }

  getToken(): string | null {
    return this.token;
  }
}
