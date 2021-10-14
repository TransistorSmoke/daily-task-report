import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../records/entry/entry.model';
import { AllEntriesService } from '../data/entries-data.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonName!: string;

  allEntries!: Entry[];

  constructor(private allEntriesService: AllEntriesService) {}

  ngOnInit(): void {
  }

  public btnClickHandler(event: any):void {
    const entries = this.allEntriesService.get();
    const btnValue = event.target.textContent;
    if (btnValue === 'Open All') {
      entries.forEach(entry => entry.isEntryShown)
    }
  }

}
