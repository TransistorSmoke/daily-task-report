import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() onRecordSubmit: EventEmitter<Object>;

  currentDate: string;

  constructor() { 
    this.currentDate = Date();
    this.onRecordSubmit = new EventEmitter();
  }

  ngOnInit(): void {
  }

  recordSubmitHandler(formRecord: NgForm): void {
    /*
     * Emit the click action to AppComponent. AppComponent will listen to the click event and handles the display of the rows there.
     *
    */
    console.log(formRecord.form.value.record)
    // console.log(formRecord.value.record);
    this.onRecordSubmit.emit(formRecord);
  }


}
