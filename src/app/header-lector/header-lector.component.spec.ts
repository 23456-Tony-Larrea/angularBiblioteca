import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLectorComponent } from './header-lector.component';

describe('HeaderLectorComponent', () => {
  let component: HeaderLectorComponent;
  let fixture: ComponentFixture<HeaderLectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
