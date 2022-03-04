import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Entry } from '../records/entry/entry.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() arrayEntries!: Entry[];
  @Output() onEntryEmit: EventEmitter<Object>;

  currentDate: string;
  recordsForm!: FormGroup;
  newEntry!: Entry;

  constructor() {
    this.currentDate = Date();
    this.onEntryEmit = new EventEmitter();
  }

  ngOnInit(): void {
    this.recordsForm = new FormGroup({
      entry: new FormControl(null, Validators.required),
    });
  }

  /*
   *	Emit the records form data from this current FormComponent (child) to the RecordsGroupComponent (parent).
   *  Resets the form after emitting the data.
   *
   */
  public entrySubmitHandler(): void {
    this.onEntryEmit.emit(this.recordsForm);

    // Reset the textfield input
    this.recordsForm.setValue({ entry: '' });
  }
}
