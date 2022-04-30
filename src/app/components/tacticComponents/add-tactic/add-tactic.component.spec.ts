import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTacticComponent } from './add-tactic.component';

describe('AddTacticComponent', () => {
  let component: AddTacticComponent;
  let fixture: ComponentFixture<AddTacticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTacticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTacticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
