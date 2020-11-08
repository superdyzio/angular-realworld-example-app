import { Component, OnInit } from '@angular/core';

import { UserService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  disabled = true;

  constructor (
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.populate();

    setTimeout(() => this.disabled = false, 10000);
  }
}
