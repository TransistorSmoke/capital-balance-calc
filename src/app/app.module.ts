import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';   // Package containing methods we need for TD form processing

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { DescriptionComponent } from './description/description.component';
import { OutputTableComponent } from './output-table/output-table.component';
import { OutputChartComponent } from './output-chart/output-chart.component';
import { OutputViewComponent } from './output-view/output-view.component';
import { ListColumnComponent } from './list-column/list-column.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    DescriptionComponent,
    OutputTableComponent,
    OutputChartComponent,
    OutputViewComponent,
    ListColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
