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

	// Adds the input value in the textbox as the day's new entry record
	receiveEmittedEntryHandler(objRecordsForm: any) {
		this.newEntry = objRecordsForm.value.entry;
	}
}
