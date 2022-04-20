import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualAssistantTreeComponent } from './virtual-assistant-tree.component';


describe('VirtualAssistantTreeComponent', () => {
  let component: VirtualAssistantTreeComponent;
  let fixture: ComponentFixture<VirtualAssistantTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VirtualAssistantTreeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualAssistantTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
