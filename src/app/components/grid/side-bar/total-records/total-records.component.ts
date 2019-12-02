import { resources } from 'src/app/global/resources';
import { Component } from '@angular/core';
import { IToolPanelParams } from '@ag-grid-community/core';

@Component({
  selector: 'app-total-records',
  templateUrl: './total-records.component.html',
  styleUrls: ['./total-records.component.scss']
})
export class TotalRecordsComponent {
  params: IToolPanelParams;
  count = 0;
  resources = resources;

  agInit(params: any): void {
    this.params = params;
    this.params.api.addEventListener('modelUpdated', this.updateModel.bind(this));
  }

  updateModel(): void {
    this.count = this.params.api.getDisplayedRowCount();
  }
}
