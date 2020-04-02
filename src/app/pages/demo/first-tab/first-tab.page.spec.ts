import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstTabPage } from './first-tab.page';

describe('FirstTabPage', () => {
  let component: FirstTabPage;
  let fixture: ComponentFixture<FirstTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
