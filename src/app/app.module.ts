import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecordsGroupComponent } from './records/records-group/records-group.component';
import { EntryComponent } from './records/entry/entry.component';
import { FormDirective } from './form/form.directive';
import { ButtonComponent } from './button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavigationComponent,
    RecordsGroupComponent,
    EntryComponent,
    FormDirective,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
