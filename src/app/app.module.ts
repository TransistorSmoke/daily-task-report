import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecordsGroupComponent } from './records/records-group/records-group.component';
import { EntryComponent } from './records/entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavigationComponent,
    RecordsGroupComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
