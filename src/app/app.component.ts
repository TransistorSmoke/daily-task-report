import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'daily-task-report';
  record: string = '';

  emittedFormRecordHandler(formRecord: any): void {
    this.record = formRecord.form.value.record;
  }
}


