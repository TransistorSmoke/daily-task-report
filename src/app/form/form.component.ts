import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  currentDate: string;

  constructor() { 
    this.currentDate = Date();
    

  }

  ngOnInit(): void {
  }

  onSubmit(form: any):void {
    /*
     * Emit the click action to AppComponent. AppComponent will listen to the click event and handles the display of the rows there.
     *
    */
  }


}
