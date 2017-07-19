import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeheComponent } from './hehe.component';

describe('HeheComponent', () => {
  let component: HeheComponent;
  let fixture: ComponentFixture<HeheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
