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
    private storageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  goto(path: string) {
    this.storageService.remove("isAdmin");
    this.router.navigate([path], {relativeTo: this.route});
  }
}
