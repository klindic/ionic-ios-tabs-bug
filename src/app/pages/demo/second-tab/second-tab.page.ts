import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-tab',
  templateUrl: './second-tab.page.html',
  styleUrls: ['./second-tab.page.scss'],
})
export class SecondTabPage implements OnInit {
  paramId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.paramId = params?.paramId;
    });
  }

}
