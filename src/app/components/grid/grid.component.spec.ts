import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AgGridModule } from '@ag-grid-community/angular';
import { DateComponent, TextComponent, CheckboxAgCellRendererComponent, LinkComponent, ThumbnailComponent } from './cell-renderers';
import { CheckboxAgHeaderRendererComponent } from './cell-headers';
import { SelectionButtonComponent, TotalRecordsComponent, SelectedRecordsComponent } from './side-bar';
import { GridComponent } from './grid.component';
import { CheckboxComponent } from '../common/checkbox/checkbox.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

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
      providers: [HttpClient],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('grid API is available', () => {
    expect(component.gridOptions.api).toBeTruthy();
  });

  it('column API is available', () => {
    expect(component.gridOptions.columnApi).toBeTruthy();
  });

  it('should have expected column headers', () => {
    fixture.detectChanges();
    const elm = fixture.nativeElement;
    const grid = elm.querySelector('ag-grid-angular');
    const headerCells = grid.querySelectorAll('.ag-header-cell-text');
    const headerTitles = Array.from(headerCells).map((cell: any) =>
        cell.textContent.trim()
    );
    expect(headerTitles).toEqual(['', 'Published on', 'Video Title', 'Description']);
  });
});
