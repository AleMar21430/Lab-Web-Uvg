import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorateComponent } from './inspectorate.component';

describe('InspectorateComponent', () => {
  let component: InspectorateComponent;
  let fixture: ComponentFixture<InspectorateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectorateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectorateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
