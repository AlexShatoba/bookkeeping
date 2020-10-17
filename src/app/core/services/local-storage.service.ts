import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    private router: Router,
  ) {
   }

   public setItem(key: string, value: string): Observable<void> {
     return this.getItem(key).pipe(
       map(str => str !== null),
       switchMap(isExist =>
         isExist ? this.removeItem(key).pipe(
           tap(() => localStorage.setItem(key, value))
         ) : of(localStorage.setItem(key, value))
       )
     );
   }

   public getItem(key: string): Observable<string> {
     return of(localStorage.getItem(key));
  }

  public removeItem(key: string): Observable<void> {
     return of(localStorage.removeItem(key));
  }



}
