import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtotodolistComponent } from './addtotodolist.component';

describe('AddtotodolistComponent', () => {
  let component: AddtotodolistComponent;
  let fixture: ComponentFixture<AddtotodolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddtotodolistComponent]
    });
    fixture = TestBed.createComponent(AddtotodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
