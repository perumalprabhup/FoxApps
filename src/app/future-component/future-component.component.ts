import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-future-component',
  templateUrl: './future-component.component.html',
  styleUrls: ['./future-component.component.css']
})
export class FutureComponentComponent implements OnInit {
p1="The incentive scheme is designed in line with the guidelines of State Aid for maritime transport in the EEA (European Economic Area) Agreement.";
p2='This means that the companies can get grants for establishing new transport service, or the upgrading of existing services, between ports in the European Economic Area.';
p3='The incentive scheme is designed in line with the guidelines of State Aid for maritime transport in the EEA (European Economic Area) Agreement.';
  futureArray1: Object[];
   constructor() {
this.futureArray1 = [
{title:"Air Freight",url:"assets/img/12.jpg",comment:"Some quick example text to build on the card title and make up the bulk of the card's content."},
{title:"marine Freight",url:"assets/img/10.jpg",comment:"Some quick example text to build on the card title and make up the bulk of the card's content."}

]; 
}
  ngOnInit() {
  }

}
