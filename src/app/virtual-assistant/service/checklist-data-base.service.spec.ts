import { TestBed } from '@angular/core/testing';

import { ChecklistDatabase } from './checklist-data-base.service';


describe('ChecklistDataBaseService', () => {
  let service: ChecklistDatabase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChecklistDatabase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
