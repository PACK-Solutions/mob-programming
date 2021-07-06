import { Component, OnInit } from '@angular/core';
import {NavAuthGuard} from '../../../header/service/nav-auth.guard';

@Component({
  selector: 'app-home-basic',
  templateUrl: './home-basic.component.html',
  styleUrls: ['./home-basic.component.css']
})
export class HomeBasicComponent implements OnInit {

  constructor(public navAuthGuard: NavAuthGuard) {
  }

  ngOnInit(): void {}

  createRoom(): void {
    this.navAuthGuard.signIn();
  }

}
