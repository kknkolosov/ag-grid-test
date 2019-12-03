import { Component } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { EntityService } from 'src/app/services/entity.service';
import { ICellRendererParams } from '@ag-grid-community/core';

@Component({
  selector: 'app-link-ag-cell-renderer',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkAgCellRendererComponent implements ICellRendererAngularComp {
  title: string;
  url: string;

  constructor(private entityService: EntityService) {
  }

  agInit(params: ICellRendererParams) {
    this.title = params.value;
    this.url = this.entityService.getUrlById(params.data.videoId);
  }

  refresh(): boolean {
    return false;
  }

}
