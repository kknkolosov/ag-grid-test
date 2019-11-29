import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { IHeaderAngularComp } from '@ag-grid-community/angular';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-header-checkbox',
  templateUrl: './header-checkbox.component.html',
  styleUrls: ['./header-checkbox.component.scss']
})
export class HeaderCheckboxComponent implements IHeaderAngularComp, OnDestroy {
  public params: any;
  public selected = false;
  private subscriptions: Subscription;

  agInit(params): void {
    this.params = params;
    this.subscriptions = fromEvent(params.api, 'selectionChanged').subscribe(() =>
      this.selected = this.params.api.getSelectedRows().length === this.params.api.getDisplayedRowCount()
    );
  }

  onCheckboxValueChanged($event: Event) {
    const isSelected = ($event.target as any).checked;
    if (isSelected) {
      this.params.api.selectAll();
    }    else {
      this.params.api.deselectAll();
    }
    this.params.api.refreshCells();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
