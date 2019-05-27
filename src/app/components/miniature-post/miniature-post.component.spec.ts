import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniaturePostComponent } from './miniature-post.component';

describe('MiniaturePostComponent', () => {
  let component: MiniaturePostComponent;
  let fixture: ComponentFixture<MiniaturePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniaturePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniaturePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
