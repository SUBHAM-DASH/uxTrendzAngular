import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-referrance',
  templateUrl: './template-referrance.component.html',
  styleUrls: ['./template-referrance.component.scss']
})
export class TemplateReferranceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getTemplateVariableData(template:any){
    console.log(template.value);
  }
}
