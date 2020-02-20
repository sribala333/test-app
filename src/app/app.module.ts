import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './common/modules/material/material.module';
import { DynamicComponent } from './pages/dynamic/dynamic.component';
import { HomeComponent } from './pages/home/home.component';
import { NgxMatAutocompleteControlModule } from 'ngx-mat-autocomplete-control';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    HomeComponent,
    DashboardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NgxMatAutocompleteControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
