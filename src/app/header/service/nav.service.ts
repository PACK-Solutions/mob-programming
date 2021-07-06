import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public isAuth = false;

  constructor() { }

  signIn(): Promise<boolean> {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 100
        );
      }
    );
  }


}
