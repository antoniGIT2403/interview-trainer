import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzAngularComponent } from './quizz-angular.component';

describe('QuizzAngularComponent', () => {
  let component: QuizzAngularComponent;
  let fixture: ComponentFixture<QuizzAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
