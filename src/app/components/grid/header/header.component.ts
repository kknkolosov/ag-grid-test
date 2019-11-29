import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { resources } from 'src/app/global/resources';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit{
  rowCount = 0;
  rowSelectCount = 0;
  show = false;
  tglButtonText = resources.showSelection;
  resources = resources;
  @Input() params: any;
  @Output() suppressRowClick = new EventEmitter();

  ngOnInit() {
    this.rowSelectCount = this.params.api.getSelectedRows().length;
    this.rowCount =  this.params.api.getDisplayedRowCount();
  }

  showSelectionMode() {
    this.show = !this.show;
    if (this.show) {
      this.params.columnApi.setColumnWidth('description', 300);
      this.tglButtonText = resources.hideSelection;
      this.suppressRowClick.emit(false);
    } else {
      this.params.columnApi.setColumnWidth('description', 340);
      this.tglButtonText = resources.showSelection;
      this.suppressRowClick.emit(true);
      this.params.api.deselectAll();
    }
    this.params.columnApi.setColumnVisible('checkbox', this.show);
  }

}
