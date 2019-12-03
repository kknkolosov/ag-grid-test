import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridModule } from '@ag-grid-community/angular';
import {
  DateComponent,
  TextComponent,
  CheckboxAgCellRendererComponent,
  LinkComponent,
  ThumbnailComponent
} from '../../cell-renderers';
import { CheckboxAgHeaderRendererComponent } from '../../cell-headers';
import { SelectionButtonComponent, TotalRecordsComponent, SelectedRecordsComponent } from '../../side-bar';
import { GridComponent } from '../../grid.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxComponent } from 'src/app/components/common/checkbox/checkbox.component';

describe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GridComponent,
        DateComponent,
        TextComponent,
        LinkComponent,
        ThumbnailComponent,
        CheckboxAgCellRendererComponent,
        CheckboxAgHeaderRendererComponent,
        SelectionButtonComponent,
        SelectedRecordsComponent,
        TotalRecordsComponent,
        CheckboxComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        AgGridModule.withComponents([
          GridComponent,
          DateComponent,
          TextComponent,
          LinkComponent,
          ThumbnailComponent,
          CheckboxAgCellRendererComponent,
          CheckboxAgHeaderRendererComponent,
          SelectionButtonComponent,
          SelectedRecordsComponent,
          TotalRecordsComponent,
          CheckboxComponent
        ]),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
