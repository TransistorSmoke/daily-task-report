import { Component, Input, OnInit } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})



export class EntryComponent implements OnInit {
  @Input() singleRecordEntry!: Entry;
  
  dateToday: string;

  constructor() { 
    this.dateToday = Date();
  }

  ngOnInit(): void {

  }
}
