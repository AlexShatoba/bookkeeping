import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { AppConfig } from '../models/app-config';
import { map, switchMap } from 'rxjs/operators';

const AUTH_URL = 'auth';

@Injectable()
export class AuthProvider {
  constructor(
    private http: HttpClient,
    private config: AppConfig,
  ) { }

  public login(email: string, password: string): Observable<void> {
    const body = {
      email,
      password,
    };

    return this.http.post<void>(`${this.config.apiEndpoint}/${AUTH_URL}`, body);
    // .pipe(
      // switchMap(res => {
      //   const token = res.token;
      //   return this.setUser(token);
      // }),
    // );
  }

  private setToken(token: string): void {
    // return of(void);
  }
}
