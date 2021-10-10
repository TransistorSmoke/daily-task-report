import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Event } from '@angular/router';
import { Entry } from './entry.model';

@Component({
	selector: 'app-entry',
	templateUrl: './entry.component.html',
	styleUrls: ['./entry.component.scss']
})

export class EntryComponent implements OnInit, AfterViewInit{
	@Input() singleRecordEntry!: Entry;
	@Input() isShown!: boolean;

	@ViewChild('testClickIcon') testClickIcon!: ElementRef;

	arrowPosition!: string;
	dateToday: string;

	constructor() { 
		this.dateToday = Date();
	}

	ngOnInit(): void {
		
	}

	ngAfterViewInit() {

	}

	public editEntry(e: Event): void {

	}


	public toggleEntryDisplay(): void {
		// Show only entries with content. It's useless to show those with none.
		if (this.singleRecordEntry.entryText !== '') {
			this.singleRecordEntry.isEntryShown = !this.singleRecordEntry.isEntryShown;
		}
	}
}
