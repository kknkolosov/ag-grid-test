import { TestBed } from '@angular/core/testing';
import { EntityService } from './entity.service';
import { AgGridModule } from '@ag-grid-community/angular';
import {
  DateComponent,
  TextComponent,
  CheckboxAgCellRendererComponent,
  LinkComponent,
  ThumbnailComponent
} from '../components/grid/cell-renderers';
import { CheckboxAgHeaderRendererComponent } from '../components/grid/cell-headers';
import { SelectionButtonComponent, TotalRecordsComponent, SelectedRecordsComponent } from '../components/grid/side-bar';
import { GridComponent } from '../components/grid/grid.component';
import { CheckboxComponent } from '../components/common/checkbox/checkbox.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('EntityService', () => {
  let entityService: EntityService;

  beforeEach(() => {
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
    });
    entityService = TestBed.get(EntityService);
   }
  );

  it('should be created', () => {
    expect(entityService).toBeTruthy();
  });

  it('get() should return value from observable',
    (done: DoneFn) => {
      entityService.get().subscribe(value => {
        expect(value.length > 0).toBe(true);
        done();
      });
  });

  it('getUrlById() should return url video', () => {
    const url = `https://www.youtube.com/watch?v=`;
    const id = '3fumBcKC6RE';
    expect(entityService.getUrlById(id)).toEqual(url + id);
  });

});
