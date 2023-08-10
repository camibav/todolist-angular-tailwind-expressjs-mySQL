import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistviewComponent } from './todolistview.component';

describe('TodolistviewComponent', () => {
  let component: TodolistviewComponent;
  let fixture: ComponentFixture<TodolistviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodolistviewComponent]
    });
    fixture = TestBed.createComponent(TodolistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
