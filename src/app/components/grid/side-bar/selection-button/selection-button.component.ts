import { Component } from '@angular/core';
import { resources } from 'src/app/global/resources';

@Component({
  selector: 'app-selection-button',
  templateUrl: './selection-button.component.html',
  styleUrls: ['./selection-button.component.scss']
})
export class SelectionButtonComponent {
  params: any;
  tglButtonText = resources.showSelection;
  show = false;

  agInit(params: any): void {
    this.params = params;
  }

  showSelectionMode() {
    this.show = !this.show;
    if (this.show) {
      this.params.columnApi.setColumnWidth('description', 300);
      this.tglButtonText = resources.hideSelection;
    } else {
      this.params.columnApi.setColumnWidth('description', 340);
      this.tglButtonText = resources.showSelection;
      this.params.api.deselectAll();
    }
    this.params.columnApi.setColumnVisible('checkbox', this.show);
  }

}
