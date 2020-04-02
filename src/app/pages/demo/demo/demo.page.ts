import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {

  tabs: Array<{name, isAvailable}> = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        const state = this.router.getCurrentNavigation().extras?.state;
        state.forEach(element => {
          this.tabs.push(element);
        });
      }
      console.log(this.tabs);
    });
  }

}
