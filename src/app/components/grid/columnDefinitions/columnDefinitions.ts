import {
  LinkComponent,
  DateComponent,
  TextComponent,
  ThumbnailComponent,
  CheckboxComponent,
  HeaderCheckboxComponent
} from '../column';

export const checkbox = {
  headerName: '',
  field: 'checkbox',
  width: 40,
  hide: true,
  cellRendererFramework: CheckboxComponent,
  headerComponentFramework: HeaderCheckboxComponent
};

export const thumbnail = {
  headerName: '',
  field: 'thumbnail',
  autoHeight: true,
  width: 145,
  cellRendererFramework: ThumbnailComponent,
};

export const title = {
  headerName: 'Video Title',
  field: 'title',
  autoHeight: true,
  cellStyle: { 'white-space': 'normal', 'line-height': '20px' },
  cellRendererFramework: LinkComponent
};

export const description = {
  headerName: 'Description',
  field: 'description',
  width: 340,
  autoHeight: true,
  cellStyle: { ' white-space': 'normal', 'line-height': '20px' },
  cellRendererFramework: TextComponent
};

export const published = {
  headerName: 'Published on',
  field: 'publishedAt',
  width: 115,
  cellRendererFramework: DateComponent,
};
