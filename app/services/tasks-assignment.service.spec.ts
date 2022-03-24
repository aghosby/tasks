import { TestBed } from '@angular/core/testing';

import { TasksAssignmentService } from './tasks-assignment.service';

describe('TasksAssignmentService', () => {
  let service: TasksAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
