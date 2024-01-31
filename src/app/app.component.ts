import { Component } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';
import { slideInAnimation } from './routing-animations/slide-in-animation';
import { RouteService } from './shared/services/route.service';
import { filter, map, takeUntil } from 'rxjs';
import { SubscriptionContolService } from './shared/services/subscription-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'car-dealership';

  constructor(private contexts: ChildrenOutletContexts,
     private routeService: RouteService,
    ) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
