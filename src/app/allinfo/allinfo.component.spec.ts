import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllinfoComponent } from './allinfo.component';

describe('AllinfoComponent', () => {
  let component: AllinfoComponent;
  let fixture: ComponentFixture<AllinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
