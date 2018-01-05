import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-component',
  templateUrl: './page-component.component.html',
  styleUrls: ['./page-component.component.css']
})
export class PageComponentComponent implements OnInit {

  yearsArray: Object[];
  tblValuesArray: Object[];
  
  heading='New incentive scheme to get freight from roads to sea';
  para='Oct. 11 2016 - Hans Kristian Haram - In the state budget, the Norwegian government proposes to introduce a new incentive scheme to encourage more transport by sea. This will strengthen short sea shipping, provide environmental gains, improving road safety and free up capacity on Norwegian roads, says Minister of Transport and Communication, Ketil Solvik-Olsen.For the three-year pilot scheme, the government proposes to set aside NOK 30 million (€ 3,3 million) for the initial year 2017. Companies that can verfify that a new or improved line will cause permanent shift of cargo are eligible for support.- It is important for us that the scheme leads to lasting transfer of goods. It is essential that cargo owners are use the service when the new or modified lines are started, and that the offer is being established in line with the needs of the last owners. It is crucial that shipowners and cargo owners cooperate, says the Minister';
 

  constructor() {
this.yearsArray = [
{year:"5000",work:"Project Done."},
{year:"24567",work:"Happy Clients"},
{year:"25 Years",work:"Experiences"} 
];

this.tblValuesArray = [
{fors:"name",value:"Name"},
{fors:"shipFrom",value:"Ship From"},
{fors:"shipTo",value:"Ship To"},
{fors:"email",value:"Email Id"}
];

 }
  ngOnInit() {
  }

}
