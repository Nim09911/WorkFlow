import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workflow-nav',
  templateUrl: './workflow-nav.component.html',
  styleUrls: ['./workflow-nav.component.css']
})
export class WorkflowNavComponent implements OnInit {

  name !: String;
  total : Number = 0;

  constructor() { }

  ngOnInit(): void {
    this.name = "Investment Proposal and Trade Ideas"
  }

}
