import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from '@ag-grid-community/angular';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './components/grid/grid.component';
import {
  LinkComponent,
  DateComponent,
  TextComponent,
  ThumbnailComponent,
  CheckboxAgCellRendererComponent
} from './components/grid/cell-renderers';
import {
  CheckboxAgHeaderRendererComponent
} from './components/grid/cell-headers';
import { CheckboxComponent } from './components/common/checkbox/checkbox.component';
import { LinkedComponent } from './components/common/icons/linked/linked.component';
import {
  SelectionButtonComponent,
  SelectedRecordsComponent,
  TotalRecordsComponent
} from './components/grid/side-bar';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    LinkComponent,
    DateComponent,
    TextComponent,
    ThumbnailComponent,
    CheckboxAgCellRendererComponent,
    CheckboxAgHeaderRendererComponent,
    CheckboxComponent,
    LinkedComponent,
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
      DateComponent,
      TextComponent,
      LinkComponent,
      ThumbnailComponent,
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
