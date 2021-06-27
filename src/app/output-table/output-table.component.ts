import { registerLocaleData } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['./output-table.component.scss']
})
export class OutputTableComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}

  // Receives and stores the form data from <app-input-form> component
  @Input() dataTable: any;  

}
