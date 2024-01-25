import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute) {}


    gotoDashboard(path: string) {

      setTimeout(() => {
        this.goto(path);
      }, 500);
    }

    goto(path: string) {
      this.router.navigate([path], {relativeTo: this.route});
    }
}
