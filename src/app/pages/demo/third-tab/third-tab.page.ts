import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third-tab',
  templateUrl: './third-tab.page.html',
  styleUrls: ['./third-tab.page.scss'],
})
export class ThirdTabPage implements OnInit {
  paramId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.paramId = params?.paramId;
    });
  }

}
