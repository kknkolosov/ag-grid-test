import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  public params: any;

  agInit(params): void {
    this.params = params;
  }

  onCheckboxValueChanged($event: Event) {
    const isSelected = ($event.target as any).checked;
    if (isSelected) {
      this.params.node.selected = true;
    } else {
      this.params.node.selected = false;
    }
    this.params.api.refreshCells();
  }
}
