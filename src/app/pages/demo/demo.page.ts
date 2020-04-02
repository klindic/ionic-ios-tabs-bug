import { Component, OnInit, ViewChild, NgZone, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit, AfterViewInit {
  @ViewChild('tabs') ionTabs: IonTabs;

  tabs: Array<{id, name, isVisible}> = [];
  availableTabs: Array<string> = [];

  constructor(private route: ActivatedRoute, private router: Router, private zone: NgZone) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        const state = this.router.getCurrentNavigation().extras?.state;
        state.forEach(element => {
          this.zone.run(() => {
            this.tabs.push(element);
            if (element.isVisible) {
              this.availableTabs.push(element.id);
            }
          });
        });
      }
      console.log(this.tabs);
    });
  }

  ngAfterViewInit() {
    this.preselectTab();
  }

  preselectTab() {
    if (this.tabs.length) {
      const preselectedTab = this.tabs.find(tab => tab.isVisible);
      try {
        this.ionTabs.select(`${preselectedTab.name}/${preselectedTab.id}`);
      } catch (error) {
      }
    }
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

}
