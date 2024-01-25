import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute) {}


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
