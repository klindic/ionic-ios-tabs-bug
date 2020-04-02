import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThirdTabPage } from './third-tab.page';

describe('ThirdTabPage', () => {
  let component: ThirdTabPage;
  let fixture: ComponentFixture<ThirdTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
