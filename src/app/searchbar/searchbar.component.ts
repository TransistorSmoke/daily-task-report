import { Component, Input, Output, OnDestroy, OnInit, EventEmitter  } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Entry } from '../records/entry/entry.model';
import { AllEntriesService } from '../data/entries-data.service';

@Component({
	selector: 'app-searchbar',
	templateUrl: './searchbar.component.html',
	styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit, OnDestroy{
	@Input() allEntries!: Entry[];
	@Output() onSearchEmit: EventEmitter<Entry[]>;

	searchForm!: FormGroup;
	destroy$: Subject<boolean> = new Subject<boolean>();
	searchInputControl!: AbstractControl;
	searchedEntries!: Entry[];

	refAllEntries!: Entry[]

	tempFilterString: string = 'PDF';

	constructor(private allEntriesService: AllEntriesService) { 
		this.onSearchEmit = new EventEmitter();
		this.refAllEntries = this.allEntriesService.get();
	}

	ngOnInit(): void {
		this.searchForm = new FormGroup({
			"search": new FormControl(null)
		});

		this.searchInputControl = this.searchForm.controls['search'];
		this.searchInputControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
			this.searchedEntries = this.refAllEntries.filter(entry => entry.entryText.toLowerCase().indexOf(value.toLowerCase()) > -1);
			this.onSearchEmit.emit(this.searchedEntries);
		});
	}

	ngOnDestroy(): void {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}

	searchInputHandler() {
		console.log('Emit keyboard event');
	}
}
