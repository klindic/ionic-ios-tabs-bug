import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-tab',
  templateUrl: './first-tab.page.html',
  styleUrls: ['./first-tab.page.scss'],
})
export class FirstTabPage implements OnInit {
  paramId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.paramId = params?.paramId;
    });
  }

}
