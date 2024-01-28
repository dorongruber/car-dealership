import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarRequest } from 'src/app/shared/models/car-request';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { CarRequestService } from 'src/app/shared/services/mock-car-request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(
    private localStorageService: LocalStorageService,
    private carRequestService: CarRequestService,
    private router: Router,
    private route: ActivatedRoute) {
      this.carRequestService.initStorage();
      this.carRequestService.getCarRequests();
    }

    gotoDashboard(path: string) {
      this.localStorageService.add("isAdmin", "true");
      setTimeout(() => {
        this.goto(path);
      }, 500);
    }

    goto(path: string) {
      this.router.navigate([path], {relativeTo: this.route});
    }
}
