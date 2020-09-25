import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangugeComponent } from './languge.component';

describe('LangugeComponent', () => {
  let component: LangugeComponent;
  let fixture: ComponentFixture<LangugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
