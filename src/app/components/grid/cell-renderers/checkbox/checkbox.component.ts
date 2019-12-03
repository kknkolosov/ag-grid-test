import { Component, OnDestroy } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-checkbox-ag-cell-renderer',
  templateUrl: './checkbox.component.html'
})
export class CheckboxAgCellRendererComponent implements ICellRendererAngularComp, OnDestroy {
  private params: any;
  public checked = false;
  private subscriptions: Subscription;

  public agInit(params: any): void {
    this.params = params;
    this.checked = this.params.node.isSelected();
    this.subscriptions = fromEvent(params.api, 'selectionChanged').subscribe(() =>
      this.checked = this.params.node.isSelected()
    );
  }

  public valueChanged(checked: boolean): void {
     this.params.node.setSelected(checked);
  }

  refresh(): boolean {
      return false;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
