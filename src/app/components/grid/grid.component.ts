import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridOptions } from '@ag-grid-community/core';
import { EntityService } from 'src/app/services/entity.service';
import { CheckboxComponent } from './column/checkbox/checkbox.component';
import { title, description, published, thumbnail, checkbox } from './columnDefinitions/columnDefinitions';
import { AllModules } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  rowData: Observable<any[]>;
  modules = AllModules;
  params: any;
  isLoaded = false;
  gridOptions: GridOptions = {
    defaultColDef: {
      sortable: true,
      resizable: true,
      filter: true,
    },
    columnDefs: [
      checkbox,
      thumbnail,
      published,
      title,
      description,
    ],
    rowSelection: 'multiple',
    rowMultiSelectWithClick: true,
    suppressCellSelection: true,
    suppressRowClickSelection: true,
    getContextMenuItems: (params) => this.getContextMenuItems(params),
  };

  constructor(private entityService: EntityService ) { }

  ngOnInit() {
    this.rowData = this.entityService.get();
  }

  onGridReady(params): void {
    this.params = params;
    this.isLoaded = true;
  }

  suppressRowClick(event) {
    this.gridOptions.suppressRowClickSelection = event;
  }

  getContextMenuItems(params): any[] {
    const url = this.entityService.getUrlById(params.node.data.videoId);
    return [
      'copy',
      'copyWithHeaders',
      'separator',
      {
        icon: `<span class="ag-icon ag-icon-linked"></span>`,
        name: 'Open in new tab',
        action: () => {
           window.open(url, '_blank');
        }
      }
    ];
  }
}
