import { Component } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';

@Component({
  selector: 'app-cell-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxAgCellRendererComponent implements ICellRendererAngularComp {
  private params: any;
  public checked = false;

  public agInit(params: any): void {
      this.params = params;
      this.checked = this.params.node.isSelected();
      this.params.api.addEventListener('selectionChanged', () => this.changeSelection());
  }

  public valueChanged(checked: boolean): void {
      this.params.node.setSelected(checked);

  }

  changeSelection(): void {
    this.checked = this.params.node.isSelected();
  }

  refresh(): boolean {
      return false;
  }

}
