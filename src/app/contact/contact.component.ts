import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit{

  public contactEmail: string;

  constructor() { }

  ngOnInit() {
    console.log('contact.component cargado!');
  }

  handleMail(){
    localStorage.setItem('contactEmail', this.contactEmail);
  }

}
