import { Component } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { ICellRendererParams } from '@ag-grid-community/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements ICellRendererAngularComp {
  url: string;

  agInit(params: ICellRendererParams) {
    this.url = params.value;
  }
  refresh(): boolean {
    return false;
  }
}
