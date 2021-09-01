import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  @Input() test: string = '';

  constructor() { 
  }

  ngOnInit(): void {
  }

}
