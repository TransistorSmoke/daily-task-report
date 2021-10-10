import { Component, Input, OnInit } from '@angular/core';
import { Entry } from './entry.model';

@Component({
	selector: 'app-entry',
	templateUrl: './entry.component.html',
	styleUrls: ['./entry.component.scss']
})

export class EntryComponent implements OnInit {
	@Input() singleRecordEntry!: Entry;

	arrowPosition: string = 'up';
	dateToday: string;

	constructor() { 
		this.dateToday = Date();
	}

	ngOnInit(): void {
		console.log(this.singleRecordEntry)
	}

}
