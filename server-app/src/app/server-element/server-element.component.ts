import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.None // removes component level segregation of styles throughout project
})
export class ServerElementComponent implements OnInit,OnChanges{
  //@Input makes the property bindable from outside the component
  //@Input() element:{type: string, name: string, content:string};

  //Assigning alias to the custom element to be used for binding in parent component
  //used to bind in app.component
  @Input('srvElement') element:{type: string, name: string, content:string};

  constructor(){
    console.log('constructor called')
  }
  ngOnInit(){
    console.log("onInit called")
  }
  ngOnChanges(){
    console.log("ngOnChange called")
  }

}
