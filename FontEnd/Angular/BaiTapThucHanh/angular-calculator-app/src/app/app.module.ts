import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/colorpicker.component';
import { ChangeFontSizeComponent } from './change-fontsize/changefontsize.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPickerComponent,
    ChangeFontSizeComponent
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
