import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../../node_modules/bulma/css/bulma.css']
})
export class AppComponent implements OnInit {
  
  public appTitle: string;

  constructor(){
    this.appTitle = `Hello Stranger`
  }

  ngOnInit(){}
}
