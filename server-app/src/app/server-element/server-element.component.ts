import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  //@Input makes the property bindable from outside the component
  @Input() element:{type: string, name: string, content:string};

  constructor(){}
  

}
