import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from '@ag-grid-community/angular';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './components/grid/grid.component';
import {
  LinkAgCellRendererComponent,
  DateAgCellRendererComponent,
  TextAgCellRendererComponent,
  ThumbnailAgCellRendererComponent,
  CheckboxAgCellRendererComponent
} from './components/grid/cell-renderers';
import {
  CheckboxAgHeaderRendererComponent
} from './components/grid/cell-headers';
import { CheckboxComponent } from './components/common/checkbox/checkbox.component';
import {
  SelectionButtonComponent,
  SelectedRecordsComponent,
  TotalRecordsComponent
} from './components/grid/side-bar';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    LinkAgCellRendererComponent,
    DateAgCellRendererComponent,
    TextAgCellRendererComponent,
    ThumbnailAgCellRendererComponent,
    CheckboxAgCellRendererComponent,
    CheckboxAgHeaderRendererComponent,
    CheckboxComponent,
    SelectionButtonComponent,
    TotalRecordsComponent,
    SelectedRecordsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgGridModule.withComponents([
      DateAgCellRendererComponent,
      TextAgCellRendererComponent,
      LinkAgCellRendererComponent,
      ThumbnailAgCellRendererComponent,
      CheckboxAgCellRendererComponent,
      CheckboxAgHeaderRendererComponent,
      SelectionButtonComponent,
      SelectedRecordsComponent,
      TotalRecordsComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
