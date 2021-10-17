import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from '../records/entry/entry.model';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() btnOpenCloseState!: string;
  @Output() onButtonToggleState: EventEmitter<boolean>;


  allEntries!: Entry[];
  

  constructor() {
    this.onButtonToggleState = new EventEmitter();
  }

  /*
   * Emit the event to event when open/close button is clicked
  */
  public btnClickHandler(event: any):void {
    let btnValue = event.target.textContent;
    this.onButtonToggleState.emit(btnValue.toLowerCase().indexOf('open') > -1 ? true : false);
  }

}
