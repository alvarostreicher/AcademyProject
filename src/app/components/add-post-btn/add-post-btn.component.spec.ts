import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostBtnComponent } from './add-post-btn.component';

describe('AddPostBtnComponent', () => {
  let component: AddPostBtnComponent;
  let fixture: ComponentFixture<AddPostBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
