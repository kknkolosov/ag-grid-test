import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements ICellRendererAngularComp {
  url: string;
  agInit(params) {
    this.url = params.value;
  }
  refresh(): boolean {
    return false;
  }
}
