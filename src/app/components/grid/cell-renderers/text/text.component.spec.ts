import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TextAgCellRendererComponent } from './text.component';

describe('TextAgCellRendererComponent', () => {
  let component: TextAgCellRendererComponent;
  let fixture: ComponentFixture<TextAgCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAgCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAgCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
