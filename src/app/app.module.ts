import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipsModule } from '@progress/kendo-angular-tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule } from '@angular/forms';
import { CopyClipboardDirective } from './copy-clipboard.directive';
import { CustomClipboardDirective } from './custom-clipboard.directive';
import { PopupModule } from '@progress/kendo-angular-popup';







@NgModule({
  declarations: [
    AppComponent,
    CopyClipboardDirective,
    CustomClipboardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipsModule,
    BrowserAnimationsModule,
    DateInputsModule,
    LayoutModule,
    InputsModule,
    FormsModule,
    PopupModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
