import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2} from '@angular/core';
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

	@ViewChild('clickToEdit') editorElement!: ElementRef;
	@ViewChild('entryElement') entryElement!: ElementRef;

	arrowPosition!: string;
	dateToday: string;

	constructor(private renderer: Renderer2) { 
		this.dateToday = Date();
	}

	ngOnInit(): void {
		
	}

	ngAfterViewInit() {

	}

	/*
	 * Enable the editing of the entry
	 *
	*/
	public editEntry(): void {

		if(!this.singleRecordEntry.isEntryShown && this.singleRecordEntry.entryText) {
			this.singleRecordEntry.isEntryShown = true;
		}

		this.renderer.setAttribute(this.entryElement.nativeElement, 'contenteditable', 'true');
		this.entryElement.nativeElement.focus();
	}


	public toggleEntryDisplay(): void {
		// Show only entries with content. It's useless to show those with none.
		if (this.singleRecordEntry.entryText !== '') {
			this.singleRecordEntry.isEntryShown = !this.singleRecordEntry.isEntryShown;
		}
	}
}
