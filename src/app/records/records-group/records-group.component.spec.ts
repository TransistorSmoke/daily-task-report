import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsGroupComponent } from './records-group.component';

describe('RecordsGroupComponent', () => {
  let component: RecordsGroupComponent;
  let fixture: ComponentFixture<RecordsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
