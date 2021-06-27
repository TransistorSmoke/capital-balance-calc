import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output-view',
  templateUrl: './output-view.component.html',
  styleUrls: ['./output-view.component.scss']
})
export class OutputViewComponent implements OnInit {
  @Input() dataForView: any;
  

  constructor() { }

  ngOnInit(): void {    
  }

  

}
