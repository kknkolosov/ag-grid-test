import { Component, OnInit } from '@angular/core';
import { ICellRenderer } from '@ag-grid-community/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements ICellRendererAngularComp  {
  date: string;
  agInit(params) {
    this.date = params.value ? new Date(params.value).toLocaleDateString() : '';
  }
  refresh(): boolean {
    return false;
  }

}
