import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Entry } from '../entry/entry.model';

@Component({
  selector: 'app-records-group',
  templateUrl: './records-group.component.html',
  styleUrls: ['./records-group.component.scss']
})
export class RecordsGroupComponent implements OnInit {
  // @Input() test: string = '';

  newEntry!: Entry;

  today: string;

  constructor() { 
    this.today = Date();
  }

  ngOnInit(): void {
  }

  receiveEmittedEntryHandler(objRecordsForm: any) {
    this.newEntry = objRecordsForm.value.entry;

    // console.log(this.newEntry);
    // console.log("This is from the RecordsGroupComponent.");
    // console.log("The emitted value is: ", objRecordsForm.value.entry);
  }

}
