import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoxApp';
  
navbarArray: Object[];

  constructor() {
this.navbarArray = [
{name:"home",value:"Home"},
{name:"about",value:"About"},
{name:"page",value:"Page"},
{name:"service",value:"Service"},
{name:"future",value:"Future"},
{name:"reviews",value:"Reviews"},
{name:"team",value:"Team"},
{name:"news",value:"News"},
{name:"contact",value:"Contact"}   
];
 }

}
