import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxComponent } from 'src/app/components/common/checkbox/checkbox.component';
import { CheckboxAgCellRendererComponent } from '..';
import { By } from '@angular/platform-browser';


describe('CheckboxAgCellRendererComponent', () => {
  let component: CheckboxAgCellRendererComponent;
  let fixture: ComponentFixture<CheckboxAgCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxAgCellRendererComponent, CheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxAgCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click change value', () => {
    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.checked).toBeFalsy();
    input.nativeElement.click();
    fixture.detectChanges();
    expect(input.nativeElement.checked).toBeTruthy();
  });
});
