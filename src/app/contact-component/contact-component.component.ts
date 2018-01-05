import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {
phno='123-456-6789';
para='Ready to start your next project with us? That\'s great! Give us a call or send us an email and we will get back to you as soon as possible!';
  email='perumalprabhu92@gmail.com';
  constructor() { }

  ngOnInit() {
  }

}
