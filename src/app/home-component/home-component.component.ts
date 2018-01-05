import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

 homeCompArray: Object[];
 
  constructor() { 
  this.homeCompArray = [
      {
        url: "assets/img/4.jpg",
        slideName: "We are One of the Top One Quickest Service",
		desc:"This is for Local Stunts and Shiftings"
      },{
        url: "assets/img/1.jpg",
        slideName: "International Service For Quick Delivery",
		desc:"This is for International Trading Through Land"
      },{
        url: "assets/img/2.jpg",
        slideName: "Local Trips",
		desc:"This is Exclusively for Local Shiftings"
      }
	  ];
  
  }

  ngOnInit() {
  }

}
