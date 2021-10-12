import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Entry } from '../entry/entry.model';
import { AllEntriesService } from '../../data/entries-data.service';

@Component({
	selector: 'app-records-group',
	templateUrl: './records-group.component.html',
	styleUrls: ['./records-group.component.scss']
})
export class RecordsGroupComponent implements OnInit {
	@Input() arrayEntries!: Entry[];

	newEntry!: Entry;
	today: string;

	constructor(private allEntriesService: AllEntriesService) { 
		this.today = Date();
	}

	ngOnInit(): void {}

	/*
	*	Adds the input value in the textbox as the day's new entry record
	*	Since a new entry row is automatically generated and added upon initialisation of the AppComponent, 
	*	what needs to be done now is updating only that newly generated entry for the day.
	*/

	public receiveEmittedEntryHandler(objRecordsForm: any): void {
		const todaysDate = new Date();
		const indexEntry = this.arrayEntries.findIndex(entry => this.compareEntryDates(entry.entryDate, todaysDate));
		const formInput = objRecordsForm.value.entry || null;

		// If text input is not empty, record it. Otherwise, do nothing.
		if (indexEntry > -1) {
			if (this.arrayEntries && formInput) {
				this.arrayEntries[indexEntry].entryText += (this.arrayEntries[indexEntry].entryText.length === 0) ? formInput : `\n${formInput}`;

				if (!this.arrayEntries[indexEntry].isEntryShown) {
					this.arrayEntries[indexEntry].isEntryShown = true;
				}
			}
		}
	}

	/*
	 * Compares dates.
	 * Returns true if dates are equal, false if otherwise.
	 *
	*/

	public compareEntryDates(date1: Date, date2: Date): boolean {
		return 	date1.getDay() === date2.getDay() && 
				date1.getMonth() === date2.getMonth() &&
				date1.getFullYear() === date2.getFullYear() ? true : false;
	}
}
