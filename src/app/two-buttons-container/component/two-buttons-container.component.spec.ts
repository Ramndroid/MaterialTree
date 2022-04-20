import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoButtonsContainerComponent } from './two-buttons-container.component';

describe('TwoButtonsContainerComponent', () => {
  let component: TwoButtonsContainerComponent;
  let fixture: ComponentFixture<TwoButtonsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoButtonsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoButtonsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
