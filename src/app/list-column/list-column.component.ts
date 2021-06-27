import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-column',
  templateUrl: './list-column.component.html',
  styleUrls: ['./list-column.component.scss']
})
export class ListColumnComponent implements OnInit {

  constructor() { }

  @Input() yearlyData: any;

  ngOnInit(): void { }

}
