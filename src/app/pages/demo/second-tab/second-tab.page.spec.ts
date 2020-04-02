import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecondTabPage } from './second-tab.page';

describe('SecondTabPage', () => {
  let component: SecondTabPage;
  let fixture: ComponentFixture<SecondTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
