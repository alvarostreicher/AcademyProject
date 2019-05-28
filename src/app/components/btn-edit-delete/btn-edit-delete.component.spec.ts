import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEditDeleteComponent } from './btn-edit-delete.component';

describe('BtnEditDeleteComponent', () => {
  let component: BtnEditDeleteComponent;
  let fixture: ComponentFixture<BtnEditDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnEditDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
