import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { SubscriptionContolService } from "./subscription-control.service";
import { filter, map, takeUntil } from "rxjs";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: "root"
})
export class RouteService {
    constructor(
        private router: Router,
        private subscriptionContolService: SubscriptionContolService,
        private storageService: LocalStorageService,
        ) {
        this.router.events.pipe(
            takeUntil(this.subscriptionContolService.stop$),
            filter(e => e instanceof NavigationEnd && this.checkNavigation()),
            map(e => {
                if(e instanceof NavigationEnd) {
                    this.storageService.remove("isAdmin");
                }
            })
        ).subscribe();
        
    }

    checkNavigation() {
        const prevUrl = this.router.getCurrentNavigation()?.previousNavigation?.finalUrl?.toString();
        return prevUrl != null && prevUrl.includes("dashboard");
    }
}