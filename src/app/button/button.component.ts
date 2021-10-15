import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from '../records/entry/entry.model';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonName!: string;
  @Output() onButtonToggleState: EventEmitter<boolean>;


  allEntries!: Entry[];

  constructor() {
    this.onButtonToggleState = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public btnClickHandler(event: any):void {
    const btnValue = event.target.textContent;
    this.onButtonToggleState.emit(btnValue === 'Open All' ? true : false);
  }

}
