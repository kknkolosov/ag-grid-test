import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgGridModule } from '@ag-grid-community/angular';
import {
  DateAgCellRendererComponent,
  TextAgCellRendererComponent,
  CheckboxAgCellRendererComponent,
  LinkAgCellRendererComponent,
  ThumbnailAgCellRendererComponent
} from '../../cell-renderers';
import { CheckboxAgHeaderRendererComponent } from '../../cell-headers';
import { SelectionButtonComponent, TotalRecordsComponent, SelectedRecordsComponent } from '../../side-bar';
import { GridComponent } from '../../grid.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxComponent } from 'src/app/components/common/checkbox/checkbox.component';

describe('LinkAgCellRendererComponent', () => {
  let component: LinkAgCellRendererComponent;
  let fixture: ComponentFixture<LinkAgCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GridComponent,
        DateAgCellRendererComponent,
        TextAgCellRendererComponent,
        LinkAgCellRendererComponent,
        ThumbnailAgCellRendererComponent,
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
          DateAgCellRendererComponent,
          TextAgCellRendererComponent,
          LinkAgCellRendererComponent,
          ThumbnailAgCellRendererComponent,
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
    fixture = TestBed.createComponent(LinkAgCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
