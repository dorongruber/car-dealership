import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: "root",
})
class PermissionsService {

    constructor(private localStorageService: LocalStorageService,) {}
  canActivate(): boolean {
    const isAdmin = this.localStorageService.get("isAdmin");
    return isAdmin ? true : false;
  }
}

export const canActivateIsAdmin: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(PermissionsService).canActivate() ? true : inject(Router).createUrlTree(['']);
    };