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

}
