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
  CheckboxComponent,
  HeaderCheckboxComponent
} from './components/grid/column';

import { HeaderComponent } from './components/grid/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    LinkComponent,
    DateComponent,
    TextComponent,
    ThumbnailComponent,
    CheckboxComponent,
    HeaderCheckboxComponent,
    HeaderComponent
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
      CheckboxComponent,
      HeaderCheckboxComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
