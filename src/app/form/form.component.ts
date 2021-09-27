import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	// @Output() onRecordSubmit: EventEmitter<Object>;
	@Output() onEntryEmit: EventEmitter<Object>;

	currentDate: string;
	recordsForm!: FormGroup;

	constructor() { 
		this.currentDate = Date();
		// this.onRecordSubmit = new EventEmitter();

		this.onEntryEmit = new EventEmitter();
	}

	ngOnInit() {
		this.recordsForm = new FormGroup({
			"entry": new FormControl(null, Validators.required),
		});
	}

	entrySubmitHandler(): void {
		// console.log("Entry for the day: ", this.recordsForm.value.entry)
		// console.log(this.recordsForm);
		try {
			this.onEntryEmit.emit(this.recordsForm);
			this.recordsForm.setValue({
				"entry": ''
			});
		} catch (error) {
			console.log(error);
		}
	}




	// recordSubmitHandler(formRecord: NgForm): void {
	//   /*
	//    * Emit the click action to AppComponent. AppComponent will listen to the click event and handles the display of the rows there.
	//    *
	//   */
	//   // console.log(formRecord.form.value.record)
	//   // console.log(formRecord.value.record);
	//   this.onRecordSubmit.emit(formRecord);
	// }

}
