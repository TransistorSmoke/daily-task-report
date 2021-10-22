import { Component, OnInit } from '@angular/core';
import { Entry } from './records/entry/entry.model';
import { AllEntriesService } from './data/entries-data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title: string = 'daily-task-report';
	record: string = '';

	allEntries!: Entry[];
	newEntries!: Entry[];

	constructor(private allEntriesService: AllEntriesService) {}

	ngOnInit(): void {
		this.allEntries = this.allEntriesService.get();
		this.newEntries = [...this.allEntries, new Entry(new Date(), '')];
		this.newEntries.sort((a, b) => <any>new Date(b.entryDate) - <any>new Date(a.entryDate));
	}
}


