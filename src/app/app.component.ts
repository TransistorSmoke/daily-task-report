import { Component, OnInit } from '@angular/core';
import { Entry } from './records/entry/entry.model';

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
    this.allEntries = [
      new Entry (new Date('25 Sept 2021'), 'Nothing new here'),
      new Entry (new Date('02 Sept 2021'), 'bugs found in new age field component'),
      new Entry (new Date('19 Sept 2021'), 'validation problems still with the component'),
    ];

    
  }

  ngOnInit(): void {
    // Create and add new entry record for the day to allEntries and sort the new array in a descending order
    this.newEntries = [...this.allEntries, new Entry(new Date(), 'Hi, I am a new record for today')];
    this.allEntries.sort((a, b) => {
      return <any>new Date(b.entryDate) - <any>new Date(a.entryDate);
    });
  }
}


