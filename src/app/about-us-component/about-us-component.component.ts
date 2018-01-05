import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-component',
  templateUrl: './about-us-component.component.html',
  styleUrls: ['./about-us-component.component.css']
})
export class AboutUsComponentComponent implements OnInit {

  abtUsArray: Object[];
  save = '65% Save Your money if you business with us';
      content='Transport in India consists of transport by land, water, and air. ... India\'s rail network is the 3rd longest and the most heavily used system in the world, transporting 8.225 billion passengers and over 970 million tonnes of freight annually, as of 2015. The railways transport about 18 million citizens daily.';
  
 
  constructor() { 
  this.abtUsArray = [
      {
        
		value:"Low Cost"
      },
	  {
        
		value:"Expert Staff"
      },
	  {
        
		value:"24/7 Available"
      },
	  {
        
		value:"Best Logistics Services"
      }
	  
	  ];
	  
	
	  
  }

  ngOnInit() {
  }

}
