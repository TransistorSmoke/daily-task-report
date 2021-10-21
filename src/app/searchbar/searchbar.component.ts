import { Component, Input, OnDestroy, OnInit  } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Entry } from '../records/entry/entry.model';

@Component({
	selector: 'app-searchbar',
	templateUrl: './searchbar.component.html',
	styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit, OnDestroy{
	@Input() allEntries!: Entry[];

	searchForm!: FormGroup;
	destroy$: Subject<boolean> = new Subject<boolean>();
	searchInputControl!: AbstractControl;
	tempAllEntries!: Entry[];

	tempFilterStrng: string = 'PDF';

	constructor() { }

	ngOnInit(): void {
		this.searchForm = new FormGroup({
			"search": new FormControl(null)
		});

		this.searchInputControl = this.searchForm.controls['search'];
		this.searchInputControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
			
		});
	}

	ngOnDestroy(): void {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}
}
