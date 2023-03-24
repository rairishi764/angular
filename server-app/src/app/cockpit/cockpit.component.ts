import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  newServerName = '';
  newServerContent = '';
  //making the event emitter available to outside component access
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();

  onAddServer() {
    // the event emitter is called on button click to pass info to other component with required info
    this.serverCreated.emit(
      {
        serverName : this.newServerName,
        serverContent: this.newServerContent
    }
    )
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(
      {
        serverName : this.newServerName,
        serverContent: this.newServerContent
      }
      )
  }
}
