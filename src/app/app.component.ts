import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  public title = 'app';
  public user: string;

  ngOnInit() {
    this.user = localStorage.getItem('contactEmail');
  }

  ngDoCheck() {
    this.user = localStorage.getItem('contactEmail');
  }

}
