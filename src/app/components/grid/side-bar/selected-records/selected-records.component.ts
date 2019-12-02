import { resources } from 'src/app/global/resources';
import { Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IToolPanelParams } from '@ag-grid-community/core';

@Component({
  selector: 'app-selected-records',
  templateUrl: './selected-records.component.html',
  styleUrls: ['./selected-records.component.scss']
})
export class SelectedRecordsComponent {
  count = 0;
  resources = resources;
  params: any;

  agInit(params: any): void {
      this.params = params;
      this.params.api.addEventListener('selectionChanged', this.selectionChange.bind(this));
  }

  selectionChange(): void {
    this.count = this.params.api.getSelectedRows().length;
  }
}
