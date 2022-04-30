import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticHomeComponent } from './tactic-home.component';

describe('TacticHomeComponent', () => {
  let component: TacticHomeComponent;
  let fixture: ComponentFixture<TacticHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacticHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
