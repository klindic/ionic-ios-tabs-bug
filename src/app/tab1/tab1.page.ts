import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}

  navigate() {
    const params = [
      {
        name: 'tab-1',
        isVisible: true
      },
      {
        name: 'tab-2',
        isVisible: false
      },
    ];
    this.router.navigate(['demo'], {
      state: params
    });
  }

}
