import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Babcn32Component } from './babcn32.component';

describe('Babcn32Component', () => {
  let component: Babcn32Component;
  let fixture: ComponentFixture<Babcn32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Babcn32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Babcn32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
