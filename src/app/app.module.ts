import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KouziListComponent } from './kouzi-list/kouzi-list.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  declarations: [AppComponent, KouziListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
