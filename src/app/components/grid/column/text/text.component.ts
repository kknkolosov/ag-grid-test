import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements ICellRendererAngularComp {
  text: string;
  agInit(params) {
    this.text = params.value;
  }
  refresh(): boolean {
    return false;
  }
}
