import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-basic',
  templateUrl: './home-basic.component.html',
  styleUrls: [ './home-basic.component.css' ]
})
export class HomeBasicComponent {

  constructor(private readonly router: Router) {}

  createRoom(): void {
    this.router.navigate(['/settings']).then();
  }

}
