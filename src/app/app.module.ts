import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GridModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './app.component';
import { BooleanfilterComponent } from './booleanfilter/booleanfilter.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, BooleanfilterComponent],
  imports: [BrowserModule, BrowserAnimationsModule, GridModule],
})
export class AppModule {}
