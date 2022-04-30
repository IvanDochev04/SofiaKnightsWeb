import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTacticComponent } from './update-tactic.component';

describe('UpdateTacticComponent', () => {
  let component: UpdateTacticComponent;
  let fixture: ComponentFixture<UpdateTacticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTacticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTacticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
