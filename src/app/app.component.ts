import { Component, OnInit } from '@angular/core';
import { Entry } from './records/entry/entry.model';
import { ALL_ENTRIES_RECORDS } from './data/entries-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'daily-task-report';
  record: string = '';

  allEntries: Entry[];
  newEntries!: Entry[];

  constructor() {
    this.allEntries = ALL_ENTRIES_RECORDS;
  }

  ngOnInit(): void {
    // Create and add new entry record for the day to allEntries and sort the new array in a descending order
    this.newEntries = [...this.allEntries, new Entry(new Date(), '')];
    this.newEntries.sort((a, b) => {
      return <any>new Date(b.entryDate) - <any>new Date(a.entryDate);
    });
  }
}


