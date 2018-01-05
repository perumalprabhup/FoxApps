import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {
  cargoArray: Object[];
   constructor() {
this.cargoArray = [
{cargo:"Air Freight",exp:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni."},
{cargo:"Ocean Freight",exp:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni."},
{cargo:"Logistic Service",exp:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni."} 
]; }

  ngOnInit() {
  }

}
