import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {

  selectedProduct:any;
  constructor() { }

  ngOnInit(): void {
  }
  getProductChange(val:any){
    this.selectedProduct = val.target.value;
  }
}