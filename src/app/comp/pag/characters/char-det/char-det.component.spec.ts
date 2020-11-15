import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharDetComponent } from './char-det.component';

describe('CharDetComponent', () => {
  let component: CharDetComponent;
  let fixture: ComponentFixture<CharDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
