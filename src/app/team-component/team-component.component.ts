import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.css']
})
export class TeamComponentComponent implements OnInit {

 teamArray: Object[];
   constructor() {
this.teamArray = [
{url:'assets/img/team/1.jpg',name:'Kay Garland',desc:'Lead Decision Maker'},
{url:'assets/img/team/2.jpg',name:'Larry Parker',desc:'Lead Manager'},
{url:'assets/img/team/1.jpg',name:'Stefan',desc:'Lead Logistics'},


]; }
  ngOnInit() {
  }

}
