import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthConstants } from '../config/auth-constants';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(public storageService: StorageService, public router: Router) {}
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.storageService
        .get(AuthConstants.AUTH)
        .then(res => {
          if (res) {
            resolve(true);
          } else {
            console.log('HomeGuard, no AUTH');
            this.router.navigate(['login']);
            resolve(false);
          }
        })
        .catch(err => {
          console.log('HomeGuard, get err');
          this.router.navigate(['login']); // Fixing /home/feed showing empty if no key
          resolve(false);
        });
    });
  }
}
