import { Component, OnDestroy } from '@angular/core';
import { IHeaderAngularComp } from '@ag-grid-community/angular';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-checkbox-ag-header-renderer',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxAgHeaderRendererComponent implements IHeaderAngularComp, OnDestroy {
  public params: any;
  public checked = false;
  private subscriptions: Subscription;

  agInit(params: any): void {
    this.params = params;
    this.subscriptions = fromEvent(params.api, 'selectionChanged').subscribe(() =>
      this.checked = this.params.api.getSelectedRows().length === this.params.api.getDisplayedRowCount()
    );
  }

  valueChanged(checked: boolean) {
    if (checked) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
    this.params.api.refreshCells();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
