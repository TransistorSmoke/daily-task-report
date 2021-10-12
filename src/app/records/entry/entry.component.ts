import { Component, Input, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Event } from '@angular/router';
import { Entry } from './entry.model';

@Component({
	selector: 'app-entry',
	templateUrl: './entry.component.html',
	styleUrls: ['./entry.component.scss']
})

export class EntryComponent implements AfterViewInit {
	@Input() singleRecordEntry!: Entry;
	@Input() isShown!: boolean;

	@ViewChild('clickToEdit') editorElement!: ElementRef;
	@ViewChild('entryElement') entryElement!: ElementRef;

	arrowPosition!: string;
	dateToday: string;

	isEditClicked: boolean;

	constructor(private renderer: Renderer2) { 
		this.dateToday = Date();
		this.isEditClicked = false;
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

		this.isEditClicked = true;
	}


	public toggleEntryDisplay(): void {
		// Show only entries with content. It's useless to show those with none.
		if (this.singleRecordEntry.entryText !== '') {
			this.singleRecordEntry.isEntryShown = !this.singleRecordEntry.isEntryShown;
		}

		if (this.isEditClicked) {
			this.isEditClicked = !this.isEditClicked;
		}
	}

	/*
	 * Handles the entry edit save or cancel actions
	 *
	*/
	public editEntryHandler(event: any) {
		const elNativeEntryRow = this.entryElement.nativeElement;
		const isCancel = event.target.classList.value.indexOf('cancel') > -1 ? true : false;
		const entryBeforeUpdate = this.singleRecordEntry.entryText;

		// Close the save/cancel row, set the textarea to be uneditable
		if (isCancel) {	
			this.renderer.setProperty(elNativeEntryRow, 'textContent', entryBeforeUpdate);	
		} else {
			this.renderer.setProperty(elNativeEntryRow, 'textContent', elNativeEntryRow.innerText);	
			this.singleRecordEntry.entryText = elNativeEntryRow.innerText;
		}

		this.isEditClicked = false;	
		this.renderer.setAttribute(elNativeEntryRow, 'contenteditable', 'false');
	}
}
