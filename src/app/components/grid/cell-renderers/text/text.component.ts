import { Component } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { ICellRendererParams } from '@ag-grid-community/core';

@Component({
  selector: 'app-text-ag-cell-renderer',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextAgCellRendererComponent implements ICellRendererAngularComp {
  text: string;

  agInit(params: ICellRendererParams) {
    this.text = params.value;
  }
  refresh(): boolean {
    return false;
  }
}
