import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarListComponent } from './editar-list.component';

describe('EditarListComponent', () => {
  let component: EditarListComponent;
  let fixture: ComponentFixture<EditarListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarListComponent]
    });
    fixture = TestBed.createComponent(EditarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
