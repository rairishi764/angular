import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverID:number = 10;
  serverStatus:string = "up";
  isAllowed:boolean = false;

  getServerStatus() {
    return this.serverStatus
  
  }
  onCreateServer(){
    this.serverStatus = "Server Created";
  }
}
