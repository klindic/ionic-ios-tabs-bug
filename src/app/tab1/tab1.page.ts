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
        id: '1',
        name: 'first-tab',
        isVisible: true
      },
      {
        id: '2',
        name: 'second-tab',
        isVisible: false
      },
      {
        id: '3',
        name: 'third-tab',
        isVisible: true
      },
    ];
    this.router.navigate(['demo'], {
      state: params
    });
  }

}
