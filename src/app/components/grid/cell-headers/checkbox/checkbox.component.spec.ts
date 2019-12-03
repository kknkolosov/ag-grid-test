import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxComponent } from 'src/app/components/common/checkbox/checkbox.component';
import { CheckboxAgHeaderRendererComponent } from '..';

describe('CheckboxAgHeaderRendererComponent', () => {
  let component: CheckboxAgHeaderRendererComponent;
  let fixture: ComponentFixture<CheckboxAgHeaderRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxAgHeaderRendererComponent, CheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxAgHeaderRendererComponent);
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
