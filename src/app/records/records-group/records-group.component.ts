import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Entry } from '../entry/entry.model';

@Component({
	selector: 'app-records-group',
	templateUrl: './records-group.component.html',
	styleUrls: ['./records-group.component.scss']
})
export class RecordsGroupComponent implements OnInit {
	@Input() arrayEntries!: Entry[];
	newEntry!: Entry;

	today: string;

	constructor() { 
		this.today = Date();
	}

	ngOnInit(): void {
		
	}

	/*
	*
	*	Adds the input value in the textbox as the day's new entry record
	*
	*	UPDATE: The setting method of a new entry record needs to be updated. 
	*	Since a new entry row is automatically generated and added upon initialisation of the app component, 
	*	what needs to be done now is updating only that newly generated entry for the day.
	*
	
	*/



	receiveEmittedEntryHandler(objRecordsForm: any) {
		// this.newEntry = objRecordsForm.value.entry;
		const todaysDate = new Date();
		
		// Find this date inside ALL_ENTRIES_RECORDS
		const indexEntry = this.arrayEntries.findIndex(entry => this.compareEntryDates(entry.entryDate, todaysDate));
		
		console.log('received emitted object: ', objRecordsForm.value);

		if (indexEntry > -1) {
			this.arrayEntries[indexEntry].entryText = objRecordsForm.value.entry;
		}
		
	}


	/*
	 * Compares dates.
	 * Returns true if dates are equal, false if otherwise.
	 *
	*/

	compareEntryDates(date1: Date, date2: Date): boolean {

		return 	date1.getDay() === date2.getDay() && 
				date1.getMonth() === date2.getMonth() &&
				date1.getFullYear() === date2.getFullYear() ? true : false;
	}
}
