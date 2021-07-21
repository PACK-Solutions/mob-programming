import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-basic',
  templateUrl: './home-basic.component.html',
  styleUrls: ['./home-basic.component.css']
})
export class HomeBasicComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  createRoom(): void {
    this.router.navigate(['/settings']).then();
  }

}
