import { Component } from '@angular/core';
import { ICellRendererParams } from '@ag-grid-community/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';

@Component({
  selector: 'app-date-ag-cell-renderer',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateAgCellRendererComponent implements ICellRendererAngularComp {
  date: string;

  agInit(params: ICellRendererParams) {
    this.date = params.value ? new Date(params.value).toLocaleDateString() : '';
  }
  refresh(): boolean {
    return false;
  }

}
