import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Entry } from './entry.model';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})

export class EntryComponent implements OnInit {
  // @ViewChild('upDownArrow') arrowDisplayToggler: ElementRef;
  @Input() singleRecordEntry!: Entry;

  arrowPosition: string = 'down';
  
  dateToday: string;

  constructor() { 
    this.dateToday = Date();
  }

  ngOnInit(): void {

  }
}
