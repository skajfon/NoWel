import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommFormComponent } from './comm-form.component';

describe('CommFormComponent', () => {
  let component: CommFormComponent;
  let fixture: ComponentFixture<CommFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommFormComponent]
    });
    fixture = TestBed.createComponent(CommFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
