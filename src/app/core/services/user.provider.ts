import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class UserProvider {

  constructor() {}

  private currentUser$ = new BehaviorSubject<User>(null);

  public me(): Observable<User> {
    return this.currentUser$;
  }

  
}