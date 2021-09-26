import { Component, Input, OnInit } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})



export class EntryComponent implements OnInit {
  @Input() allEntries!: Entry;
  
  today: string;
  


  constructor() { 
    this.today = Date();
  }


  ngOnInit(): void {

  }



}
