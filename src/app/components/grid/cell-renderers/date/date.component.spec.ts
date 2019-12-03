import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateAgCellRendererComponent } from './date.component';

describe('DateAgCellRendererComponent', () => {
  let component: DateAgCellRendererComponent;
  let fixture: ComponentFixture<DateAgCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateAgCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateAgCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
